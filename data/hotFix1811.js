function onCloseRecentFilesWindow(){
	inOpenFilesOptionsMode = false;
	swtrace = 0;
	createSWiframe();
	setTimeout(function(){
		if(!localStorage.welcomTourViewed)startWelcomeTour()
	},3500);
}
