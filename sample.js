
let meunbar = document.querySelector("#meun-bar")
let NavLink = document.querySelector(".Nav-Link")


function hide(){
    loginform.classList.remove("active") 

}
function showmeun(){
    meunbar.classList.toggle("fa-times")
    NavLink.classList.toggle("active")
}