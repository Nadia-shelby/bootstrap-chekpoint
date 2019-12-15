var myTextArea=document.getElementById("myText");
var selectSize=document.getElementById("size");
var selectPolice=document.getElementById("police");

function makeBold(){
    if(myTextArea.style.fontWeight=="bold"){
        myTextArea.style.fontWeight="normal";
    }
    else{
        myTextArea.style.fontWeight="bold";
    }
}

function makeItalic(){
    if(myTextArea.style.fontStyle=="italic"){
        myTextArea.style.fontStyle="normal";
    }
    else{
        myTextArea.style.fontStyle="italic";
    }
}

function makeUnderline(){
    if(myTextArea.style.textDecoration=="underline"){
        myTextArea.style.textDecoration="normal";
    }
    else{
        myTextArea.style.textDecoration="underline";
    }
}

function changeSize(){
    myTextArea.style.fontSize=selectSize.value;
}

function changePolice(){
    myTextArea.style.fontFamily=selectPolice.value;
}
$("#img1").mouseenter(function(){
    $(this).find("#bt1").show();
    $(this).css("opacity","0.7");
})
$("#img1").mouseleave(function(){
    $(this).find("#bt1").hide();
    $(this).css("opacity","1");
})

$("#img2").mouseenter(function(){
    $(this).find("#bt2").show();
    $(this).css("opacity","0.7");
})
$("#img2").mouseleave(function(){
    $(this).find("#bt2").hide();
    $(this).css("opacity","1");
})
$("#img3").mouseenter(function(){
    $(this).find("#bt3").show();
    $(this).css("opacity","0.7");
})
$("#img3").mouseleave(function(){
    $(this).find("#bt3").hide();
    $(this).css("opacity","1");
})

$("#red").click(function(){
   alert(window.getSelection().getRangeAt(0))
})
