
let TopStoryWgetCont=document.querySelectorAll(".TopStoryWgetContentPosts");
let TopStoryWgetLeft=document.querySelector(".TopStoryWgetButtonsLeft");
let TopStoryWgetRight=document.querySelector(".TopStoryWgetButtonsRight");
let TopStoryWgetCount=0;
function TopStoryWgetContentUpdate(){
    for(var i=0;i<TopStoryWgetCont.length;i++){
        TopStoryWgetCont[i].style.display="none"
    }
}
function TopStoryWgetContentUpdateRight(){
    TopStoryWgetContentUpdate()
    TopStoryWgetCount++
    if(TopStoryWgetCount>TopStoryWgetCont.length-1){
        TopStoryWgetCount=0
       
    }
    TopStoryWgetCont[TopStoryWgetCount].style.display="block";

}

function TopStoryWgetContentUpdateLeft(){
    TopStoryWgetContentUpdate()
    if(TopStoryWgetCount==0){
        TopStoryWgetCount=TopStoryWgetCont.length
    }
    TopStoryWgetCount--
    TopStoryWgetCont[TopStoryWgetCount].style.display="block";
    
}

TopStoryWgetRight.addEventListener("click",TopStoryWgetContentUpdateRight);
TopStoryWgetLeft.addEventListener('click',TopStoryWgetContentUpdateLeft);

setInterval(TopStoryWgetContentUpdateRight,1000)
//END TOP STORY CROUSEL


let Contact=document.querySelector(".ContactForm");
let NameInput=document.querySelector(".NameInp");
let Email=document.querySelector(".EmailInp");
let Message=document.querySelector(".MessageInp");
let Phone=document.querySelector(".TelInp")

function Click(){


Contact.addEventListener("click",(events)=>{
    events.preventDefault();
      validateForm()
 })
 
}


function validateForm(){
    //Name
    if(NameInput.value.trim()==""){
        setError(NameInput ," გთხოვთ შეავსოთ ველი");
    }else if(NameInput.value.trim().length<3){
        setError(NameInput ,"მინიმუალური სიმბოლოების რაოდენობა 3");
    }else{
        setSuccsess(NameInput,'გთხოვთ გააგრძელოთ')
    }
    //Email

    if(Email.value.trim()==""){
        setError(Email ," გთხოვთ შეავსოთ ველი");
    }else if(isEmailValid(Email.value)){
        setSuccsess(Email,"გთხოვთ გააგრძელოთ");
    }else{
        setError(Email,"გადაამოწმე იმეილი")
    }

  
let regex = /^[\d,\s,\+,\-]{5,20}/;
    //phone
   if(Phone.value==""){
    setError(Phone,"გადაამოწმე ნომერი")  
   }else if(Phone.value.match(regex)){
    setSuccsess(Phone,"გთხოვთ გააგრძელოთ");
   }
   else{
    setError(Phone,"ნომერი არასწორია" )  
   
   }
     //message
  if(Message.value.trim()==""){
    setError(Message ," შეტრობინება ცარიელია");
  }else if(Message.value.trim().length<10){
    setError(Message ," შეტრობინება 10 სიმბოლოზე ნაკლებია");
  }
else{
    setSuccsess(Message,"გთხოვთ გააგრძელოთ");
}

}


function setError(element, Errormessage){
    const parent=element.parentElement;
    if(parent.classList.contains("sucsses")){

        parent.classList.remove("sucsses");
    }
    parent.classList.add('error')
    const smaall=parent.querySelector("small")
    smaall.textContent=Errormessage;
}



function setSuccsess(element,succsessMesage){
    const parent=element.parentElement;
    if(parent.classList.contains("error")){
        parent.classList.remove("error")
    }
    parent.classList.add("sucsses");
    const small=parent.querySelector("small");
    small.textContent=succsessMesage;

}


function isEmailValid(email){
    const reg =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return reg.test(email);
}

function isPhoneValid(Phone){
    const PhoneReg= /^[\d,\s,\+,\-]{5,20}/;
    return PhoneReg.test(Phone)
}
