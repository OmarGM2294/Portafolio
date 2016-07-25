(function(){
	/*$("body").on("contextmenu",function(){
       return false;
    });*/
	setTimeout(function(){
		$("#dir").css("display","block");
		$("#first b").remove();
		$("#dir input").focus();
	}, 500);
    $(".window").draggable();
})();

function choise(obj,e) {
    if (e.keyCode == 13) {
    	if($(obj).val() == "./about_me.txt"){
    		$(".container-fluid").append('<div id="about_me" style="padding-left: 20px;"><br> <a style="margin-left: 180px;">ABOUT ME</a><br> ================================================<br> <a style="margin-left: 6px;">I\'m a software engenieer from Bogotá, Colombia.</a><br><br> <a style="margin-left: 4px;">My goal is to make the best development for any</a><br> <a>problems that arise, that through good practices</a><br> <a style="margin-left: 12px;">development methodologies, teamwork, planning,</a><br> <a style="margin-left: 100px;">design and communication.</a><br><br> <a style="margin-left: 12px;">I hope you find your visit successful and you</a><br> <a style="margin-left: 80px;">contact me to change the world.</a><br> ================================================<br><br> <div style="margin-left: -20px;">C:\\>  <input type="text" onkeypress="choise(this,event);" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" style="width: 400px;"/></div> </div>'); 
    		$(obj).css("disable", true);
    		$("#about_me input").focus();
    	}
    	else if($(obj).val().split(" ")[0] == "./skills.exe"){
            if($(obj).val().split(" ")[1] == "--windowed"){
                $("body").append('<div class="window" style="width: 40%; height: 300px;"> <div style="color: #FFF; margin-top:-30px; float:right;"> <i class="fa fa-square-o" aria-hidden="true" style="width: 30px; cursor:pointer; background: #3f87f3; text-align:center;" onclick="expand(this)"></i> <i class="fa fa-times" aria-hidden="true" style="width: 30px; cursor:pointer; background: #3f87f3; text-align:center;" onclick="iframeclose(this)"></i> </div> <iframe src="skills.html" frameborder="0" style="width: 100%; height: 300px;"></iframe> </div>'); 
                $(".window").draggable();
            }else{
        		window.open("skills.html");
            }
            $(".container-fluid").append('<div id="dir" style="padding-left: 20px;"><br><div style="margin-left: -20px;">C:\\>  <input type="text" onkeypress="choise(this,event);" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" style="width: 400px;"/></div></div>');
            $("#dir input").focus();
    	}
    	else if($(obj).val().split(" ")[0] == "./works.exe"){
            if($(obj).val().split(" ")[1] == "--windowed"){
                $("body").append('<div class="window" style="width: 40%; height: 300px;"> <div style="color: #FFF; margin-top:-30px; float:right;"> <i class="fa fa-square-o" aria-hidden="true" style="width: 30px; cursor:pointer; background: #3f87f3; text-align:center;" onclick="expand(this)"></i> <i class="fa fa-times" aria-hidden="true" style="width: 30px; cursor:pointer; background: #3f87f3; text-align:center;" onclick="iframeclose(this)"></i> </div> <iframe src="works.html" frameborder="0" style="width: 100%; height: 300px;"></iframe> </div>'); 
                $(".window").draggable();
            }else{
                window.open("works.html");
            }
            $(".container-fluid").append('<div id="dir" style="padding-left: 20px;"><br><div style="margin-left: -20px;">C:\\>  <input type="text" onkeypress="choise(this,event);" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" style="width: 400px;"/></div></div>');
            $("#dir input").focus();
    	}
    	else if($(obj).val().split(" ")[0] == "./connect.exe"){
            if($(obj).val().split(" ")[1] == "--windowed"){
                $("body").append('<div class="window" style="width: 40%; height: 300px;"> <div style="color: #FFF; margin-top:-30px; float:right;"> <i class="fa fa-square-o" aria-hidden="true" style="width: 30px; cursor:pointer; background: #3f87f3; text-align:center;" onclick="expand(this)"></i> <i class="fa fa-times" aria-hidden="true" style="width: 30px; cursor:pointer; background: #3f87f3; text-align:center;" onclick="iframeclose(this)"></i> </div> <iframe src="connect.html" frameborder="0" style="width: 100%; height: 300px;"></iframe> </div>');
                $(".window").draggable();
            }else{
                window.open("connect.html");
            }
            $(".container-fluid").append('<div id="dir" style="padding-left: 20px;"><br><div style="margin-left: -20px;">C:\\>  <input type="text" onkeypress="choise(this,event);" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" style="width: 400px;"/></div></div>');
            $("#dir input").focus();
    	}
    	else if($(obj).val() == "dir"){
    		$(".container-fluid").append('<div id="dir" style="padding-left: 20px;"><br> Volume in drice C is OmarGM2294<br> Volume Serial Number is 1019-2294<br><br> Directory of C:<br><br> <a style="margin-right: 182px;">about_me.txt</a> 22/02/1994 12:00 p.m<br> <a style="margin-right: 200px;">skills.exe</a> 10/12/1996 12:00 p.m<br> <a style="margin-right: 210px;">works.exe</a>  06/02/2015 11:00 a.m<br> <a style="margin-right: 191px;">connect.exe</a>  04/12/2010 08:00 a.m<br> <a style="margin-left: 250px;">4 file(s) 1,301,926,830 bytes</a><br><br> ================================================<br> <a style="margin-left: 80px;">To execute a command, type "./"</a><br> <a style="margin-left: 70px;">follow by the name of the command</a><br><br> <a style="margin-left: 110px;">Example: ./about_me.txt</a><br> ================================================<br><br><div style="margin-left: -20px;">C:\\>  <input type="text" onkeypress="choise(this,event);" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" style="width: 400px;"/></div></div>');
    		$(obj).css("disable", true);
    		$("#dir input").focus();
    	}else if($(obj).val() == "clear"){
    		$(".container-fluid").children().remove();
    		$(".container-fluid").append('<div id="dir" style="padding-left: 20px;"><br><div style="margin-left: -20px;">C:\\>  <input type="text" onkeypress="choise(this,event);" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" style="width: 400px;"/></div></div>');
    		$("#dir input").focus();
    	}else if($(obj).val() == "exit"){
            window.close();
        }else{
    		$(".container-fluid").append('<div id="error" style="padding-left: 20px;"><br>\''+$(obj).val()+'\' is not recognized as an internal or external command, operable program or batch file.<br><br><div style="margin-left: -20px;">C:\\>  <input type="text" onkeypress="choise(this,event);" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" style="width: 400px;"/></div></div>');
    		$(obj).css("disable", true);
    		$("#error input").focus();
    	}
    }
}

function expand(obj){
    if($(obj).parent().parent().css("width").split("px")[0] < ($(document).width()-20)){
        $(obj).parent().parent().css("width",$(document).width()-20);
        $(obj).parent().parent().css("height",$(window).height());
        $(obj).parent().parent().find("iframe").css("width",$(document).width()-20);
        $(obj).parent().parent().find("iframe").css("height",$(window).height());
        $(obj).parent().parent().offset({ top: 0, left: 0 });
    }else{
        $(obj).parent().parent().css("width","40%"); 
        $(obj).parent().parent().css("height","300px");   
        $(obj).parent().parent().find("iframe").css("width","100%");
        $(obj).parent().parent().find("iframe").css("height","300px");
    }
}

function iframeclose(obj){
    $(obj).parent().parent().remove();
}
