function pl(){
    $(".col-sm-3").parent().find("li").each(function(){
        $(this).css("display","none");
    });
    $(".col-sm-3").parent().find("li").each(function(){
        if($(this).hasClass("pl")){
            $(this).css("display","block");
        }
    });
}

function f(){
    $(".col-sm-3").parent().find("li").each(function(){
        $(this).css("display","none");
    });
    $(".col-sm-3").parent().find("li").each(function(){
        if($(this).hasClass("f")){
            $(this).css("display","block");
        }
    });
}

function db(){
    $(".col-sm-3").parent().find("li").each(function(){
        $(this).css("display","none");
    });
    $(".col-sm-3").parent().find("li").each(function(){
        if($(this).hasClass("db")){
            $(this).css("display","block");
        }
    });
}

function o(){
    $(".col-sm-3").parent().find("li").each(function(){
        $(this).css("display","none");
    });
    $(".col-sm-3").parent().find("li").each(function(){
        if($(this).hasClass("o")){
            $(this).css("display","block");
        }
    });
}

function p(){
    $(".col-sm-3").parent().find("li").each(function(){
        $(this).css("display","none");
    });
    $(".col-sm-3").parent().find("li").each(function(){
        if($(this).hasClass("p")){
            $(this).css("display","block");
        }
    });
}
