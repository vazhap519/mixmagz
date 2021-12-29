
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
let index=0;
let CategoryPageCarouselItems=document.querySelectorAll(".category_page_Carousell_content");
function CategoryPageCarousel(){
    for(var index=0;index<CategoryPageCarouselItems.length;index++){
        CategoryPageCarouselItems[index].style.display="none";
    }
}
function CategoryPageCarouselUpdate(){
    CategoryPageCarousel()
    index++;
    if(index>CategoryPageCarouselItems.length-1){
        index=0
    }
    CategoryPageCarouselItems[index].style.display="block";
}

setInterval(CategoryPageCarouselUpdate,1000)
//END CATEGORY PAGE  CROUSEL