const imgs=document.querySelectorAll(".img-container img");
const modal=document.getElementById("modal");
const fullImage=document.getElementById("fullImage");
const closeBtn=document.getElementById("close");

imgs.forEach(img=>{
  img.addEventListener("click",()=>{
    fullImage.src=img.dataset.full;
    modal.classList.add("open");
  });
});

closeBtn.addEventListener("click",()=>{
  modal.classList.remove("open");
  fullImage.src="";
});

modal.addEventListener("click",e=>{
  if(e.target===modal){
    modal.classList.remove("open");
    fullImage.src="";
  }
});