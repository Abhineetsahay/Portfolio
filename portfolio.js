let ul=document.getElementById("ul");
let i=document.getElementById("id");
let body=document.body;
let bodyWidth = parseInt(window.getComputedStyle(body).width);
if (bodyWidth<=768) {
          ul.style.display = "none";
          i.style.display = "flex";
} 
i.addEventListener("click",()=>{
          
          if (bodyWidth <= 768) {
              ul.style.display = "flex";
              i.style.display = "none";
          }
});
