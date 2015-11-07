(function(){
	if(window.location.language == 'en' || navigator.browserLanguage == 'en'){
		window.location.href = window.location.href.replace("index.html","") + "en/index.html";
	}
})();