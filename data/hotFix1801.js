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
