function onCloseRecentFilesWindow(){
	inOpenFilesOptionsMode = false;
	swtrace = 0;
	createSWiframe();
	setTimeout(function(){
		if(!localStorage.welcomTourViewed)startWelcomeTour()
	},3500);
}

function getHamburgerTextCode(){
	var str='';
	if(menuSettings.hamburgerText){
		str +="	#swimbi>ul:after {\n"
		str +="		line-height: "+(menuSettings.mainmenuHeight-2)+"px;\n"
		str +="		content: '"+menuSettings.hamburgerText+"';\n"
		str +="		font-family: "+menuSettings.mainFontFamily+" !important;\n"
		str +="		font-size: "+menuSettings.mainTextSize+"px;\n"
		str +="		color: #"+menuSettings.mainTextColor+";\n"
		str +="		float:right;\n"
		str +="		padding-right: 15px;\n"
		str +="	}\n\n"

		str +="	#swimbi>ul:hover:after, #swimbi>ul.hvr:after {\n"
		str +="		display: none;\n"
		str +="	}\n\n"
	}
	return str;
}

function addResponsiveCode(){
	if(menuSettings.isResponsive){
		if(menuSettings.menuLayout.indexOf('vertical')<0){
			var borderTopSize = getIconSizeForResponsive()*3/8;
			var borderBottomSize = getIconSizeForResponsive()/8;
			var hamburgerWidth = (getIconSizeForResponsive()/1.2)|0;
			var hamburgerHeight = borderBottomSize;

			var hamburgerRestHeight = (menuSettings.mainmenuHeight - hamburgerHeight - borderBottomSize - borderTopSize)/2;

			var topAdd = .5;
			var topMargin = (hamburgerRestHeight + topAdd)|0;
			var bottomMargin = menuSettings.mainmenuHeight - hamburgerHeight - borderBottomSize - borderTopSize - topMargin;


			var str = "@media (max-width: "+menuSettings.responsiveThreshold+"px) {\n"

				str +="	#swimbi>ul{\n"
				str +="		min-width: 300px !important;\n"
				str +="		width: 100%;\n"
				str +="		height: "+menuSettings.mainmenuHeight+"px;\n"
				str +="		padding: 0 !important;\n"
				str +="	}\n\n"

				str +="	#swimbi ul li{\n"
		        str +="		float: none;\n"
		        str +="		display: block;\n"
				str +="		position:relative;\n"
			    str +="	}\n\n"

			    str +="	#swimbi>ul>li{\n"
			    str +="		width: auto !important;\n"
		        str +="		margin: 0 "+responsiveMarginRight+" 0 "+responsiveMarginLeft+";\n"
			    str +="	}\n\n"
				
				str +="	#swimbi>ul>li>a{\n"
			    str +="		display:none;\n"
			    str +="	}\n\n"
				str +="	#swimbi>ul:hover>li>a, .hvr>li>a{\n"
				str +="		display:block !important;\n"
			    str +="	}\n\n"
				
				str +="	#swimbi>ul>li:hover, .hvr{\n"
				str +="		z-index: 9 !important;\n"
			    str +="	}\n\n"
				
			 	str += getHamburgerTextCode()

			 	str +="	#swimbi>ul:before {\n"
			    str +="		float: right;\n"

			    str +="		line-height: "+menuSettings.mainmenuHeight+"px;\n"
			   	str +="		content: '';\n"
			   	str +="		margin: "+(topMargin)+"px 22px "+bottomMargin+"px 0;\n"
			    str +="		width: "+hamburgerWidth+"px;\n"
			    str +="		height:"+hamburgerHeight+"px;\n"
			    str +="		border-top: "+borderTopSize+"px double #"+menuSettings.mainTextColor+";\n"
			    str +="		border-bottom: "+borderBottomSize+"px solid #"+menuSettings.mainTextColor+";\n"
			    str +="	}\n\n"
				
				str +="	#swimbi>ul:hover:before, #swimbi>ul.hvr:before  {\n"
			    str +="		opacity: 0;\n"
			    str +="	}\n\n"
				
				str +="	#swimbi ul ul {\n"
				str +="		left: 25px !important;\n"
				str +="	}\n\n"
				str +="	#swimbi ul ul ul{\n"
				str +="		margin-top: 25px;\n"
				str +="	}\n"
				str += "}\n"
			return str;
		}else{
				var str = "@media (max-width: "+menuSettings.responsiveThreshold+"px) {\n"
				str +="	#swimbi-vertical ul ul {\n"
				str +="		left: 25px !important;\n"
				str +="	}\n\n"
				str +="	#swimbi-vertical ul ul{\n"
				str +="		margin-top: 25px;\n"
				str +="	}\n"
				str += "}\n"
			return str;
		}
	}
	return '';
}

function getResponsiveScript(){
	var str = '';
	if(menuSettings.isResponsive){
		str = '\n(function(d,e,h){function g(){var b,c=0,a=document.querySelectorAll(".hvr"),f=a.length;if(0!=f)for(;c<f;c++)b=a[c],b.nodeName.toLowerCase()!=d&&(b.getElementsByTagName("a")[0].href=b.a,b.a=!1,b.classList.remove(e))}function l(b){b.target.nodeName.toLowerCase()==d&&b.preventDefault()}function k(b,c){document.addEventListener&&document.addEventListener(b,c)}k("touchstart",function(b){var c=b.target,a;a:{for(a=c.parentNode;null!=a;){if(a==h){a=!0;break a}a=a.parentNode}a=!1}if(a){a=c.parentNode;var f=!!a.getElementsByTagName(d)[0];c.nodeName.toLowerCase()==d?(b.preventDefault(),c.classList.add(e)):f?(a.a?c.href=a.a:(a.a=c.href,c.href="javascript:void(0);",g()),a.classList.add(e)):g()}else h.getElementsByTagName(d)[0].classList.remove(e),g()});navigator.userAgent.match(/(iPod|iPhone|iPad)/)&&navigator.userAgent.match(/AppleWebKit/)&&k("touchend",l)})("ul","hvr",document.getElementById("'+getSwimbiFileName()+'"));'
	}
	return str;
}

function getAllChildsOf(p, sw, isNavTab) {
    var ret = '';

    p.eachChild(function(node) {
        var firstLastID = '';
        node.childID = '';
        if(lilevel===1 && menuSettings.menuLayout && menuSettings.menuLayout.match(/100Left|100Right/)){
            if(node === p.firstChild)firstLastID = ' id="lifirst"';
            if(node === p.lastChild)firstLastID = ' id="lilast"';
        }
        var name = node.data.name;
        if(sw === 'onClickTreeSelect'){
            if(isNavTab)markPreviewChildsNav(lilevel, node);
            else markPreviewChilds(lilevel, node, p);
        }
        var link = node.data.link;
        var target = node.data.target;
        var fontIcon = node.data.fontIcon;
        var htmlClass = node.data.htmlClass;
        if(target != ''){
            target = ' target="'+target+'"';
        }
        if (fontIcon != '') {
            fontIcon = ' data-icon="' + fixSingleCharIcon(fontIcon) + '"';
            if (lilevel === 1) menuSettings.enableMainIcons = true;
            else menuSettings.enableSubIcons = true;
        }
        if(htmlClass != ''){
            htmlClass = ' class="'+htmlClass+'"';
        }
        if(sw === 'onClickTreeSelect'){
            ret += ''+addTabAndGet()+'<li'+firstLastID+node.childID+'><a onclick="selectNodeFromMenu(\'' + node.internalId + '\')"'+fontIcon+htmlClass+' href="#" '+target+'>' + name.replace(/"/g, "''") + '</a>'+ addULlistOf(node, sw, isNavTab)+'</li>\n';
        }else{
            ret += ''+addTabAndGet()+'<li'+firstLastID+'><a'+fontIcon+htmlClass+' href="' + link + '"'+target+'>' + name + '</a>'+ addULlistOf(node)+'</li>\n';
        }

        removeTab();
    });
    return ret;
}
