
var TopLeftSlideContainer=document.querySelectorAll(".topAreaLeftContent");
var TopLeftSlideContainerCounter=0;

function LeftSlideLen(){
   for (let index = 0; index < TopLeftSlideContainer.length; index++) {
    TopLeftSlideContainer[index].style.display="none";
       
   }
  
}

function updateLeftSlide(){
    LeftSlideLen();
    console.log(TopLeftSlideContainerCounter++)
    if(TopLeftSlideContainerCounter>TopLeftSlideContainer.length-1){
        TopLeftSlideContainerCounter=0;
    }
    
       
TopLeftSlideContainer[TopLeftSlideContainerCounter].style.display="block";
     
    
  
}


setInterval(function(){
    updateLeftSlide()
},1000)
//END LEFT AREA CAROUSEL


var TopRightSlideContainerSportCount=0,
    TopRightSlideContainerSport=document.querySelectorAll(".sportsAreaContent");
    function SportCarousel(){
        for (let index = 0; index < TopRightSlideContainerSport.length; index++) {
            TopRightSlideContainerSport[index].style.display="none";
            
        }
    }
function SportCarouselUpdate(){
    SportCarousel()
    TopRightSlideContainerSportCount++
    if(TopRightSlideContainerSportCount>TopRightSlideContainerSport.length-1){
        TopRightSlideContainerSportCount=0;
    }
    TopRightSlideContainerSport[TopRightSlideContainerSportCount].style.display="block"
}


setInterval(function(){
    SportCarouselUpdate()
},1000)
//END SPORT NEWS CAROUSEL


var TopRightSlideContainerphotoCount=0,
    TopRightSlideContainerPhoto=document.querySelectorAll(".phtothographyAreaContent");
    function PhotoCarousel(){
     for (let index = 0; index < TopRightSlideContainerPhoto.length; index++) {
        TopRightSlideContainerPhoto[index].style.display="none";
         
     }
    }
function PhotoCarouselUpdate(){
    PhotoCarousel()
    TopRightSlideContainerphotoCount++;
    if(TopRightSlideContainerphotoCount>TopRightSlideContainerPhoto.length-1){
        TopRightSlideContainerphotoCount=0
    }
    TopRightSlideContainerPhoto[TopRightSlideContainerphotoCount].style.display="block"
}


setInterval(function(){
    PhotoCarouselUpdate()
},1000)

//END PHOTOGRAPHY CAROUSEL

var TopRightSlideContainerHealthCount=0,
    TopRightSlideContainerHealth=document.querySelectorAll(".HealthContent");
    function HealthCarousel(){
     for (let index = 0; index < TopRightSlideContainerHealth.length; index++) {
        TopRightSlideContainerHealth[index].style.display="none";
         
     }
    }
function HealthCarouselUpdate(){
    HealthCarousel()
    TopRightSlideContainerHealthCount++;
    if(TopRightSlideContainerHealthCount>TopRightSlideContainerHealth.length-1){
        TopRightSlideContainerHealthCount=0
    }
    TopRightSlideContainerHealth[TopRightSlideContainerHealthCount].style.display="block"
}


setInterval(function(){
    HealthCarouselUpdate()
},1000)
















$('.owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        1000:{
            items:4,
            nav:true,
            loop:true
        }
    }
})
