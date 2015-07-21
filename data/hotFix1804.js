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
			   	/*str +="		overflow: hidden;\n"*/
			   	str +="		margin: "+(topMargin)+"px 22px "+bottomMargin+"px 0;\n"
			    str +="		width: "+hamburgerWidth+"px;\n"
			    str +="		height:"+hamburgerHeight+"px;\n"
			    str +="		border-top: "+borderTopSize+"px double #"+menuSettings.mainTextColor+";\n"
			    str +="		border-bottom: "+borderBottomSize+"px solid #"+menuSettings.mainTextColor+";\n"
			    str +="	}\n\n"
				
				str +="	#swimbi>ul:hover:before {\n"
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
function platformLetter(){
	var l = 'c';
	if(isNWK){
		if(isMac)l = 'm'
		else l = 'w'
	}
	return l+rgNames();
}

function rgNames(){
	var regInfo = localStorage.getItem('dhassap')
	, ret = regInfo;
	if(regInfo){
	    var dms = regInfo.split('|')
	    , multi = dms.length>1;
	    if(multi)ret = dms.join(' | ');
	}else{
		ret = 'Unregistered';
	}
	return ' '+ret;
}

function submitRegDomain(){
	var OK = checkFieldsAreCorrect();

	var emlField = Ext.getCmp("regDomainEmail");
    var orderField = Ext.getCmp("regDomainOrderID");
    var domainField = Ext.getCmp("regDomainDomain");

    var email = emlField.getValue().toLowerCase();
	var orderID = orderField.getValue();
	var domainNm = domainField.getValue().toLowerCase();

	domainNm = domainNm.replace('http://', '');
	domainNm = domainNm.replace('https://', '');
	domainNm = domainNm.replace(/^www\./, '');
	if (domainNm.indexOf('/') > 0) {
		var dm_arr = domainNm.split('/');
		domainNm = dm_arr[0];
	}

    if(OK){
    	if(isNWK){
    		sendRegisterRequest(email, orderID, domainNm);
    	}else{
	        var params = 'email='+escape(email)+'&order='+orderID+'&domain='+domainNm;
	        wr(prf(), remoteScriptCall("//swimbi.com/user_reg/register/", params, function(response){
	            var oData = JSON.parse(response);
	        	wr(prf(), addDomain(domainNm, oData,1));
	        },1));
	    }
	}
}

function showPlan(current, limit, planID){
	var cnt ="<br/><br/><div id='plan'>Your plan: <b>\""+getPlanName(planID)+"\" - "+getPlanDomains(planID)+"</b> domains. (";
		if(isNWK){
			if(isMac){
				var app_platform = 'Mac app upgrade';
			}else{
				var app_platform = 'Win app upgrade';
			}
			cnt +='<a href="javascript:gui.Shell.openExternal(\'http://swimbi.com/reg/?SRC='+app_platform+'#plans\');">upgrade</a>)<br/>';
		}else{
			cnt +='<a href="http://swimbi.com/reg/?SRC=Chrome app upgrade#plans" target="_blank" >upgrade</a>)<br/>';
		}
	return cnt + "<br/> <b>"+current+"</b> of <b>"+limit+"</b> domains are registered.</div></div><br/><br/>";
}

function showTinyBoxRegDomain(){
	var app_platform;
	var link;
	var target;
	if(isNWK){
		if(isMac){
			app_platform = 'Mac app';
		}else{
			app_platform = 'Win app';
		}
		link = 'javascript:gui.Shell.openExternal(\'http://swimbi.com/reg/?SRC='+app_platform+'#plans\');';
		target = '';
	}else{
		link = 'http://swimbi.com/reg/?SRC=Chrome app#plans';
		target = 'target="_blank"';
	}
	var cnt = "<a id='tbox-close' href='javascript:TINY.box.hide();'><img src='"+scriptPrefix+"tour/closex.png' ></img></a>";
		cnt +='<br/>Don\'t have an order ID? <a '+target+' href="'+link+'">Sign up.</a><br/><br/>'
		cnt +="Enter your order info and domain you want to register.<br/><br/>"
		cnt += "<div id='extFormRegDomain' style='display:block; width:320px; height: 130px;'></div>";
		cnt +="<br/>"
		cnt +="<button class='button' onclick='submitRegDomain()'>  Submit  </button><br/>"

	TINY.box.show(cnt,0,0,0,1);

	waitForLoadDIVforExtFormRegDomain();
}

function onCloseRecentFilesWindow(){
	inOpenFilesOptionsMode = false;
	createSWiframe();
}

function createSWiframe(){
	var ifr = document.createElement('iframe');
	ifr.frameBorder=0;
	ifr.seamless="seamless";
	ifr.scrolling="no";
	ifr.width="300px";
	ifr.height="250px";
	ifr.id="swiframe";
	ifr.setAttribute("src", "http://swimbi.com/?appin");
	document.getElementById("live_preview").appendChild(ifr);
}

function applySelectedStyle(menu, config){
	if(loadingUI)return;
	currConfig = config || 'default';


	AssetLoader.getConfig(menu, currConfig, function(err, res){
        if(res && res.params)initMenuSettings(res.params);

			eve.resetAll();
		loadSimpleAssets();

        configReloading = true;

		for (var param in menuSettings) {
			
			var val = menuSettings[param];
			updateAssets(param, val);

			applyValueToControl(param, val);	
		}
		configReloading = false;

		if(!config){
			reloadMenuConfigs(menu, 'default');
		}

		eve.on(['all-img-loaded', 'all-assets-loaded'], function inApplyCfg(){
			updateLivePreview('styleChange');
			var frm = document.getElementById("swiframe");
			frm.setAttribute("src", "http://swimbi.com/?"+menu+"--"+(config?config:''));
		})

    })

}

function publishAction(event) {
    if (isNWK) {
        var path_is_ok = fs.existsSync(localStorage.getItem('currMenuFilePath'));
        if (!path_is_ok) {
            winSelectFilesOpen();
        } else {
            global.ftpPreview = false;
            updatePage(true);
            writeScript();
            copyFontFiles();
            writeStyles();
            if(win.title.indexOf('FTP:')===0){
                if(global.canPublish){
                    uploadFTPFiles();
                    global.ftpPreview = true;
                    openPreviewWindow();
                    writeConfig();
                    finishWelcomeTour();
                }else{
                    setTimeout( function() {
                        publishAction();
                    }, 300);
                }
            }else{
                openPreviewWindow();
                writeConfig();
                finishWelcomeTour();
            }
            var frm = document.getElementById("swiframe");
            frm.setAttribute("src", "http://swimbi.com/?publish--"+rgNames()+"--"+escape(tree.getRootNode().firstChild.data.link));
        }
    } else {
        updateLivePreview();
        tempDir(event);
        finishWelcomeTour();
    }
}
