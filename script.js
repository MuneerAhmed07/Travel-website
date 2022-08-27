let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector(".navbar");
let closeBtn = document.querySelector('#close-btn');

menu.onclick = () =>{
    navbar.classList.toggle('active');
}

closeBtn.onclick = () =>{
    navbar.classList.remove("active");
}

window.onscroll = () =>{

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }

}


window.onload = () =>{
  if(window.scrollY > 0){
      document.querySelector('.header').classList.add('active');
  }else{
      document.querySelector('.header').classList.remove('active');
  }
}