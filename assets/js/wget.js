
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
    let NameInput=ContactForm.querySelector("input[name='name']");
    let Email=ContactForm.querySelector("input[name='email']");
    let Message=ContactForm.querySelector("input[name='Message']");
    let Phone=ContactForm.querySelector("input[name='tel']");
  
    ContactForm.addEventListener('submit',(e)=>{
        e.preventDefault;
        if(NameInput.value==""){
          var span=document.createElement("span");
          span.classList.add('error nameError');
          span.textContent="გთხოვთ შეიყვანოთ სახელი";
          span.append( form-group-name);
        }else{
            var span=document.createElement("span");
            span.classList.add('success namesucsess');
            span.textContent="გთხოვთ გააგრძელოთ ";
        }




        if(Email.value==""){
            var span=document.createElement("span");
            span.classList.add('error Emailrror');
            span.textContent="გთხოვთ შეიყვანოთ იმეილი";
            span.append(Email);
          }else{
              var span=document.createElement("span");
              span.classList.add('success Emailsucsess');
              span.textContent="გთხოვთ გააგრძელოთ ";
          }



          
        if(Message.value==""){
            var span=document.createElement("span");
            span.classList.add('error MessageError');
            span.textContent="გთხოვთ შეიყვანოთ შეტყობინება";
            span.append(Email);
          }else{
              var span=document.createElement("span");
              span.classList.add('success Messagesucsess');
              span.textContent="გთხოვთ გააგრძელოთ ";
          }




          if(Phone.value==""){
            var span=document.createElement("span");
            span.classList.add('error PhoneError');
            span.textContent="გთხოვთ შეიყვანოთ ტელეფონი";
            span.append(Email);
          }else{
              var span=document.createElement("span");
              span.classList.add('success Phonesucsess');
              span.textContent="გთხოვთ გააგრძელოთ ";
          }
    })


    
}
ContactValid()