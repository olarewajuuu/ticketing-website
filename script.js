

let meunbar = document.querySelector("#meun-bar")
let NavLink = document.querySelector(".Nav-Link")


function hide(){
    loginform.classList.remove("active") 

}
function showmeun(){
    meunbar.classList.toggle("fa-times")
    NavLink.classList.toggle("active")
}


let scrollContainer = document.querySelector(".gallery")
let backBtn = document.getElementById("backBtn")
let nextBtn = document.getElementById("nextBtn")

scrollContainer.addEventListener("wheel", (evt) =>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto"
});

backBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth"
    scrollContainer.scrollLeft += 500;
});
nextBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth"
    scrollContainer.scrollLeft -= 500;
});





