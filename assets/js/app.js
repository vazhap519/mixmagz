var SlidesItems=document.querySelectorAll(".TopNewsesContainerLeftContent");
let currentindex=0;
var B=document.querySelector(".btn");
function Sld() {
    for(var i=0;i<SlidesItems.length;i++){
        SlidesItems[i].style.display="none";
    }
    SlidesItems[currentindex].style.display="block";

}
function right() {
    if(currentindex==SlidesItems.length-1){
    
        currentindex++;
    }else{
        currentindex=0;
    }
    Sld()
}
B.addEventListener('click',right());
setInterval(function () {
    B
})