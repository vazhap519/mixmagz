
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




function ContactValid(){
    let ContactForm=document.querySelector(".ContactForm");
let NameInput=document.querySelector(".NameInp");
let Email=document.getElementsByClassName("EmailInp");
let Message=document.getElementsByClassName("MessageInp");
let Phone=document.getElementsByClassName("TelInp")
 let contactBtn=document.getElementsByClassName("contactBtn");
let sucsses=document.querySelector(".sucsses");
let error=document.querySelector(".error");

ContactForm.addEventListener("submit",function(e){
e.preventDefault();
if(NameInput.value.trim()==="" || NameInput.value.length<3 ){
    error.style.display="block";
    NameInput.style.border="1px solid red";
}else{
  sucsses.style.display="block";
    NameInput.style.border="1px solid green";
    error.style.display="none";
}







})


}
   
ContactValid()
