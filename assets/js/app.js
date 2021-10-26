var BuisnessNews=document.querySelectorAll(".TopNewsesContainerLeftContent");
var BCount=0;
function BuisnessSilede(){
 for(var i=0;i<BuisnessNews.length;i++){
     if(BuisnessNews[i]>BCount){
         console.log(BCount++);
         BuisnessNews[i].style.Background="green";
     }
 }
}
var interval=setInterval(BuisnessSilede,1000)
