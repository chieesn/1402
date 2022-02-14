const menuToggle = document.querySelector('.toggle')
const showcase = document.querySelector('.showcase')

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active')
    showcase.classList.toggle('active')
})

contact.onclick = function(){
    document.getElementById('num').style.display="block";
}

num.onclick = function(){
    num.style.display="none";
}

var pl = document.getElementById("myAudio"); 

function playAudio() { 
  pl.play(); 
} 