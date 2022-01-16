
var BuisnessSlideContainer=document.querySelectorAll(".BuisnessNewsContent");
var BuisnessSlideContainerCounter=0;
function LeftSlideLen(){
   for (let index = 0; index < BuisnessSlideContainer.length; index++) {
    BuisnessSlideContainer[index].style.display="none"; 
   }
}

function updateLeftSlide(){
    LeftSlideLen();
         BuisnessSlideContainerCounter++
    if(BuisnessSlideContainerCounter>BuisnessSlideContainer.length-1){
        BuisnessSlideContainerCounter=0;
    } 
        BuisnessSlideContainer[BuisnessSlideContainerCounter].style.display="block";
}

setInterval(function(){
    updateLeftSlide()
},1000)

//END BUISNESS CAROUSEL
var SportCount=0,
    ContainerSportNews=document.querySelectorAll(".sportNews");
  
    function SportCarousel(){
        for (let index = 0; index < ContainerSportNews.length; index++) {
            ContainerSportNews[index].style.display="none";
            
        }
    }

function SportCarouselUpdate(){
    SportCarousel()
    SportCount++
    if(SportCount>ContainerSportNews.length-1){
        SportCount=0;
    }
    ContainerSportNews[SportCount].style.display="block"
}

setInterval(function(){
    SportCarouselUpdate()
},1000)
//END SPORT CAROUSEL
var photoCount=0,
    ContainerPhoto=document.querySelectorAll(".PhotographyNews");
    function PhotoCarousel(){
     for (let index = 0; index < ContainerPhoto.length; index++) {
        ContainerPhoto[index].style.display="none";
         
     }
    }

function PhotoCarouselUpdate(){
    PhotoCarousel()
    photoCount++;
    if(photoCount>ContainerPhoto.length-1){
        photoCount=0
    }
    ContainerPhoto[photoCount].style.display="block"
}


 setInterval(function(){
     PhotoCarouselUpdate()
 },1000)
//END PHOTOGRAPHY CAROUSEL

var ContainerHealthCount=0,
    ContainerHealth=document.querySelectorAll(".healthContent");
    function HealthCarousel(){
     for (let index = 0; index < ContainerHealth.length; index++) {
        ContainerHealth[index].style.display="none";
         
     }
    }

function HealthCarouselUpdate(){
    HealthCarousel()
    ContainerHealthCount++;
    if(ContainerHealthCount>ContainerHealth.length-1){
        ContainerHealthCount=0
    }
    ContainerHealth[ContainerHealthCount].style.display="block"
}

setInterval(function(){
    HealthCarouselUpdate()
},1000)

//END HEALTH CAROUSEL
var FashionNews=document.querySelectorAll(".FeaturedNewsAreaSub_Fashion_Carousel"),
    FashionNewsCount=0;
    function FashionF(){
        for(var i=0;i<FashionNews.length;i++){
            FashionNews[i].style.display="none";
        }
    }

function FashionUpdate(){
    FashionNewsCount++;
    FashionF()
    if(FashionNewsCount>FashionNews.length-1){
        FashionNewsCount=0;
    }
    FashionNews[FashionNewsCount].style.display="block";
} 

setInterval(FashionUpdate,1000)
//END FASHION CAROUSEL



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
        TopNewsesCarousel.scrollLeft-= max;
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
//END SCROLL CAROUSEL

let TopStoryWgetContent=document.querySelectorAll(".TopStoryWgetContentPosts");
let TopStoryWgetLeft=document.querySelector(".TopStoryWgetButtonsLeft");
let TopStoryWgetRight=document.querySelector(".TopStoryWgetButtonsRight");
let TopStoryWgetCount=0;
function TopStoryWgetContentUpdate(){
    for(var i=0;i<TopStoryWgetContent.length;i++){
        TopStoryWgetContent[i].style.display="none"
    }
}
function TopStoryWgetContentUpdateRight(){
    TopStoryWgetContentUpdate()
    TopStoryWgetCount++
    if(TopStoryWgetCount>TopStoryWgetContent.length-1){
        TopStoryWgetCount=0
       
    }
    TopStoryWgetContent[TopStoryWgetCount].style.display="block";

}

function TopStoryWgetContentUpdateLeft(){
    TopStoryWgetContentUpdate()
    if(TopStoryWgetCount==0){
        TopStoryWgetCount=TopStoryWgetContent.length
    }
    TopStoryWgetCount--
    TopStoryWgetContent[TopStoryWgetCount].style.display="block";
    
}

TopStoryWgetRight.addEventListener("click",TopStoryWgetContentUpdateRight);
TopStoryWgetLeft.addEventListener('click',TopStoryWgetContentUpdateLeft);

setInterval(TopStoryWgetContentUpdateRight,1000)
//END TOP STORY CROUSEL



var DartModeMain=document.querySelector("#main"),
DartModeFooter=document.querySelector("#footer")
    

var test=document.querySelector(".navbar-brand");
test.addEventListener("click",function(e){
    e.preventDefault();
    DartModeMain.classList.toggle("dark");
    DartModeFooter.classList.toggle("dark")
})