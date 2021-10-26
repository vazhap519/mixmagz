var BuisnessNews=document.querySelectorAll(".TopNewsesContainerLeftContent");
var BCount=0;
let TopNewsesContainerLeft=document.querySelector(".TopNewsesContainerLeft")

TopNewsesContainerLeft.addEventListener("click",function(){
if(BCount<BuisnessNews.length){
    
    for(var i=0;i<BuisnessNews.length;i++){
        BCount++;
        console.log(BuisnessNews[i])
        
    }
}
})