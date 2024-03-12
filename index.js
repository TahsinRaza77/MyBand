alert("hello tahsin ");

var numberOfDrum = document.querySelectorAll(".drum").length;


for( let i=1;i< (numberOfDrum + 1);i++)
{ 
  
  //document.querySelectorAll("button")[i-1].addEventListener("click",function () {var s = new Audio("sounds/tom-1.mp3"); s.play()});

  //document.querySelectorAll("button")[i-1].addEventListener("click",function () {alert("raza jiii " + i )});
 
  //document.querySelectorAll(".drum")[i-1].addEventListener("click",function () {this.style.color="red"});


  // code for sound of drum by click....
  
  document.querySelectorAll(".drum")[i-1].addEventListener("click",function (){
  
      var t = this.innerHTML;
      makesound(t)
    
     
  });
}


// code for sound of drum by key....

document.addEventListener("keypress",function(event){

  makesound(event.key)
})


function makesound(t)
     {
      switch (t)
      {
         case "w":
          var s1 = new Audio("sounds/tom-1.mp3")
          s1.play();
          break;
         
         case "a":
            var s2 = new Audio("sounds/tom-2.mp3")
            s2.play();
            break;

         case "s":
              var s3 = new Audio("sounds/tom-3.mp3")
              s3.play();
              break;

         case "d":
              var s4= new Audio("sounds/tom-4.mp3")
              s4.play();
              break;

         case "j":
           var s5= new Audio("sounds/crash.mp3")
           s5.play();
           break;     
  
         case "k":
            var s6= new Audio("sounds/kick-bass.mp3")
            s6.play();
            break; 

         case "l":
           var s6= new Audio("sounds/snare.mp3")
           s6.play();
           break;

        default:
          var s5= new Audio("sounds/tom-1.mp3")
          s5.play();
      }
    } 





document.querySelector("h1").addEventListener("click",raza);

function raza ()
{
  alert("clicking is also available for heading tag ")
}