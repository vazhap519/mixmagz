
// var TopLeftSlideContainer=document.querySelectorAll(".topAreaLeftContent");
// var TopLeftSlideContainerCounter=0;

// function LeftSlideLen(){
//    for (let index = 0; index < TopLeftSlideContainer.length; index++) {
//     TopLeftSlideContainer[index].style.display="none";
       
//    }
  
// }

// function updateLeftSlide(){
//     LeftSlideLen();
//     console.log(TopLeftSlideContainerCounter++)
//     if(TopLeftSlideContainerCounter>TopLeftSlideContainer.length-1){
//         TopLeftSlideContainerCounter=0;
//     }
    
       
// TopLeftSlideContainer[TopLeftSlideContainerCounter].style.display="block";
     
    
  
// }


// setInterval(function(){
//     updateLeftSlide()
// },1000)
//END LEFT AREA CAROUSEL


// var TopRightSlideContainerSportCount=0,
//     TopRightSlideContainerSport=document.querySelectorAll(".sportsAreaContent");
//     function SportCarousel(){
//         for (let index = 0; index < TopRightSlideContainerSport.length; index++) {
//             TopRightSlideContainerSport[index].style.display="none";
            
//         }
//     }
// function SportCarouselUpdate(){
//     SportCarousel()
//     TopRightSlideContainerSportCount++
//     if(TopRightSlideContainerSportCount>TopRightSlideContainerSport.length-1){
//         TopRightSlideContainerSportCount=0;
//     }
//     TopRightSlideContainerSport[TopRightSlideContainerSportCount].style.display="block"
// }


// setInterval(function(){
//     SportCarouselUpdate()
// },1000)
//END SPORT NEWS CAROUSEL


// var TopRightSlideContainerphotoCount=0,
//     TopRightSlideContainerPhoto=document.querySelectorAll(".phtothographyAreaContent");
//     function PhotoCarousel(){
//      for (let index = 0; index < TopRightSlideContainerPhoto.length; index++) {
//         TopRightSlideContainerPhoto[index].style.display="none";
         
//      }
//     }
// function PhotoCarouselUpdate(){
//     PhotoCarousel()
//     TopRightSlideContainerphotoCount++;
//     if(TopRightSlideContainerphotoCount>TopRightSlideContainerPhoto.length-1){
//         TopRightSlideContainerphotoCount=0
//     }
//     TopRightSlideContainerPhoto[TopRightSlideContainerphotoCount].style.display="block"
// }


//  setInterval(function(){
//      PhotoCarouselUpdate()
//  },1000)

// //END PHOTOGRAPHY CAROUSEL

// var TopRightSlideContainerHealthCount=0,
//     TopRightSlideContainerHealth=document.querySelectorAll(".HealthContent");
//     function HealthCarousel(){
//      for (let index = 0; index < TopRightSlideContainerHealth.length; index++) {
//         TopRightSlideContainerHealth[index].style.display="none";
         
//      }
//     }
// function HealthCarouselUpdate(){
//     HealthCarousel()
//     TopRightSlideContainerHealthCount++;
//     if(TopRightSlideContainerHealthCount>TopRightSlideContainerHealth.length-1){
//         TopRightSlideContainerHealthCount=0
//     }
//     TopRightSlideContainerHealth[TopRightSlideContainerHealthCount].style.display="block"
// }


// setInterval(function(){
//     HealthCarouselUpdate()
// },1000)

//END HEALTH CAROUSEL



let TopNewsesCarouselItems=document.querySelectorAll(".TopNewsesCarouselItems");

let TopNewsesCarousel=document.querySelector(".TopNewsesCarousel");

let LeftArrow=document.querySelector(".left")

let RightArrow=document.querySelector(".right")
LeftArrow.addEventListener("click",()=>{
    TopNewsesCarousel.scrollLeft-=125;
})
RightArrow.addEventListener("click",()=>{
    TopNewsesCarousel.scrollLeft+=125;
})

const max=TopNewsesCarousel.scrollWidth-TopNewsesCarousel.clientWidth;
function Autoplay(){
    if(TopNewsesCarousel.scrollLeft>(max-1)){
        TopNewsesCarousel.scrollLeft-=max;
    }else{
        TopNewsesCarousel.scrollLeft+=1;
    }
}
let play=setInterval(Autoplay,50)

for(var i=0;i<TopNewsesCarouselItems.length;i++){
    TopNewsesCarouselItems[i].addEventListener("mouseover",()=>{
        clearInterval(play)
    })
    TopNewsesCarouselItems[i].addEventListener("mouseout",()=>{
        return play=setInterval(Autoplay,50)
    })
}