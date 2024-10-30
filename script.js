// header scrolling effect
$(window).on('scroll', function(){
	if($(window).scrollTop()){
      $('header').addClass('nav-show');
		  
	} 
	else{
		$('header').removeClass('nav-show');
	}
	   
})

//hamburger menu
const navSlide = () => {
	 const hamburger = document.querySelector(".hamburger");
	 const navbar = document.querySelector(".nav-bar");
	 const navLinks = document.querySelectorAll(".nav-bar li");

     hamburger.onclick = () => {
		
	 navbar.classList.toggle("nav-active");
		 
      //Animation links
	 navLinks.forEach((link, index) => {
		if (link.style.animation) {
			link.style.animation = "";
		} else {
			link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+1}s`;
		   }
		});
	  //hamburger animation
	 hamburger.classList.toggle("toggle");
    }
	 
	}

window.onload = () => navSlide();

//text animation
let i = 0;
let names = ["A Web developer and designer", "A Node.js developer", "A Discord bot developer"];

function change() {
  document.querySelectorAll(".my-role").forEach(el => {
    el.classList.add("fade-out"); // add fade-out class
    setTimeout(() => {
      el.innerHTML = names[i];
      el.classList.remove("fade-out");
    }, 500);
  });
  i++;
  i %= names.length;
}

change();
setInterval(change, 2500); // change text every 2 seconds