let searchbtn = document.querySelector("#searchbtn")
let searchform = document.querySelector(".form-bar")
let loginform = document.querySelector(".login-form")
let meunbar = document.querySelector("#meun-bar")
let NavLink = document.querySelector(".Nav-Link")

function showbar(){
    searchbtn.classList.toggle("fa-times")
    searchform.classList.toggle("active")
}
function username(){
    loginform.classList.add("active") 

}
function hide(){
    loginform.classList.remove("active") 

}
function showmeun(){
    meunbar.classList.toggle("fa-times")
    NavLink.classList.toggle("active")
}