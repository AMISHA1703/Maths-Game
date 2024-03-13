

var playing=false;
var score;

// set start btn
document.getElementById("ans").onclick=function(){
    if(playing==true){
        location.reload();
    
    }

    else{
        score=0;
        document.getElementById("scorevalue").innerHTML=score;
        
    }
}
