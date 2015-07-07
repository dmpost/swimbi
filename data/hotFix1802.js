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
	, ret;
	if(regInfo){
	    var dms = regInfo.split('|')
	    , multi = dms.length>1;
	    ret = regInfo;
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
