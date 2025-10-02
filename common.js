// ----- Navbar Hide/Show -----
let lastScroll = 0;
const navbar = document.querySelector('.floating-navbar');
window.addEventListener('scroll', ()=>{
  let cur = window.pageYOffset;
  if(cur > lastScroll && cur > 100){
    navbar.style.opacity = 0;
    navbar.style.top = '-100px';
  } else {
    navbar.style.opacity = 1;
    navbar.style.top = '15px';
  }
  lastScroll = cur;
});

// ----- Footer Slide In at Bottom -----
const footer = document.getElementById('footer');
window.addEventListener('scroll', ()=>{
  const scrollPosition = window.innerHeight + window.scrollY;
  const pageHeight = document.body.offsetHeight;

  if(scrollPosition >= pageHeight - 5){
    footer.classList.add("show");
  } else {
    footer.classList.remove("show");
  }
});
