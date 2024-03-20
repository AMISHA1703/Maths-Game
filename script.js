
var playing=false;
var score;

// set start btn
document.getElementById("start_btn").onclick=function(){
    if(playing==true){
        location.reload();
    
    }

    else{
        score=0;
        document.getElementById("scorevalue").innerHTML=score;
         document.getElementByID("timeleft").style.display="block";      
         document.getElementById("start_btn").input.value="Reset Game";

    }
}
