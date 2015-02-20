function winSelectFilesOpen(){
	if(!test_mode && isNWK){
		if(myFTP && myFTP.ftp)destroyConnection();
		var needContinueButton = MyDB.isObjExists('recentList') && MyDB.getObj('recentList')[0] !== selectRecentTXT;
		var cnt = "";
			cnt += "<div id='logotxt'><span>SWIMBI</span> <span>Swift Menu Builder</span></div><br/>";
			if( needContinueButton )cnt +="<button class='button' onclick='continueLastProject()'>  Continue previous project  </button><br/>"
			cnt += "<div id='extControlRecent' class='extControl' style='display:block;padding-left:4px;'></div>";
			cnt +="<br/>Insert, edit or replace a menu<br/>"
			cnt +="<button class='button' style='float:left; margin-left:22px; width:109px;'  onclick='browseToPageFunc()'> Open page </button><button class='button' onclick='openFTPdialog()' style='width:109px;'> Open FTP </button><br/>"
			cnt +="<br/>Don't have a page?<br/>"
			cnt +="<button class='button' onclick='newPageDialog()'>  Create new  </button>"
		TINY.box.show(cnt,0,0,0,1);
		TINY.box.setOnHide(extraFixFunc6);
		waitForLoadDIVforExtControl();
	}
}

function extraFixFunc6(){
	var shown = localStorage.getItem('siteShown');
	if(!shown){
		var p = isMac ? "mac" : "win";
		gui.Shell.openExternal("http://swimbi.com/?utm_source="+p+"app&utm_medium=app&utm_campaign="+p+"%20app%20hit");
		localStorage.setItem('siteShown', 1);
	}
}