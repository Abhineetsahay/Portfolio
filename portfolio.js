//this is javascript code that allow to see the list items and also allow to close the item  when the width of body is less than or equal to 600px
let ul=document.getElementById("ul");
let i=document.getElementById("id");
let cross1=document.getElementById("i1")
let body=document.body;
let bodyWidth = parseInt(window.getComputedStyle(body).width);
if (bodyWidth<=600) {
          ul.style.display = "none";
          i.style.display = "flex";
} 
i.addEventListener("click",()=>{
          if (bodyWidth <= 600) {
              ul.style.display = "flex";
              i.style.display = "none";
              cross1.style.display="flex";
          }
});
// cross code
cross1.addEventListener("click",()=>{
    if (bodyWidth<=600) {
         ul.style.display = "none";
        i.style.display = "flex";
        cross1.style.display="none";
    }
})
