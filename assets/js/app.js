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
    