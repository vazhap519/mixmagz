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
 setInterval(ChangeSlide,1000)

var Sport=document.querySelectorAll(".sportNewsAreaContent");
var SportC=0;
function SportSlideLen(){
for(var i=0;i<Sport.length;i++){
Sport[i].style.display="none";

}

}
function ChangeSportLen(){
    SportC++
    SportSlideLen();
if(SportC>Sport.length-1){
    SportC=0;
}
Sport[SportC].style.display="block";

}
setInterval(ChangeSportLen,1000)



var PhotoGrafy=document.querySelectorAll(".photographyNewsContent");
var PhotoGrafyCount=0;
function PhotoGrafyLen(){
    for(var i=0;i<PhotoGrafy.length;i++){
        PhotoGrafy[i].style.display="none"
    }
}

function updatePhotoGrafyLen(){
    PhotoGrafyCount++;
    PhotoGrafyLen()
    if(PhotoGrafyCount>PhotoGrafy.length-1){
        PhotoGrafyCount=0;
       
    }
    PhotoGrafy[PhotoGrafyCount].style.display="block"
}
setInterval(updatePhotoGrafyLen,1000)



var HCont=document.querySelectorAll(".healthContent");
var HContCount=0;
function HContLen(){
    for(var i=0;i<HCont.length;i++){
        HCont[i].style.display="none"
    }
}

function HContLenUpdate(){
    HContCount++;
    HContLen();
    if(HContCount>HCont.length-1){
        HContCount=0;
    }
    HCont[HContCount].style.display="block"
}
setInterval(HContLenUpdate,1000)



var PostsCarousel=document.querySelector(".TopNewsesHeadlinesAreaCarousel"),
    PostsCarouselWidth=PostsCarousel.offsetWidth,
    PostsCarouselChilds=PostsCarousel.children
var margin=30;
let elements=0;
let Right=document.querySelector(".arrowR");

responsive=[
    {breakPoint:{items:1,Itemswidth:0}},
        
    {breakPoint:{items:2,Itemswidth:600}},
    {breakPoint:{items:4,Itemswidth:1000}}
    
]
window.onload=loadSlide()
function loadSlide(){
    for(var i=0;i<responsive.length;i++){
        if(window.innerWidth>responsive[i].breakPoint.Itemswidth){
            elements=responsive[i].breakPoint.items;
        }

        console.log(elements)
    }
    start()
}
function start(){
    var totalwidth=0;
    for(var i=0;i<PostsCarouselChilds.length;i++){
        totalwidth+=PostsCarouselWidth/elements;
        PostsCarouselChilds[i].style.width=(PostsCarouselWidth/elements)-margin +"px";
        PostsCarouselChilds[i].style.margin=(margin/2)+"px";
     
    }
    PostsCarousel.style.width=totalwidth+"px";
}
let TopCount=0;
Right.addEventListener("click",Right);

function RightT(){
    for(var i=0;i<PostsCarouselChilds.length;i++){
        TopCount++;
        PostsCarouselChilds[i].style.transform="translateX(50)"
        if(TopCount<12){
           
        }
    }
    console.log("click");
}
RightT()