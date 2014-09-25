var headTop = 130;
var headHeight = 86;
///////    get page is visible     ///////
/*
function getPrefix() {
	if (document.hidden !== undefined){
	  return "";
	}else{
	  var brwsrPrefs = ["webkit","moz","ms","o"];
	  for(i in brwsrPrefs) {
		if (document[brwsrPrefs[i] + "Hidden"] != undefined) {
		  return brwsrPrefs[i];
		}
	  }
	}
}

function pageViewCheck(prefix) {
	var isVisible = document[(prefix === "" ? "v" : prefix + "V")+ "isibilityState"] == "visible";
	if(isVisible){
		console.log("page is Visible Now! ");
		// start animation
	}else{
		console.log("page is hidden ");
	}
}

function testPageVisibilityApi() {
	var prefix = getPrefix();
	if (prefix === null){ 
		console.log("The browser does not support Page Visibility API");
		//  start animation anyway
	} else {
	  document.addEventListener(prefix + "visibilitychange", function(){pageViewCheck(prefix)});
	  pageViewCheck(prefix);
	}
}

window.onload = testPageVisibilityApi;
*/
///////    end get page is visible     ///////


///////    get visibility on page     ///////

function posY(elm) {
	var test = elm, top = 0;
	while(!!test && test.tagName.toLowerCase() !== "body") {
		top += test.offsetTop;
		test = test.offsetParent;
	}
	return top;
}

function viewPortHeight() {
	var de = document.documentElement;
	if(!!window.innerWidth)
	{ return window.innerHeight; }
	else if( de && !isNaN(de.clientHeight) )
	{ return de.clientHeight; }
	return 0;
}

function elmScrollTop() {
	if( window.pageYOffset ) { return window.pageYOffset; }
	return Math.max(document.documentElement.scrollTop, document.body.scrollTop);
}

function checkVisible( elm ) {
	var vpH = viewPortHeight(),
		st = elmScrollTop(),
		y = posY(elm);
	return (y < (vpH + st)) && (y-headHeight+elm.offsetHeight > st);
}
///////    end get visibility on page     ///////




////////    scroll Parallax  //////////////////

var oldScroll = 0;
function getScrollDir(scroll){
	var dir = scroll-oldScroll;
	oldScroll = scroll;
	return dir;

}

window.onscroll = function(ev) { 
	var scroll = elmScrollTop();
	var dir = getScrollDir(scroll);
	moveParallElems(scroll);
	moveTopNav(dir, scroll);
	updateSideNav();
}
/*
var hideNavTime;
window.onmousemove = function(){
	if(hideNavTime)clearTimeout()
	hideNavTime = setTimeout(function(){hideNavigation()},1000)
}

function hideNavigation(){
	//console.log("hide now ");
}*/



var moveRange,scrollRange,topScroll,topPos,bottomScroll,
bgLogoHuge =  getEl_ID('bgLogoHuge');
function initPrlx(){
	var swuiY = posY(getEl_ID(bgLogoHuge.dataset.start));
	topScroll = swuiY - viewPortHeight();
	bottomScroll = posY(getEl_ID(bgLogoHuge.dataset.end));
	scrollRange = bottomScroll - topScroll;

	topPos = swuiY - viewPortHeight()/2;
	var bottomPos = bottomScroll - bgLogoHuge.offsetHeight + viewPortHeight()/2;
	moveRange = bottomPos - topPos;
}

var moveRange2,scrollRange2,topScroll2,topPos2,bottomScroll2,
bgLogoHuge2 =  getEl_ID('bgLogoHuge2');
function initPrlx2(){
	var swuiY2 = posY(getEl_ID(bgLogoHuge2.dataset.start));
	topScroll2 = swuiY2 - viewPortHeight();
	bottomScroll2 = posY(getEl_ID(bgLogoHuge2.dataset.end));
	scrollRange2 = bottomScroll2 - topScroll2;

	topPos2 = swuiY2 - viewPortHeight()/2;
	var bottomPos2 = bottomScroll2 - bgLogoHuge2.offsetHeight + viewPortHeight()/2;
	moveRange2 = bottomPos2 - topPos2;
}

if(bgLogoHuge)initPrlx();
if(bgLogoHuge2)initPrlx2();

function moveParallElems(scroll){
	if(scroll > topScroll && scroll < bottomScroll){
		var addScroll = scroll - topScroll;
		var addMove = addScroll*moveRange/scrollRange;
		var newPos = topPos + addMove;
		bgLogoHuge.style.top =  newPos + "px";
	}
	if(scroll > topScroll2 && scroll < bottomScroll2){
		var addScroll2 = scroll - topScroll2;
		var addMove2 = addScroll2*moveRange2/scrollRange2;
		var newPos2 = topPos2 + addMove2;
		bgLogoHuge2.style.top =  newPos2 + "px";
	}
	
}

////////    end scroll Parallax  //////////////////

function moveTopNav(dir, scroll){
	var nav =  getEl_ID('nav');
	if(scroll > headTop){
		nav.style.position = "fixed";
		nav.style.top = "0";
	}else{
		nav.style.position = "absolute";
		nav.style.top = headTop+"px";
	}

}


///////      vertical navigation       /////////////

function getEl_ID(nm){
	return document.getElementById(nm);
}

function createEl(nm, inner){
	var el  = document.createElement(nm);
	if(inner) el.innerHTML = inner;
	return el;
}

function getElementByClass (className, parent) {
  parent || (parent = document);
  var descendants= parent.getElementsByTagName('*'), i=-1, e, result=[];
  while (e=descendants[++i]) {
    ((' '+(e['class']||e.className)+' ').indexOf(' '+className+' ') > -1) && result.push(e);
  }
  return result;
}

function findHeadLines(){
	var els = getElementByClass('headline'),
	conts = getElementByClass('content'),
	arr = [];

	for(nm in els){
		arr.push({
			'el': els[nm],
			'contHeight':conts[nm].offsetHeight,
			'name': els[nm].getElementsByTagName('span')[0].innerHTML,
			'pos': posY(els[nm])-headHeight 
		});
	}
	return arr;
}

var headLines = findHeadLines();

function sideNavGen(){
	var ul = getEl_ID('side-nav');
	if(!ul)return;

	ul.appendChild(createNavLi({
		'href':'javascript:pageScrollTo("up")'
	}));
	for (nm in headLines){
		ul.appendChild(createNavLi({
			'href':'javascript:pageScrollTo('+headLines[nm].pos+')',
			'span': headLines[nm].name,
			'active': getIsNavElemActive(headLines[nm-1],headLines[nm])
		}));
	}
	
	ul.appendChild(createNavLi({
		'href':'javascript:pageScrollTo("down")'
	}));
}


function createNavLi(o){
	var li  = createEl('li'), 
	a  = createEl('a');

	if(o.span){
		a.appendChild(createEl('div'));
		a.appendChild(createEl('span', o.span));
	}

	a.href = o.href;
	if(o.active)a.id = 'navActive';
	li.appendChild(a);
	return li;
}

sideNavGen();


function updateSideNav(){
	var ul = getEl_ID('side-nav'),
	childs = ul.childNodes,
	count = -1;

	for(i in childs){
		if(childs[i].getElementsByTagName){
			var div = childs[i].getElementsByTagName('DIV')[0];
			if(div){
				count++;
				var isActive = getIsNavElemActive(headLines[count-1], headLines[count])
				var a = childs[i].getElementsByTagName('A')[0];
				if(isActive){
					a.id = 'navActive';
				}else{
					a.id = 'inactive';
				}
			}
		}
	}
}

/*
	var vpH = viewPortHeight(),
		st = elmScrollTop(),
		y = posY(elm);
	return (y < (vpH + st)) && (y+elm.offsetHeight > st);
*/

function getIsNavElemActive(prev, hl){
	var scroll = elmScrollTop(),
	elm = hl.el,
	headerPos = hl.pos
	contHeight = hl.contHeight,
	range = headerPos+elm.offsetHeight+contHeight,
	topHalf = viewPortHeight()/2,
	isActive = false,
	headerInTopHalf = (headerPos < (topHalf + scroll)) && (headerPos+elm.offsetHeight > scroll),
	bodyFillsTopHalf = (range > (topHalf + scroll)) && (headerPos < scroll);



	if(headerInTopHalf || bodyFillsTopHalf){
		isActive = true;
	}

	if(prev && (prev.pos < (topHalf + scroll)) && (prev.pos+prev.el.offsetHeight > scroll)){
		isActive=false;
	}

	//if(headerInTopHalf)console.log("headerInTopHalf "+headerInTopHalf);

	//if(bodyFillsTopHalf)console.log("bodyFillsTopHalf "+bodyFillsTopHalf);


	return isActive;

}


var pageScrollTimer;
function pageScrollTo(toY){
 	if(pageScrollTimer) clearTimeout(pageScrollTimer);
 	var actY = elmScrollTop();
 	if(toY=='up'||toY=='down')toY = findYforDirection(toY, actY);

 	if(toY<0) toY = 0; 
 	var frY = 0 + actY;

    frY += (toY - actY)/6;
    if (frY<0) frY = 0;
    var posY = (toY<frY) ? Math.floor(frY) : Math.ceil(frY);
    window.scrollTo(0, posY);

    if((Math.floor(Math.abs(actY - toY)) < 1)){
        clearTimeout(pageScrollTimer);
        window.scroll(0,toY);
    }else if(posY != toY){
        pageScrollTimer = setTimeout(function(){pageScrollTo(toY)},8);
    }else{
        clearTimeout(pageScrollTimer);
    }
}

function findYforDirection(toY, actY){
	var arr = [];
	if(toY=='up')arr.push(0);
	for (nm in headLines){
		if(toY=='up' && actY > headLines[nm].pos)arr.push(headLines[nm].pos);
		if(toY=='down' && actY < headLines[nm].pos)arr.push(headLines[nm].pos);
	}
	if(toY=='down'){
		arr.push(document.documentElement.scrollHeight - viewPortHeight());
		arr = arr.reverse();
	}
	return arr[arr.length-1];
}
///////////////////   end vertical navigation     /////////////////


///////////////////   banner animation     /////////////////

var bnrLen=0;
var rotateBnrsTime;
function loadBannerImages(){
	var train = getEl_ID('banner_train');
	if(!train)return;
	
	var ul = getEl_ID('banner_ctrls'),
	imgs = train.getElementsByTagName('img');

	for (i in imgs){
		if(i>0){
			ul.innerHTML += '<li onmouseover="bnrMenu('+i+')"><a><div></div></a></li>';
			bnrLen = i*1+1;
		}
	}

	var liWidth = 49,
	bnrWidth = 800,
	imgWidth = 667,
	left = (bnrWidth - liWidth*bnrLen)/2;
	
	train.style.width = imgWidth * bnrLen +'px';
	ul.style.left = left +'px';

	startBnrRotation();
	
}

loadBannerImages();

function startBnrRotation(){
	if(rotateBnrsTime)clearTimeout(rotateBnrsTime);
	rotateBnrsTime = setTimeout(function(){rotateBnrs()},3000);
}

function rotateBnrs(){
	if(++currBnr>bnrLen-1)currBnr=0;
	bnrMenu(currBnr);
	rotateBnrsTime = setTimeout(function(){rotateBnrs()},3000);
}

function updateBannerCtrlNav(n){
	currBnr = n;
	var ul = getEl_ID('banner_ctrls'),
	count = -1,
	childs = ul.childNodes;

	for(i in childs){
		if(childs[i].getElementsByTagName){
			var div = childs[i].getElementsByTagName('DIV')[0];
			if(div){
				count++;
				var isActive = count == n;
				var a = childs[i].getElementsByTagName('A')[0];
				if(isActive){
					a.id = 'bnrActive';
				}else{
					a.id = 'inactive';
				}
			}
		}
	}
}

var currBnr = 0;
function bnrMenu(n){
	if(rotateBnrsTime)clearTimeout(rotateBnrsTime);
	var div = getEl_ID('banner_train'),
	imWidth = 667;
	div.style.left = -n*imWidth+'px';
	updateBannerCtrlNav(n);
}

//////////////    image map helper  ///////////


function imgMapOver(el){
	var txt = el.innerHTML;
	if(!el.saveAll){
		el.saveAll = txt;
		el.saveText = txt.substr(2);
		el.saveNum = txt.substr(0,1);
	}
	if(el.restoreNum)clearTimeout(el.restoreNum);
	if(el.restoreAll)clearTimeout(el.restoreAll);
	el.innerHTML = el.saveNum;
	el.restoreTxt = setTimeout(function(){el.innerHTML = el.saveText},200);
}

function imgMapOut(el){
	if(el.restoreTxt)clearTimeout(el.restoreTxt);
	el.restoreNum = setTimeout(function(){el.innerHTML = el.saveNum},300);
	el.restoreAll = setTimeout(function(){el.innerHTML = el.saveAll},500);
}