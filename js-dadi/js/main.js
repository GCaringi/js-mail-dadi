/*-------------
    FUNCTIONS
---------------*/
function reset(){
    document.getElementById("x00").style.opacity = 0;
    document.getElementById("x01").style.opacity = 0;
    document.getElementById("x02").style.opacity = 0;
    document.getElementById("x10").style.opacity = 0;
    document.getElementById("x11").style.opacity = 0;
    document.getElementById("x12").style.opacity = 0;
    document.getElementById("x20").style.opacity = 0;
    document.getElementById("x21").style.opacity = 0;
    document.getElementById("x22").style.opacity = 0;
    document.getElementById("y00").style.opacity = 0;
    document.getElementById("y01").style.opacity = 0;
    document.getElementById("y02").style.opacity = 0;
    document.getElementById("y10").style.opacity = 0;
    document.getElementById("y11").style.opacity = 0;
    document.getElementById("y12").style.opacity = 0;
    document.getElementById("y20").style.opacity = 0;
    document.getElementById("y21").style.opacity = 0;
    document.getElementById("y22").style.opacity = 0;
}

function isOneP(){
    document.getElementById("x11").style.opacity = 1;
}

function isOneC(){
    document.getElementById("y11").style.opacity = 1;
}

function isTwoP(){
    document.getElementById("x02").style.opacity = 1;
    document.getElementById("x20").style.opacity = 1;
}

function isTwoP(){
    document.getElementById("x02").style.opacity = 1;
    document.getElementById("x20").style.opacity = 1;
}

function isTwoC(){
    document.getElementById("y02").style.opacity = 1;
    document.getElementById("y20").style.opacity = 1;
}

function isThreeP(){
    document.getElementById("x00").style.opacity = 1;
    document.getElementById("x11").style.opacity = 1;
    document.getElementById("x22").style.opacity = 1;
}

function isThreeC(){
    document.getElementById("y00").style.opacity = 1;
    document.getElementById("y11").style.opacity = 1;
    document.getElementById("y22").style.opacity = 1;
}

function isFourP(){
    document.getElementById("x00").style.opacity = 1;
    document.getElementById("x02").style.opacity = 1;
    document.getElementById("x22").style.opacity = 1;
    document.getElementById("x20").style.opacity = 1;
}

function isFourC(){
    document.getElementById("y00").style.opacity = 1;
    document.getElementById("y02").style.opacity = 1;
    document.getElementById("y22").style.opacity = 1;
    document.getElementById("y20").style.opacity = 1;
}

function isFiveP(){
    document.getElementById("x00").style.opacity = 1;
    document.getElementById("x02").style.opacity = 1;
    document.getElementById("x11").style.opacity = 1;
    document.getElementById("x22").style.opacity = 1;
    document.getElementById("x20").style.opacity = 1;
}

function isFiveC(){
    document.getElementById("y00").style.opacity = 1;
    document.getElementById("y02").style.opacity = 1;
    document.getElementById("y11").style.opacity = 1;
    document.getElementById("y22").style.opacity = 1;
    document.getElementById("y20").style.opacity = 1;
}

function isSixP(){
    document.getElementById("x00").style.opacity = 1;
    document.getElementById("x10").style.opacity = 1;
    document.getElementById("x20").style.opacity = 1;
    document.getElementById("x02").style.opacity = 1;
    document.getElementById("x12").style.opacity = 1;
    document.getElementById("x22").style.opacity = 1;
}

function isSixC(){
    document.getElementById("y00").style.opacity = 1;
    document.getElementById("y10").style.opacity = 1;
    document.getElementById("y20").style.opacity = 1;
    document.getElementById("y02").style.opacity = 1;
    document.getElementById("y12").style.opacity = 1;
    document.getElementById("y22").style.opacity = 1;
}

function chooserP(num){
    if (num == 1){
        isOneP();
        return;
    }else if (num == 2){
        isTwoP();
        return;
    }else if (num == 3){
        isThreeP();
        return
    }else if (num == 4){
        isFourP();
        return;
    }else if (num == 5){
        isFiveP();
        return;
    }else {
        isSixP();
        return
    }
}

function chooserC(num){
    if (num == 1){
        isOneC();
        return;
    }else if (num == 2){
        isTwoC();
        return;
    }else if (num == 3){
        isThreeC();
        return
    }else if (num == 4){
        isFourC();
        return;
    }else if (num == 5){
        isFiveC();
        return;
    }else {
        isSixC();
        return
    }
}
/*-------- 
    MAIN
---------*/

const cards = document.getElementById("main");

cards.addEventListener("click", 
    function(){
        reset()
        let randNumP = Math.floor((Math.random()*6)+1);
        document.getElementsByClassName("random-num")[0].innerHTML = randNumP;
        chooserP(randNumP);

        document.getElementsByClassName("dice")[0].style.opacity = "1";
        let randNumC = Math.floor((Math.random()*6)+1);
        document.getElementsByClassName("random-num")[1].innerHTML = randNumC;
        chooserC(randNumC);
        document.getElementsByClassName("dice")[1].style.opacity = "1";

        if (randNumP > randNumC){
            document.querySelector(".winner h1").innerHTML = "You Win!!!";
        }else if (randNumC > randNumP){
            document.querySelector(".winner h1").innerHTML = "CPU Win!!";
        }else{
            document.querySelector(".winner h1").innerHTML = "Draw, sorry repeat!"
        }
    }
);