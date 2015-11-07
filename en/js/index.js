(function(){
	if(window.location.language == 'es' || navigator.browserLanguage == 'es'){
		window.location.href = window.location.href.replace("index.html","") + "en/index.html";
	}
})();