var bar = document.querySelector("#bar");
var open = document.querySelector("#open")
var close = document.querySelector("#close")


$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });




window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 160 || document.documentElement.scrollTop > 160) {
    document.getElementById("text").style.display = "none";
  } else {
    document.getElementById("text").style.display="block"
  }
} 




open.addEventListener("click", ()=>{
    bar.style.display="flex"
    open.style.display="none"
    close.style.display="block"
    
})
close.addEventListener("click", ()=>{
    bar.style.display="none"
    open.style.display="block"
    close.style.display="none"



})