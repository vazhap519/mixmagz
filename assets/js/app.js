
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






var main=document.getElementById("main");
console.log(main.clientWidth)



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


// let Contact=document.querySelector(".ContactForm");
// let NameInput=document.querySelector(".NameInp");
// let Email=document.querySelector(".EmailInp");
// let Message=document.querySelector(".MessageInp");
// let Phone=document.querySelector(".TelInp")





// function validateForm(){
//     //Name
//     if(NameInput.value.trim()==""){
//         setError(NameInput ," გთხოვთ შეავსოთ ველი");
//     }else if(NameInput.value.trim().length<3){
//         setError(NameInput ,"მინიმუალური სიმბოლოების რაოდენობა 3");
//     }else{
//         setSuccsess(NameInput,'გთხოვთ გააგრძელოთ')
//     }
//     //Email

//     if(Email.value.trim()==""){
//         setError(Email ," გთხოვთ შეავსოთ ველი");
//     }else if(isEmailValid(Email.value)){
//         setSuccsess(Email,"გთხოვთ გააგრძელოთ");
//     }else{
//         setError(Email,"გადაამოწმე იმეილი")
//     }

  
// let regex = /^[\d,\s,\+,\-]{5,20}/;
//     //phone
//    if(Phone.value==""){
//     setError(Phone,"გადაამოწმე ნომერი")  
//    }else if(Phone.value.match(regex)){
//     setSuccsess(Phone,"გთხოვთ გააგრძელოთ");
//    }
//    else{
//     setError(Phone,"ნომერი არასწორია" )  
   
//    }
//      //message
//   if(Message.value.trim()==""){
//     setError(Message ," შეტრობინება ცარიელია");
//   }else if(Message.value.trim().length<10){
//     setError(Message ," შეტრობინება 10 სიმბოლოზე ნაკლებია");
//   }
// else{
//     setSuccsess(Message,"გთხოვთ გააგრძელოთ");
// }

// }


// function setError(element, Errormessage){
//     const parent=element.parentElement;
//     if(parent.classList.contains("sucsses")){

//         parent.classList.remove("sucsses");
//     }
//     parent.classList.add('error')
//     const smaall=parent.querySelector("small")
//     smaall.textContent=Errormessage;
// }



// function setSuccsess(element,succsessMesage){
//     const parent=element.parentElement;
//     if(parent.classList.contains("error")){
//         parent.classList.remove("error")
//     }
//     parent.classList.add("sucsses");
//     const small=parent.querySelector("small");
//     small.textContent=succsessMesage;

// }


// function isEmailValid(email){
//     const reg =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

//     return reg.test(email);
// }

// function isPhoneValid(Phone){
//     const PhoneReg= /^[\d,\s,\+,\-]{5,20}/;
//     return PhoneReg.test(Phone)
// }

// Contact.addEventListener("click",function(e){
//     // e.preventDefault();
//      validateForm()
// })
