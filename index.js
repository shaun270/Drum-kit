for(var i=0;i<document.querySelectorAll(".drum").length;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      var thisinner=this.innerHTML;
      check(thisinner);

  });
}

document.addEventListener("keydown",function(event){
  check(event.key)
  buttonAnimation(event.key);
  }
);            


function check(keys){

    switch (keys) {
      case 'w':
        var audio=new Audio("sounds/crash.mp3");
        audio.play();
        break;

      case 'a':
        var kick=new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;

      case 's':
        var snare=new Audio("sounds/snare.mp3");
        snare.play();
        break;

      case 'd':
        var sounds1=new Audio("sounds/tom-1.mp3");
        sounds1.play();
        break;

      case 'j':
        var sounds2=new Audio("sounds/tom-2.mp3");
        sounds2.play();
        break;

      case 'k':
        var tom=new Audio("sounds/tom-3.mp3");
        tom.play();
        break;

      case 'l':
        var tom4=new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

      default:
    }

}

function buttonAnimation(key){
  var active=document.querySelector("."+key);
  active.classList.add("pressed");

  setTimeout(function(){
    active.classList.remove("pressed");
  },100)
}
