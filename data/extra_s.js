function showTinyBoxRegDomain(){
	var cnt = "<a id='tbox-close' href='javascript:TINY.box.hide();'><img src='"+scriptPrefix+"tour/closex.png' ></img></a>";
		cnt +='<br/>Don\'t have an order ID? <a href="javascript:gui.Shell.openExternal(\'http://swimbi.com/register/#plans\');">Sign up.</a><br/><br/>'
		cnt +="Enter your order info and domain you want to register.<br/><br/>"
		cnt += "<div id='extFormRegDomain' style='display:block; width:320px; height: 130px;'></div>";
		cnt +="<br/>"
		cnt +="<button class='button' onclick='submitRegDomain()'>  Submit  </button><br/>"


	TINY.box.show(cnt,0,0,0,1);

	waitForLoadDIVforExtFormRegDomain();
}