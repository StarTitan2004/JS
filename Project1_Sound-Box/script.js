var key=addEventListener("keydown",function(e){

    const arr=["A","S","D","F","G","H","J","K","L","a","s","d","f","g","h","j","k","l"];

    for(let i=0;i<18;i++){
        if(e.key===arr[i]){
            if(i>8){
                i=i-9;
            }
            sound(i+1);
            break;
        }
    }
  
});


function sound(id){
    // console.log(id);

    var audio=document.createElement("audio");
    audio.setAttribute("autoplay","True");

    switch(+id){
        case 1:
            audio.setAttribute("src","camera-13695.mp3");
            break;
        case 2:audio.setAttribute("src","whoosh.mp3");
            break;
        case 3:audio.setAttribute("src","Pop sound effect.mp3");
            break;
        case 4:audio.setAttribute("src","Mouse Click Sound Effect.mp3");
            break;
        case 5:audio.setAttribute("src","natural-thunder-113219.mp3");
            break;
        case 6:audio.setAttribute("src","Camera Shutter Sound Effect.mp3");
            break;
        case 7:audio.setAttribute("src","Keyboard typing sound effect.mp3");
            break;
        case 8:audio.setAttribute("src","monster-footstep-162883");
            break; 
        case 9:audio.setAttribute("src","Old Movie Projector - Sound Effect (HD).mp3");
            break;
   
    }
    
    // var a=document.getElementsByClassName("letters::before");
    //     a.content="red";
    //     a.position="absolute";
    //     a.top="-20px";
    //     console.log(document.getElementsByClassName("letters::before"));

    document.getElementById(id).appendChild(audio);
    var change=setTimeout(() => {
        document.getElementById(id).style.fontSize="30px";
       

    }, 100);
        document.getElementById(id).style.fontSize="50px";
}



