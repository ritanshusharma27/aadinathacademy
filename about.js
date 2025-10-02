document.addEventListener("DOMContentLoaded", function() {
  // -------------------- Navbar Scroll Animation --------------------
  const navbar = document.querySelector(".floating-navbar");
  let lastScrollTop = 0;

  window.addEventListener("scroll", function() {
    let scrollTop = window.scrollY;
    if (scrollTop > lastScrollTop) {
      // Scroll Down → Hide Navbar
      navbar.style.top = "-100px";
    } else {
      // Scroll Up → Show Navbar
      navbar.style.top = "15px";
    }
    lastScrollTop = scrollTop;
  });

  // -------------------- Council Members --------------------
  const councilMembers = [
    {name:"Ritanshu Sharma", role:"Head Boy", img:"assets/images/council1.jpg"},
    {name:"Aatha chaudhary", role:"Head Girl", img:"assets/images/council2.jpg"},
    {name:"Nakshatra Sharma", role:"Vice Head Boy", img:"assets/images/council13.jpg"},
    {name:"Kashish Meena", role:"Vice Head Girl", img:"assets/images/council4.jpg"},
    {name:"Siddharth Singh", role:"Sports Captain", img:"assets/images/council5.jpg"},
    {name:"Rishabh Mewara", role:"Vice Sports Captain", img:"assets/images/council6.jpg"},
    {name:"Inaya Ali", role:"Cultural Captain", img:"assets/images/council7.jpg"},
    {name:"Aadhya Gautam", role:"Vice Cultural Captain", img:"assets/images/council8.jpg"},
    {name:"Vedik Sharma", role:"Discipline In-charge", img:"assets/images/council9.jpg"},
    {name:"Darshika", role:"Vice Discipline In-charge", img:"assets/images/council10.jpg"},
  ];

  const councilTrack = document.getElementById("council-track");

  councilMembers.forEach(member=>{
    const div = document.createElement("div");
    div.className = "council-card";
    div.innerHTML = `
      <img src="${member.img}" alt="${member.name}">
      <h4>${member.name}</h4>
      <p class="role">${member.role}</p>
    `;
    councilTrack.appendChild(div);
  });

  // -------------------- Facilities --------------------
  const facilities = [
    {name:"Sports Ground", desc:"Football, Cricket, Volleyball & Badminton grounds", img:"assets/images/sports.jpg"},
    {name:"Classrooms", desc:"Fully furnished AC classrooms", img:"assets/images/classroom.jpg"},
    {name:"Library", desc:"Well-stocked library with modern reading area", img:"assets/images/library.jpg"},
    {name:"Computer Lab", desc:"State-of-the-art computer lab with internet", img:"assets/images/computerlab.jpg"},
    {name:"Science Lab", desc:"Equipped science lab for experiments", img:"assets/images/sciencelab.jpg"},
  ];

  const facilitiesTrack = document.getElementById("facilities-track");

  facilities.forEach(fac=>{
    const div = document.createElement("div");
    div.className = "council-card";
    div.innerHTML = `
      <img src="${fac.img}" alt="${fac.name}">
      <h4>${fac.name}</h4>
      <p class="desc">${fac.desc}</p>
    `;
    facilitiesTrack.appendChild(div);
  });

  // -------------------- Slider Controls --------------------
  function setupSlider(sliderId, trackId) {
    const slider = document.getElementById(sliderId);
    const track = document.getElementById(trackId);
    const prev = slider.querySelector(".prev");
    const next = slider.querySelector(".next");
    let index = 0;

    function update() {
      const cardWidth = track.querySelector(".council-card").offsetWidth + 30;
      track.style.transform = `translateX(-${index * cardWidth}px)`;
    }

    prev.addEventListener("click",()=>{ if(index>0){ index--; update(); }});
    next.addEventListener("click",()=>{ if(index < track.children.length - 2){ index++; update(); }});
  }

  setupSlider("council-slider","council-track");
  setupSlider("facilities-slider","facilities-track");

  // -------------------- Scroll Reveal Animation --------------------
  const revealCards = document.querySelectorAll(".council-card");

  function revealOnScroll() {
    revealCards.forEach(card=>{
      const rect = card.getBoundingClientRect();
      if(rect.top < window.innerHeight - 100) {
        card.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Initial check

  // -------------------- Footer Scroll Animation --------------------
  const footer = document.getElementById("footer");
  const facilitiesSection = document.querySelector(".facilities-section");

  function toggleFooter() {
    const scrollPosition = window.scrollY + window.innerHeight;
    const facilitiesTop = facilitiesSection.offsetTop;
    if(scrollPosition >= facilitiesTop + 50) {
        footer.classList.add("show");
    } else {
        footer.classList.remove("show");
    }
  }

  window.addEventListener("scroll", toggleFooter);
  toggleFooter();
});
