function getNavStylesSrt(param, value, publish){
	if(param && value!= undefined){
		updateBaseBGCSS(param,  value);
		menuSettings[param] = value;
	}
	effectInit();

	var mainShadowRGB = hexToRgb(menuSettings.mainShadowColor);

	var subShadowRGB = hexToRgb(menuSettings.subShadowColor);

	var ulWidth = 'auto';
	var ul_liFloat = 'none';
	var firstLastMargin = '';
	var fnavWidth = '';

	if(!menuSettings.menuLayout.match(/100Right|100Left/)){
		fnavWidth = "	text-align: center;\n"
	}
	responsiveMarginRight = menuSettings.assets.main_menu_BG_lines.split(',')[2]+'px';
	responsiveMarginLeft = menuSettings.assets.main_menu_BG_lines.split(',')[3]+'px';

	if((menuMetrics && menuMetrics.lisWidth) || menuSettings.menuLayout.indexOf('100')==0){
			var diff = menuSettings.menuWidth - menuMetrics.lisWidth;
			if(diff<0)diff=0;
		if(menuSettings.menuLayout == 'fixedCenter'){
			menuSettings.leftPadding = Math.floor(diff/2);
			menuSettings.rightPadding = diff - menuSettings.leftPadding;
		}else if(menuSettings.menuLayout == 'fixedRight'){
			menuSettings.rightPadding = 0;
			menuSettings.leftPadding = diff;
		}else if(menuSettings.menuLayout == 'fixedLeft'){
			menuSettings.leftPadding = 0;
			menuSettings.rightPadding = diff;
		}else if(menuSettings.menuLayout == 'adaptive'){
			menuSettings.leftPadding = menuSettings.sideMargin;
			menuSettings.rightPadding = menuSettings.sideMargin;
			var w = menuMetrics.lisWidth+menuSettings.leftPadding+menuSettings.rightPadding;
		}else if(menuSettings.menuLayout == '100Center'){
			menuSettings.leftPadding = 0;
			menuSettings.rightPadding = 0;
			ulWidth = "100%";
		}else if(menuSettings.menuLayout == '100Left'){
			menuSettings.leftPadding = 0;
			menuSettings.rightPadding = 0;
			firstLastMargin = "#lifirst {margin-left: "+menuSettings.sideMargin+"px;}"
			ulWidth = "100%";
			ul_liFloat = 'left';
		}else if(menuSettings.menuLayout == '100Right'){
			menuSettings.leftPadding = 0;
			menuSettings.rightPadding = 0;
			firstLastMargin = "#lilast {margin-right: "+menuSettings.sideMargin+"px;}\n\n"
			ulWidth = "100%";
			ul_liFloat = 'right';
		}

		if(menuSettings.menuLayout.match(/fixedCenter|fixedRight|fixedLeft|adaptive/)){
			menuSettings.leftPadding += "px";
			menuSettings.rightPadding += "px";
		}
	}

	if(!menuSettings.subMenuPadding){
		menuSettings.subMenuPadding = "0 1px 1px 1px";
	}


var SWIMBI_ID = '#'+getSwimbiFileName();
var str =""

+SWIMBI_ID+"{\n"
+"	padding: "+menuSettings.positionTop+"px "+menuSettings.positionRight+"px 0 "+menuSettings.positionLeft+"px;\n"
+ 	getPositionType()
+   getSwimbiWidth()
+ 	fnavWidth
+ 	getZindex()
+"	font-style: "+menuSettings.mainTextStyle+";\n"
+"	font-variant: "+menuSettings.mainTextVariant+";\n"
+"	font-weight: "+menuSettings.mainTextWeight+";\n"
+"	left: 0px;\n"
+"}\n"

+SWIMBI_ID+" ul{\n"
+ 	getAlignStyles()
+ addIfHorizontalMenu(getBackgroundURL())

+ addIfHorizontalMenu("padding: 0 "+menuSettings.rightPadding+" 0 "+menuSettings.leftPadding+";",
					"border-radius: "+menuSettings.mainCornerRadius+"px;",
					"box-shadow: "+menuSettings.mainShadowX+"px "+menuSettings.mainShadowY+"px "+menuSettings.mainShadowBlur+"px  "+menuSettings.mainShadowSize+"px rgba("+mainShadowRGB.r+","+mainShadowRGB.g+","+mainShadowRGB.b+","+toPointZero1(menuSettings.mainShadowTransparency)+");")
+ addIfVerticalMenu('padding: 0;')
+"	margin: 0;\n"
+"	width: "+ulWidth+";\n"
+"	text-align: "+ul_liFloat+";\n"
+"	list-style: none;\n"
+"	position: relative;\n"
+"	white-space: nowrap;\n"
+"	display: inline-table;\n"
+"	font-size: 0px;\n"
+"}\n"

+SWIMBI_ID+" a{\n"
+"	font-family: "+menuSettings.mainFontFamily+" !important;\n"
+"}\n"

+firstLastMargin

+SWIMBI_ID+">ul>li{\n"
+ addIfVerticalMenu(getBackgroundURL())
+ addIfHorizontalMenu("display: inline-block;\n")
+ addIfVerticalMenu("float: left;\n")
+"	vertical-align: top;\n"
+"	font-size: "+menuSettings.mainTextSize+"px;\n"
+ addIfVerticalMenu('width: 100%;',
					'border-radius: '+menuSettings.mainCornerRadius+'px;',
					"box-shadow: "+menuSettings.mainShadowX+"px "+menuSettings.mainShadowY+"px "+menuSettings.mainShadowBlur+"px  "+menuSettings.mainShadowSize+"px rgba("+mainShadowRGB.r+","+mainShadowRGB.g+","+mainShadowRGB.b+","+toPointZero1(menuSettings.mainShadowTransparency)+");")

+"	position: relative;\n"
+"}\n"

+SWIMBI_ID+" ul li:hover>ul, .hvr>ul{\n"
+"	display: block !important;\n"
+menuSettings.effect
+"}\n"
+SWIMBI_ID+">ul>li:hover>a, .hvr>a{\n"
+"	color: #"+menuSettings.mainTextRolloverColor+" !important;\n"
+ addIfVerticalMenu('border-radius: '+Math.max(menuSettings.mainCornerRadius, menuSettings.mainItemOverCornerRadius)+'px;')
+ addIfHorizontalMenu('border-radius: '+menuSettings.mainItemOverCornerRadius+'px;')
+(menuSettings.mainRolloverSelect=='adobe'?"	position: relative;\n":"")
+"	z-index: 9;\n"
+ addMainRolloverTextShadow()
+"}\n"

+ addAdobeMenuShadowFix3(SWIMBI_ID)

+SWIMBI_ID+" ul li a{\n"
+"	display: block;\n"
+"	text-decoration: none;\n"
+"	white-space: nowrap;\n"
+"}\n"	
+SWIMBI_ID+">ul>li>a{\n"
+"	padding: 0px "+menuSettings.mainItemSideMargins+"px;\n"
+"	line-height: "+ menuSettings.mainmenuHeight +"px;\n"
+"	height: "+ menuSettings.mainmenuHeight +"px;\n"
+"	color: #"+menuSettings.mainTextColor+";\n"
+ addAdobeMenuShadowFix()	
+ addMainTextShadow()	
+"}\n"
			
		
+SWIMBI_ID+" ul ul{\n"
+ 	getSubFontConfig( param, value)
+"	"+menuSettings.effect_init+"\n"
+"	background: #"+menuSettings.submenuColor+";\n"
+"	border-radius: "+menuSettings.subCornerRadius+"px;\n"
+"	width: auto;\n"
+"	min-width: "+menuSettings.subMinWidth+"px;\n"
+"	padding: "+menuSettings.subMenuPadding+";\n"
+"	margin: 0;\n"
+"	position: absolute;\n"
+(menuSettings.mainRolloverSelect=='adobe'?"":"	z-index: 8;\n")
+"	margin-top: 0;\n"
+"	box-shadow: "+menuSettings.subShadowX+"px "+menuSettings.subShadowY+"px "+menuSettings.subShadowBlur+"px  "+menuSettings.subShadowSize+"px rgba("+subShadowRGB.r+","+subShadowRGB.g+","+subShadowRGB.b+","+toPointZero1(menuSettings.subShadowTransparency)+");\n"
+"	top: "+(menuSettings.mainmenuHeight-(menuSettings.mainRolloverSelect=='adobe'?2:0)) +"px;\n"
+"}\n"
+SWIMBI_ID+" ul ul li{\n"
+"	float: none;\n"
+"	position: relative;\n"
+"	width: 100%;\n"
+"	text-align: "+menuSettings.subTextAlign+";\n"
+"	border-bottom: 1px solid #999;\n"
+"}\n"

+SWIMBI_ID+" ul ul li a{\n"
+"	padding: 0px "+menuSettings.subItemSideMargins+"px;\n"
+	getTrianglePadding()
+"	line-height: "+menuSettings.subItemHeight+"px;\n"
+"	height: "+menuSettings.subItemHeight+"px;\n"
+"	color: #"+subTextColor+" !important;\n"
+"	margin: 0;\n"
+ addSubTextShadow()

+"}\n"
+SWIMBI_ID+" ul ul li:hover>a{\n"
+"	border-radius: "+menuSettings.subItemOverCornerRadius+"px;\n"
+"	color: #"+subTextRolloverColor+" !important;\n"
+	addAdobeMenuShadowFix2()
+"}\n"
+SWIMBI_ID+" ul ul li a:hover{\n"
+"	border-radius: "+menuSettings.subItemOverCornerRadius+"px;\n"
+"	background: #"+menuSettings.subRolloverColor+";\n"
+ addSubRolloverTextShadow()
+"}\n"
+SWIMBI_ID+" canvas{\n"
+"	position: absolute;\n"
+"	width: 1px;\n"
+"	height: 1px;\n"
+"}\n"

+"canvas noscript{\n"
+"	display: none;\n"
+"}\n"
		
+SWIMBI_ID+" ul ul"+(menuSettings.menuLayout.indexOf('vertical')<0?" ul":"")+"{\n"
+"	position: absolute;\n"
+"	z-index: 8;\n"
+"	left: 100%;\n"
+"	top: 0;\n"
+"}\n"

+ getIEmessage()

+ addIconsStyles(SWIMBI_ID, publish)

+ addResponsiveCode()


	if(menuSettings.cssMinification){
		var CleanCSS = require(scriptPrefix + 'mods/clean-css');
		str = new CleanCSS().minify(str);
	}

	saveStyleStr = str;
	return str;
}
