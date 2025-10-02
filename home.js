// ----- Hero Slider -----
let heroImages=['assets/images/hero1.jpg','assets/images/hero2.jpg','assets/images/hero3.jpg'];
let currentHero=0;
const heroSlider=document.getElementById('hero-slider');
function showHero(){
  heroSlider.style.backgroundImage=`url('${heroImages[currentHero]}')`;
  currentHero=(currentHero+1)%heroImages.length;
}
showHero();
setInterval(showHero,4500);

// ----- Announcements -----
let announcements=["Exam Schedule Released","Library Updated","Sports Day 5th Oct"];
const annCol=document.getElementById('announcement-column');
const annBtn=document.getElementById('announcement-btn');
annBtn.addEventListener('click',()=>annCol.classList.toggle('active'));
announcements.forEach(text=>{
  let div=document.createElement('div');div.className='bubble';div.innerText=text;annCol.appendChild(div);
});
let annIndex=0;
const bubbles=annCol.querySelectorAll('.bubble');
function autoAnn(){
  bubbles.forEach(b=>b.classList.remove('show'));
  bubbles[annIndex].classList.add('show');
  annIndex=(annIndex+1)%bubbles.length;
}
setInterval(autoAnn,3000);
autoAnn();

// ----- Leadership Cards -----
let leaders=[
  {name:"Dr. Sunita Sharma",role:"Principal",img:"assets/images/principal.jpg"},
  {name:"Mr. Rajesh Kumar",role:"Director",img:"assets/images/director.jpg"}
];
const leadRow=document.getElementById('leadership-cards');
leaders.forEach(l=>{
  let card=document.createElement('div');
  card.className='col-md-4 col-sm-6';
  card.innerHTML=`<div class="card p-3 text-center"><img src="${l.img}" style="width:150px;height:150px;object-fit:cover;" class="mb-3"><h5>${l.name}</h5><p class="text-muted">${l.role}</p></div>`;
  leadRow.appendChild(card);
});

// ----- Poster Slider -----
let posters=['assets/images/poster1.jpg','assets/images/poster2.jpg','assets/images/poster3.jpg'];
const posterTrack=document.getElementById('poster-track');
posters.forEach(img=>{
  let div=document.createElement('div');div.className='poster';div.innerHTML=`<img src="${img}">`;posterTrack.appendChild(div);
});
let posterIndex=0;
const posterPrev=document.querySelector('.arrow.prev');
const posterNext=document.querySelector('.arrow.next');
function showPoster(i){
  const posters=posterTrack.children;
  const offset=i*(posters[0].offsetWidth+20);
  posterTrack.style.transform=`translateX(-${offset}px)`;
}
posterPrev.onclick=()=>{posterIndex=(posterIndex>0)?posterIndex-1:posters.length-1;showPoster(posterIndex);}
posterNext.onclick=()=>{posterIndex=(posterIndex<posters.length-1)?posterIndex+1:0;showPoster(posterIndex);}
setInterval(()=>{posterIndex=(posterIndex<posters.length-1)?posterIndex+1:0;showPoster(posterIndex)},5000);

// ----- Navbar Hide/Show -----
let lastScroll=0;
const navbar=document.querySelector('.floating-navbar');
window.addEventListener('scroll',()=>{
  let cur=window.pageYOffset;
  if(cur>lastScroll && cur>100){navbar.style.opacity=0;navbar.style.top='-100px';}
  else{navbar.style.opacity=1;navbar.style.top='15px';}
  lastScroll=cur;
});

// ----- Footer Pop-up at End -----
const footer=document.getElementById('footer');
window.addEventListener('scroll',()=>{
  const scrollPosition=window.innerHeight + window.scrollY;
  const pageHeight=document.body.offsetHeight;
  if(scrollPosition >= pageHeight - 5){footer.classList.add("show");}
  else{footer.classList.remove("show");}
});
