var Bslide=document.querySelectorAll(".TopNewsesContainerLeftContent");
var cOunT=0;
function update(){
for(var i=0;i<Bslide.length;i++){
    Bslide[i].classList.remove('active')
}
}
function ChangeSlide(){
    
    cOunT++
    update()
    if(cOunT>(Bslide.length-1)){
        cOunT=0;
    }
    Bslide[cOunT].classList.add('active')
}
setInterval(ChangeSlide,6000)
