function addResponsiveCode(SWIMBI_ID){
	if(menuSettings.isResponsive){

		var subShift = menuSettings.subItemHeight;
		var str = "@media (max-width: "+menuSettings.responsiveThreshold+"px) {\n"

		if(menuSettings.menuLayout.indexOf('vertical')<0){
			var borderTopSize = getIconSizeForResponsive()*3/8;
			var borderBottomSize = getIconSizeForResponsive()/8;
			var hamburgerWidth = (getIconSizeForResponsive()/1.2)|0;
			var hamburgerPadding = 22;
			var hamburgerHeight = borderBottomSize;

			var hamburgerRestHeight = (menuSettings.mainmenuHeight - hamburgerHeight - borderBottomSize - borderTopSize)/2;

			var topAdd = .5;
			var topMargin = (hamburgerRestHeight + topAdd)|0;
			var bottomMargin = menuSettings.mainmenuHeight - hamburgerHeight - borderBottomSize - borderTopSize - topMargin;

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

				str +="	#swimbi>ul>li>a,#swimbi>ul:hover:before,#swimbi>ul:hover:after{\n"
			    str +="		display:none;\n"
			    str +="	}\n\n"
				str +="	#swimbi>ul:hover>li>a,#swimbi .hvr>li>a{\n"
				str +="		display: block !important;\n"
				//str +="		display: inline-block !important;\n"
				//str +="		position: relative;\n"
			    str +="	}\n\n"
			    if(hasSearchField){
				    str +="	#swimbi>ul:hover~#swmobsearch,#swimbi .hvr~#swmobsearch{\n"
					str +="		display:none !important;\n"
				    str +="	}\n\n"
			    }
				
				str +="	#swimbi>ul>li:hover{\n"
				str +="		z-index: 9 !important;\n"
			    str +="	}\n\n"
			    str +="	#swimbi>ul>li.hvr{\n"
				str +="		z-index: 8 !important;\n"
			    str +="	}\n\n"
				

			 	str += getHamburgerTextCode()

			 	str +="	#swimbi>ul:before {\n"
			    str +="		float: right;\n"

			    str +="		line-height: "+menuSettings.mainmenuHeight+"px;\n"
			   	str +="		content: '';\n"
			   	str +="		margin: "+(topMargin)+"px "+hamburgerPadding+"px "+bottomMargin+"px 0;\n"
			    str +="		width: "+hamburgerWidth+"px;\n"
			    str +="		height:"+hamburgerHeight+"px;\n"
			    str +="		border-top: "+borderTopSize+"px double #"+menuSettings.mainTextColor+";\n"
			    str +="		border-bottom: "+borderBottomSize+"px solid #"+menuSettings.mainTextColor+";\n"
			    str +="		box-sizing: content-box;\n"
			    str +="	}\n\n"
				
				str +="	#swimbi>ul:hover:before, #swimbi>ul.hvr:before {\n"
			    str +="		opacity: 0;\n"
			    str +="	}\n\n"
				

				str +="	#swimbi ul ul ul{\n"
				str +="		margin-top: "+subShift+"px;\n"
				str +="	}\n\n"

				str +="	#swimbi a[data-show]{\n"
				str +="		display: block;\n"
				str +="	}\n\n"

		}else{

				str +="	#swimbi-vertical ul ul{\n"
				str +="		margin-top: "+subShift+"px;\n"
				str +="	}\n\n"
		}

		str +="	"+SWIMBI_ID+" ul ul {\n"
		str +="		left: "+(subShift+5)+"px !important;\n"
		str +="	}\n\n"

		str +="	"+SWIMBI_ID+" ul ul li:not(.column)>ul:before, "+SWIMBI_ID+" ul li:not(.column)>ul:before{\n"
		str +="		padding: 8px 2px 2px 2px;\n"
		str +="		left: -2px;\n"
		str +="	}\n\n"

		if(menuSettings.hasColumns){
			str +="	"+SWIMBI_ID+" ul ul li.column{\n"
			str +="		display: block;\n"
			str +="	}\n\n"
			str +="	"+SWIMBI_ID+" ul ul li.column>ul{\n"
			str +="		left: 0 !important;\n"
			str +="		margin-top: 0;\n"
			str +="	}\n\n"
		}

		if(menuSettings.showMainArrow !== 'none' && menuSettings.menuLayout.indexOf('vertical')<0){
			str += "	"+SWIMBI_ID+">ul>li>div.ch, "+SWIMBI_ID+">ul>li:hover:before, "+SWIMBI_ID+">ul>li:hover:after{\n"
			str += "		display: none;\n"
			str += "	}\n"
			str += "	"+SWIMBI_ID+">ul:hover>li>div.ch,"+SWIMBI_ID+" .hvr>li>div.ch{\n"
			str += "		display: block;\n"
			str += "	}\n\n"
		}
		str +="}\n"
		return str;
	}
	return '';
}
