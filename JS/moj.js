const btnCookie = document.querySelector(".btn-cookie");
const nextcookie = document.querySelector(".nextcookie");
const eat = document.querySelector(".eat");
const eatOne = document.querySelector(".eatOne");
const eatTwo = document.querySelector(".eatTwo");
const eatnextcookie = document.querySelector('.eatnextcookie')

const eatCokie = () => {
	eat.classList.add("eatOne");
};

const eatnext = () => {
	eatnextcookie.classList.add("eatTwo");
    
};

btnCookie.addEventListener("click", eatCokie);
nextcookie.addEventListener("click", eatnext);
