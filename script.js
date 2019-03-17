//RESPONSIVITY


var isPortrait;
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

if (window.innerWidth>window.innerHeight) {
    isPortrait=false;
}else{
    isPortrait=true;
}

var atualPosCircle = document.getElementById("atualPos");
var svgCircles = document.getElementsByClassName("buttonsvg");
var svgCirclesTag = document.querySelectorAll(".buttonsvg circle");
var svgCirclesImp = document.getElementsByClassName("buttonsvgImp");
var svgCirclesTagImp = document.querySelectorAll(".buttonsvgImp circle");

if (isPortrait || window.innerWidth<700){
    for (var i=0; i<svgCircles.length;i++) {
        svgCircles[i].parentElement.remove();
    }

    for (var i=0; i<svgCirclesTag.length;i++) {
        svgCirclesTag[i].parentElement.remove();
    }

    for (var i=0; i<svgCirclesImp.length;i++) {
        svgCirclesImp[i].setAttribute("width","16px");
        svgCirclesImp[i].setAttribute("height","16px");
    }

    for (var i=0; i<svgCirclesTagImp.length;i++) {
        svgCirclesTagImp[i].setAttribute("r","8px");
        svgCirclesTagImp[i].setAttribute("cx","8px");
        svgCirclesTagImp[i].setAttribute("cy","8px");
    }
}

window.onload = function () {
    if (!isPortrait){
        pcscroll();
    }else{
        spscroll();
    }

}

//SCROLL ANIMATION

var pos=0;

if (!isPortrait) {
    window.onscroll = function () {
        pcscroll()
    };
}else{
    window.onscroll = function () {
        spscroll();
    };
}

for (var i=1;i<=14;i++){
    if (i === 1) {continue;}
    document.getElementById(`content${i}`).className="hidden";
}

function pcscroll(){

        pos = 10 + window.pageYOffset / 50;
        if (innerWidth>700){
            if (window.pageYOffset<26000) {
                atualPosCircle.style.top = `${window.pageYOffset / 259.74}%`;
            }
        }else{
            if (pos<50) {
                atualPosCircle.style.top = `${window.pageYOffset / 80}%`;
            } else if (pos>50 && pos <=130){
                atualPosCircle.style.top = `${window.pageYOffset / 160 + 12.5}%`;
            } else if (pos>130 && pos <=450){
                atualPosCircle.style.top = `${window.pageYOffset / 320 + 30}%`;
            }
        }

        if (pos <= 50) {
            document.getElementsByClassName("box1")[0].style = `left:${pos}%`;
            document.getElementsByClassName("box2")[0].style = `left:${60 - pos}%`;
        } else if (pos > 50 && pos <= 90) {
            document.getElementsByClassName("box1")[0].style = `left:${50 - (pos - 50)}%`;
            document.getElementsByClassName("box2")[0].style = `left:${10 + (pos - 50)}%`;
        } else if (pos > 90 && pos <= 130) {
            document.getElementsByClassName("box1")[0].style = `left:${10 + (pos - 90)}%`;
            document.getElementsByClassName("box2")[0].style = `left:${50 - (pos - 90)}%`;
        } else if (pos > 130 && pos <= 170) {
            document.getElementsByClassName("box1")[0].style = `left:${50 - (pos - 130)}%`;
            document.getElementsByClassName("box2")[0].style = `left:${10 + (pos - 130)}%`;
        } else if (pos > 170 && pos <= 210) {
            document.getElementsByClassName("box1")[0].style = `left:${10 + (pos - 170)}%`;
            document.getElementsByClassName("box2")[0].style = `left:${50 - (pos - 170)}%`;
        } else if (pos > 210 && pos <= 250) {
            document.getElementsByClassName("box1")[0].style = `left:${50 - (pos - 210)}%`;
            document.getElementsByClassName("box2")[0].style = `left:${10 + (pos - 210)}%`;
        } else if (pos > 250 && pos <= 290) {
            document.getElementsByClassName("box1")[0].style = `left:${10 + (pos - 250)}%`;
            document.getElementsByClassName("box2")[0].style = `left:${50 - (pos - 250)}%`;
        } else if (pos > 290 && pos <= 330) {
            document.getElementsByClassName("box1")[0].style = `left:${50 - (pos - 290)}%`;
            document.getElementsByClassName("box2")[0].style = `left:${10 + (pos - 290)}%`;
        } else if (pos > 330 && pos <= 370) {
            document.getElementsByClassName("box1")[0].style = `left:${10 + (pos - 330)}%`;
            document.getElementsByClassName("box2")[0].style = `left:${50 - (pos - 330)}%`;
        } else if (pos > 370 && pos <= 410) {
            document.getElementsByClassName("box1")[0].style = `left:${50 - (pos - 370)}%`;
            document.getElementsByClassName("box2")[0].style = `left:${10 + (pos - 370)}%`;
        } else if (pos > 410 && pos <= 450) {
            document.getElementsByClassName("box1")[0].style = `left:${10 + (pos - 410)}%`;
            document.getElementsByClassName("box2")[0].style = `left:${50 - (pos - 410)}%`;
        } else if (pos > 450 && pos <= 490) {
            document.getElementsByClassName("box1")[0].style = `left:${50 - (pos - 450)}%`;
            document.getElementsByClassName("box2")[0].style = `left:${10 + (pos - 450)}%`;
        }else if (pos > 490 && pos <= 530) {
            document.getElementsByClassName("box1")[0].style = `left:${10 + (pos - 490)}%`;
            document.getElementsByClassName("box2")[0].style = `left:${50 - (pos - 490)}%`;
        }

        if (pos > 10 && pos < 30) {
            for (var i=1;i<=14;i++){
                if (i === 1) {continue;}
                document.getElementById(`content${i}`).className="hidden";
            }
            document.getElementById("content1").className="box2";

        } else if (pos > 30 && pos < 70) {
            for (var i=1;i<=14;i++){
                if (i === 2) {continue;}
                document.getElementById(`content${i}`).className="hidden";
            }
            document.getElementById("content2").className="box2";

        } else if (pos > 70 && pos < 110) {
            for (var i=1;i<=14;i++){
                if (i === 3) {continue;}
                document.getElementById(`content${i}`).className="hidden";
            }
            document.getElementById("content3").className="box2";
        } else if (pos > 110 && pos < 150) {
            for (var i=1;i<=14;i++){
                if (i === 4) {continue;}
                document.getElementById(`content${i}`).className="hidden";
            }
            document.getElementById("content4").className="box2";
        } else if (pos > 150 && pos < 190) {
            for (var i=1;i<=14;i++){
                if (i === 5) {continue;}
                document.getElementById(`content${i}`).className="hidden";
            }
            document.getElementById("content5").className="box2";
        } else if (pos > 190 && pos < 230) {
            for (var i=1;i<=14;i++){
                if (i === 6) {continue;}
                document.getElementById(`content${i}`).className="hidden";
            }
            document.getElementById("content6").className="box2";
        } else if (pos > 230 && pos < 270) {
            for (var i=1;i<=14;i++){
                if (i === 7) {continue;}
                document.getElementById(`content${i}`).className="hidden";
            }
            document.getElementById("content7").className="box2";
        } else if (pos > 270 && pos < 310) {
            for (var i=1;i<=14;i++){
                if (i === 8) {continue;}
                document.getElementById(`content${i}`).className="hidden";
            }
            document.getElementById("content8").className = "box2";
        } else if (pos > 310 && pos < 350) {
            for (var i=1;i<=14;i++){
                if (i === 9) {continue;}
                document.getElementById(`content${i}`).className="hidden";
            }
            document.getElementById("content9").className = "box2";
        } else if (pos > 350 && pos < 390) {
            for (var i=1;i<=14;i++){
                if (i === 10) {continue;}
                document.getElementById(`content${i}`).className="hidden";
            }
            document.getElementById("content10").className = "box2";
        } else if (pos > 390 && pos < 430) {
            for (var i=1;i<=14;i++){
                if (i === 11) {continue;}
                document.getElementById(`content${i}`).className="hidden";
            }
            document.getElementById("content11").className = "box2";
        } else if (pos > 430 && pos < 470) {
            for (var i=1;i<=14;i++){
                if (i === 12) {continue;}
                document.getElementById(`content${i}`).className="hidden";
            }
            document.getElementById("content12").className = "box2";
        } else if (pos > 470 && pos < 510) {
            for (var i=1;i<=14;i++){
                if (i === 13) {continue;}
                document.getElementById(`content${i}`).className="hidden";
            }
            document.getElementById("content13").className = "box2";
        } else if (pos > 510) {
            for (var i=1;i<=14;i++){
                if (i === 14) {continue;}
                document.getElementById(`content${i}`).className="hidden";
            }
            document.getElementById("content14").className = "box2";
        }

        resetTimer();


    console.log(checkScrollSpeed());
}

function spscroll(){

    pos = 10 + window.pageYOffset / 50;

    if (pos<50) {
        atualPosCircle.style.left = `${window.pageYOffset / 80}%`;
    } else if (pos>50 && pos <=130){
        atualPosCircle.style.left = `${window.pageYOffset / 160 + 12.5}%`;
    } else if (pos>130 && pos <=450){
        atualPosCircle.style.left = `${window.pageYOffset / 320 + 30}%`;
    }

    if (pos <= 50) {
        document.getElementsByClassName("box1")[0].style = `top:${pos}%`;
        document.getElementsByClassName("box2")[0].style = `top:${60 - pos}%`;
    } else if (pos > 50 && pos <= 90) {
        document.getElementsByClassName("box1")[0].style = `top:${50 - (pos - 50)}%`;
        document.getElementsByClassName("box2")[0].style = `top:${10 + (pos - 50)}%`;
    } else if (pos > 90 && pos <= 130) {
        document.getElementsByClassName("box1")[0].style = `top:${10 + (pos - 90)}%`;
        document.getElementsByClassName("box2")[0].style = `top:${50 - (pos - 90)}%`;
    } else if (pos > 130 && pos <= 170) {
        console.log(window.pageYOffset);
        document.getElementsByClassName("box1")[0].style = `top:${50 - (pos - 130)}%`;
        document.getElementsByClassName("box2")[0].style = `top:${10 + (pos - 130)}%`;
    } else if (pos > 170 && pos <= 210) {
        document.getElementsByClassName("box1")[0].style = `top:${10 + (pos - 170)}%`;
        document.getElementsByClassName("box2")[0].style = `top:${50 - (pos - 170)}%`;
    } else if (pos > 210 && pos <= 250) {
        document.getElementsByClassName("box1")[0].style = `top:${50 - (pos - 210)}%`;
        document.getElementsByClassName("box2")[0].style = `top:${10 + (pos - 210)}%`;
    } else if (pos > 250 && pos <= 290) {
        document.getElementsByClassName("box1")[0].style = `top:${10 + (pos - 250)}%`;
        document.getElementsByClassName("box2")[0].style = `top:${50 - (pos - 250)}%`;
    } else if (pos > 290 && pos <= 330) {
        document.getElementsByClassName("box1")[0].style = `top:${50 - (pos - 290)}%`;
        document.getElementsByClassName("box2")[0].style = `top:${10 + (pos - 290)}%`;
    } else if (pos > 330 && pos <= 370) {
        document.getElementsByClassName("box1")[0].style = `top:${10 + (pos - 330)}%`;
        document.getElementsByClassName("box2")[0].style = `top:${50 - (pos - 330)}%`;
    } else if (pos > 370 && pos <= 410) {
        document.getElementsByClassName("box1")[0].style = `top:${50 - (pos - 370)}%`;
        document.getElementsByClassName("box2")[0].style = `top:${10 + (pos - 370)}%`;
    } else if (pos > 410 && pos <= 450) {
        document.getElementsByClassName("box1")[0].style = `top:${10 + (pos - 410)}%`;
        document.getElementsByClassName("box2")[0].style = `top:${50 - (pos - 410)}%`;
    } else if (pos > 450 && pos <= 490) {
        document.getElementsByClassName("box1")[0].style = `top:${50 - (pos - 450)}%`;
        document.getElementsByClassName("box2")[0].style = `top:${10 + (pos - 450)}%`;
    }else if (pos > 490 && pos <= 530) {
        document.getElementsByClassName("box1")[0].style = `top:${10 + (pos - 490)}%`;
        document.getElementsByClassName("box2")[0].style = `top:${50 - (pos - 490)}%`;
    }

    if (pos > 10 && pos < 30) {
        for (var i=1;i<=14;i++){
            if (i === 1) {continue;}
            document.getElementById(`content${i}`).className="hidden";
        }
        document.getElementById("content1").className="box2";
    } else if (pos > 30 && pos < 70) {
        for (var i=1;i<=14;i++){
            if (i === 2) {continue;}
            document.getElementById(`content${i}`).className="hidden";
        }
        document.getElementById("content2").className="box2";
    } else if (pos > 70 && pos < 110) {
        for (var i=1;i<=14;i++){
            if (i === 3) {continue;}
            document.getElementById(`content${i}`).className="hidden";
        }
        document.getElementById("content3").className="box2";
    } else if (pos > 110 && pos < 150) {
        for (var i=1;i<=14;i++){
            if (i === 4) {continue;}
            document.getElementById(`content${i}`).className="hidden";
        }
        document.getElementById("content4").className="box2";
    } else if (pos > 150 && pos < 190) {
        for (var i=1;i<=14;i++){
            if (i === 5) {continue;}
            document.getElementById(`content${i}`).className="hidden";
        }
        document.getElementById("content5").className="box2";
    } else if (pos > 190 && pos < 230) {
        for (var i=1;i<=14;i++){
            if (i === 6) {continue;}
            document.getElementById(`content${i}`).className="hidden";
        }
        document.getElementById("content6").className="box2";
    } else if (pos > 230 && pos < 270) {
        for (var i=1;i<=14;i++){
            if (i === 7) {continue;}
            document.getElementById(`content${i}`).className="hidden";
        }
        document.getElementById("content7").className="box2";
    } else if (pos > 270 && pos < 310) {
        for (var i=1;i<=14;i++){
            if (i === 8) {continue;}
            document.getElementById(`content${i}`).className="hidden";
        }
        document.getElementById("content8").className = "box2";
    } else if (pos > 310 && pos < 350) {
        for (var i=1;i<=14;i++){
            if (i === 9) {continue;}
            document.getElementById(`content${i}`).className="hidden";
        }
        document.getElementById("content9").className = "box2";
    } else if (pos > 350 && pos < 390) {
        for (var i=1;i<=14;i++){
            if (i === 10) {continue;}
            document.getElementById(`content${i}`).className="hidden";
        }
        document.getElementById("content10").className = "box2";
    } else if (pos > 390 && pos < 430) {
        for (var i=1;i<=14;i++){
            if (i === 11) {continue;}
            document.getElementById(`content${i}`).className="hidden";
        }
        document.getElementById("content11").className = "box2";
    } else if (pos > 430 && pos < 470) {
        for (var i=1;i<=14;i++){
            if (i === 12) {continue;}
            document.getElementById(`content${i}`).className="hidden";
        }
        document.getElementById("content12").className = "box2";
    } else if (pos > 470 && pos < 510) {
        for (var i=1;i<=14;i++){
            if (i === 13) {continue;}
            document.getElementById(`content${i}`).className="hidden";
        }
        document.getElementById("content13").className = "box2";
    } else if (pos > 510) {
        for (var i=1;i<=14;i++){
            if (i === 14) {continue;}
            document.getElementById(`content${i}`).className="hidden";
        }
        document.getElementById("content14").className = "box2";
    }

   resetTimer();
}

var t;

function resetTimer(){
    clearTimeout(t);
    t = setTimeout(scrollToNext, 1500);
}

function scrollToNext(){
    if (pos>10 && pos<30){
        navigation(0);
    } else if (pos > 30 && pos < 70) {
        navigation(2000);
    } else if (pos > 70 && pos < 110) {
        navigation(4000);
    } else if (pos > 110 && pos < 150) {
        navigation(6000);
    } else if (pos > 150 && pos < 190) {
        navigation(8000);
    } else if (pos > 190 && pos < 230) {
        navigation(10000);
    } else if (pos > 230 && pos < 270) {
        navigation(12000);
    } else if (pos > 270 && pos < 310) {
        navigation(14000);
    } else if (pos > 310 && pos < 350) {
        navigation(16000);
    } else if (pos > 350 && pos < 390) {
        navigation(18000);
    } else if (pos > 390 && pos < 430) {
        navigation(20000);
    } else if (pos > 430 && pos < 470) {
        navigation(22000);
    } else if (pos > 470 && pos < 510) {
        navigation(24000);
    } else if (pos > 510) {
       navigation(26000);
    }

}

//SYNC VIDEO TO SCROLL

var video = document.getElementById("animation");
var frameNumber = 0;
var playbackConst = 2075;


function scrollPlay() {
    frameNumber = window.pageYOffset / playbackConst;
    video.currentTime = frameNumber;
    window.requestAnimationFrame(scrollPlay);
}

window.requestAnimationFrame(scrollPlay);

//NAVIGATION

function navigation(value){
    window.scroll({
        top:value,
        left:0,
        behavior: 'smooth'
    });
}

var navbar = document.getElementsByTagName("nav")[0];
var navhide = document.getElementById("navhide");
if (!isPortrait && innerWidth>700) {
    navbar.addEventListener("mouseenter", function () {
        /*
        var id = setInterval(frame, 5);
        var pos = -2.2;

        function frame() {
            if (pos>=0) {
                clearInterval(id);
            } else {
                pos+=0.05;
                navbar.style.right=`${pos}%`;
            }
        }
        */

        navhide.style.display = "block";
    });

    navbar.addEventListener("mouseleave", function () {
        /*
        var id = setInterval(frame, 5);
        var pos = 0;

        function frame() {
            if (pos<=-2.2) {
                clearInterval(id);
            } else {
                pos-=0.05;
                navbar.style.right=`${pos}%`
            }
        }
        */

        navhide.style.display = "none";
    });
}

if (!isPortrait && window.innerWidth>700) {
    document.getElementById("button1").addEventListener("mouseenter", function () {
        document.getElementById("inicio").style.visibility = "visible";
    });

    document.getElementById("button1").addEventListener("mouseleave", function () {
        document.getElementById("inicio").style.visibility = "hidden";
    });

    document.getElementById("button2").addEventListener("mouseenter", function () {
        document.getElementById("sobre").style.visibility = "visible";
    });

    document.getElementById("button2").addEventListener("mouseleave", function () {
        document.getElementById("sobre").style.visibility = "hidden";
    });

    document.getElementById("button4").addEventListener("mouseenter", function () {
        document.getElementById("intervenientes").style.visibility = "visible";
    });

    document.getElementById("button4").addEventListener("mouseleave", function () {
        document.getElementById("intervenientes").style.visibility = "hidden";
    });

    document.getElementById("button8").addEventListener("mouseenter", function () {
        document.getElementById("locais").style.visibility = "visible";
    });

    document.getElementById("button8").addEventListener("mouseleave", function () {
        document.getElementById("locais").style.visibility = "hidden";
    });

    document.getElementById("button12").addEventListener("mouseenter", function () {
        document.getElementById("contactos").style.visibility = "visible";
    });

    document.getElementById("button12").addEventListener("mouseleave", function () {
        document.getElementById("contactos").style.visibility = "hidden";
    });
}

// POPUPS

var caixa = document.getElementsByClassName('caixa');

function abreCaixa(i){
    console.log(1);
    var id = setInterval(frame, 5);
    var pos = 100;

    function frame() {
        if (pos<=0) {
            clearInterval(id);
        } else {
            pos-=2;
            caixa[i].style.top=`${pos}%`
        }
    }
}

function fechaCaixa(i){
    console.log(1);
    var id = setInterval(frame, 5);
    var pos = 0;

    function frame() {
        if (pos>=100) {
            clearInterval(id);
        } else {
            pos+=2;
            caixa[i].style.top=`${pos}%`
        }
    }
}
