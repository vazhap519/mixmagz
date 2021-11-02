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