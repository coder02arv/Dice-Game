function playgame()
{
    var number1 = Math.floor(Math.random()*6 + 1);
var number2 = Math.floor(Math.random()*6 + 1);

function set_image1(n){

    if(n==1){
       document.querySelector(".img1").src = "dice 1.png";
    }
    else if(n==2){
        document.querySelector(".img1").src = "dice 2.png";
    }
    else if(n==3){
        document.querySelector(".img1").src = "dice 3.png";
    }
    else if(n==4){
        document.querySelector(".img1").src = "dice 4.png";
    }
    else if(n==5){
        document.querySelector(".img1").src = "dice 5.png";
    }
    else{
        document.querySelector(".img1").src = "dice 6.png";
    }

}


function set_image2(n){

    if(n==1){
       document.querySelector(".img2").src = "dice 1.png";
    }
    else if(n==2){
        document.querySelector(".img2").src = "dice 2.png";
    }
    else if(n==3){
        document.querySelector(".img2").src = "dice 3.png";
    }
    else if(n==4){
        document.querySelector(".img2").src = "dice 4.png";
    }
    else if(n==5){
        document.querySelector(".img2").src = "dice 5.png";
    }
    else{
        document.querySelector(".img2").src = "dice 6.png";
    }

}

set_image1(number1);
set_image2(number2);


if( number1 > number2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins ☣";
    document.querySelector(".p1").innerHTML = "Player 1 ✅";
    document.querySelector(".p2").innerHTML = "Player 2 ❌";
    

}
else if(number2 > number1) {
     document.querySelector("h1").innerHTML = "Player 2 Wins ☢";
     document.querySelector(".p1").innerHTML = "Player 1 ❌";
     document.querySelector(".p2").innerHTML = "Player 2 ✅";
}
else {
    document.querySelector("h1").innerHTML = "It's a Draw 🔱";
    document.querySelector(".p1").innerHTML = "Player 1 ✅";
    document.querySelector(".p2").innerHTML = "Player 2 ✅";
  
}
}

document.querySelector("button").addEventListener("click",playgame);