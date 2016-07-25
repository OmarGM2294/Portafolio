(function(){
	/*$("body").on("contextmenu",function(){
       return false;
    });*/
	setTimeout(function(){
		$("#dir").css("display","block");
		$("#first b").remove();
		$("#dir input").focus();
	}, 500);
})();

function choise(obj,e) {
    if (e.keyCode == 13) {
    	if($(obj).val() == "./about_me.txt"){
    		$("body").append('<div id="about_me" style="padding-left: 20px;"><br> <a style="margin-left: 180px;">ABOUT ME</a><br> ================================================<br> <a style="margin-left: 6px;">I\'m a software engenieer from Bogotá, Colombia.</a><br><br> <a style="margin-left: 4px;">My goal is to make the best development for any</a><br> <a>problems that arise, that through good practices</a><br> <a style="margin-left: 12px;">development methodologies, teamwork, planning,</a><br> <a style="margin-left: 100px;">design and communication.</a><br><br> <a style="margin-left: 12px;">I hope you find your visit successful and you</a><br> <a style="margin-left: 80px;">contact me to change the world.</a><br> ================================================<br><br> <div style="margin-left: -20px;">C:\>  <input type="text" onkeypress="choise(this,event);" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"/></div> </div>'); 
    		$(obj).css("disable", true);
    		$("#about_me input").focus();
    	}
    	else if($(obj).val() == "./skills.exe"){
    		window.open("skills.html");
    	}
    	else if($(obj).val() == "./works.exe"){
            window.open("works.html");
    	}
    	else if($(obj).val() == "./connect.exe"){
            window.open("connect.html");
    	}
    	else if($(obj).val() == "dir"){
    		$("body").append('<div id="dir" style="padding-left: 20px;"><br> Volume in drice C is OmarGM2294<br> Volume Serial Number is 1019-2294<br><br> Directory of C:<br><br> <a style="margin-right: 182px;">about_me.txt</a> 22/02/1994 12:00 p.m<br> <a style="margin-right: 200px;">skills.exe</a> 10/12/1996 12:00 p.m<br> <a style="margin-right: 210px;">works.exe</a>  06/02/2015 11:00 a.m<br> <a style="margin-right: 191px;">connect.exe</a>  04/12/2010 08:00 a.m<br> <a style="margin-left: 250px;">4 file(s) 1,301,926,830 bytes</a><br><br> ================================================<br> <a style="margin-left: 80px;">To execute a command, type "./"</a><br> <a style="margin-left: 70px;">follow by the name of the command</a><br><br> <a style="margin-left: 110px;">Example: ./about_me.txt</a><br> ================================================<br><br><div style="margin-left: -20px;">C:\>  <input type="text" onkeypress="choise(this,event);" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"/></div></div>');
    		$(obj).css("disable", true);
    		$("#dir input").focus();
    	}else if($(obj).val() == "clear"){
    		$("body").children().remove();
    		$("body").append('<div id="dir" style="padding-left: 20px;"><br><div style="margin-left: -20px;">C:\>  <input type="text" onkeypress="choise(this,event);" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"/></div></div>');
    		$("#dir input").focus();
    	}else{
    		$("body").append('<div id="error" style="padding-left: 20px;"><br>\''+$(obj).val()+'\' is not recognized as an internal or external command, operable program or batch file.<br><br><div style="margin-left: -20px;">C:\>  <input type="text" onkeypress="choise(this,event);" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"/></div></div>');
    		$(obj).css("disable", true);
    		$("#error input").focus();
    	}
    }
}