var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    autoplay: {
        delay:2000,
        disableOnInteraction: false
    },
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    }
  });

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    
    if(top >= offset && top < offset+height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });

   let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    
}; 


// countdown-timer

var countDownDate = new Date("April 24, 2023 09:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("days").innerHTML = days
  document.getElementById("hours").innerHTML = hours
  document.getElementById("minutes").innerHTML = minutes
  document.getElementById("seconds").innerHTML = seconds
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "0"
    document.getElementById("hours").innerHTML = "0"
    document.getElementById("minutes").innerHTML = "0"
    document.getElementById("seconds").innerHTML = "0"
  }
}, 1000);



// Owlcarousel
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	loop:true,
    margin:10,
    nav:true,
	autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    center: true,
    navText: [
	    "<i class='fa fa-angle-left'></i>",
	    "<i class='fa fa-angle-right'></i>"
	],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
  });
});




// ----------------- Start Tech Model 1 --------------------------------

// Get the modal
const modal1 = document.querySelector("#mmyModal1");

// Get the button that opens the modal
const btn1 = document.querySelectorAll(".tbtn1");

// Get the <span> element that closes the modal
const closeModal1 = document.getElementsByClassName("close1")[0];

for (let i = 0; i < btn1.length; i++) {
  btn1[i].addEventListener("click", function () {
    modal1.style.display = "block";
  });
}

// When the user clicks the button, open the modal
btn1.onclick = function () {
  modal1.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
closeModal1.onclick = function () {
  modal1.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
};
// ----------------- End Tech Model 1 --------------------------------





// ----------------- Start Tech Model 2 --------------------------------

// Get the modal
const modal2 = document.querySelector("#mmyModal2");

// Get the button that opens the modal
const btn2 = document.querySelectorAll(".tbtn2");

// Get the <span> element that closes the modal
const closeModal2 = document.getElementsByClassName("close2")[0];

for (let i = 0; i < btn2.length; i++) {
  btn2[i].addEventListener("click", function () {
    modal2.style.display = "block";
  });
}

// When the user clicks the button, open the modal
btn2.onclick = function () {
  modal2.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
closeModal2.onclick = function () {
  modal2.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};
// ----------------- End Tech Model 2 --------------------------------


// ----------------- Start Tech Model 3 --------------------------------

// Get the modal
const modal3 = document.querySelector("#mmyModal3");

// Get the button that opens the modal
const btn3 = document.querySelectorAll(".tbtn3");

// Get the <span> element that closes the modal
const closeModal3 = document.getElementsByClassName("close3")[0];

for (let i = 0; i < btn3.length; i++) {
  btn3[i].addEventListener("click", function () {
    modal3.style.display = "block";
  });
}

// When the user clicks the button, open the modal
btn3.onclick = function () {
  modal3.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
closeModal3.onclick = function () {
  modal3.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
};
// ----------------- End Tech Model 3 --------------------------------


// ----------------- Start Tech Model 4 --------------------------------

// Get the modal
const modal4 = document.querySelector("#mmyModal4");

// Get the button that opens the modal
const btn4 = document.querySelectorAll(".tbtn4");

// Get the <span> element that closes the modal
const closeModal4 = document.getElementsByClassName("close4")[0];

for (let i = 0; i < btn4.length; i++) {
  btn4[i].addEventListener("click", function () {
    modal4.style.display = "block";
  });
}

// When the user clicks the button, open the modal
btn4.onclick = function () {
  modal4.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
closeModal4.onclick = function () {
  modal4.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
};
// ----------------- End Tech Model 4 --------------------------------





// ----------------- Start Tech Model 5 --------------------------------

// Get the modal
const modal5 = document.querySelector("#mmyModal5");

// Get the button that opens the modal
const btn5 = document.querySelectorAll(".tbtn5");

// Get the <span> element that closes the modal
const closeModal5 = document.getElementsByClassName("close5")[0];

for (let i = 0; i < btn5.length; i++) {
  btn5[i].addEventListener("click", function () {
    modal5.style.display = "block";
  });
}

// When the user clicks the button, open the modal
btn5.onclick = function () {
  modal5.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
closeModal5.onclick = function () {
  modal5.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
};
// ----------------- End Tech Model 5 --------------------------------


// ----------------- Start Tech Model 6 --------------------------------

// Get the modal
const modal6 = document.querySelector("#mmyModal6");

// Get the button that opens the modal
const btn6 = document.querySelectorAll(".tbtn6");

// Get the <span> element that closes the modal
const closeModal6 = document.getElementsByClassName("close6")[0];

for (let i = 0; i < btn6.length; i++) {
  btn6[i].addEventListener("click", function () {
    modal6.style.display = "block";
  });
}

// When the user clicks the button, open the modal
btn6.onclick = function () {
  modal6.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
closeModal6.onclick = function () {
  modal6.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal6) {
    modal6.style.display = "none";
  }
};
// ----------------- End Tech Model 6 --------------------------------




// ----------------- Start Tech Model 7 --------------------------------

// Get the modal
const modal7 = document.querySelector("#mmyModal7");

// Get the button that opens the modal
const btn7 = document.querySelectorAll(".nbtn7");

// Get the <span> element that closes the modal
const closeModal7 = document.getElementsByClassName("close7")[0];

// When the user clicks the button, open the modal
btn7.onclick = function () {
  modal7.style.display = "block";
};

for (let i = 0; i < btn7.length; i++) {
  btn7[i].addEventListener("click", function () {
    modal7.style.display = "block";
  });
}

// When the user clicks on <span> (x), close the modal
closeModal7.onclick = function () {
  modal7.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal7) {
    modal7.style.display = "none";
  }
};
// ----------------- End Tech Model 7 --------------------------------


// ----------------- Start Tech Model 8 --------------------------------

// Get the modal
const modal8 = document.querySelector("#mmyModal8");

// Get the button that opens the modal
const btn8 = document.querySelectorAll(".nbtn8");

// Get the <span> element that closes the modal
const closeModal8 = document.getElementsByClassName("close8")[0];

// When the user clicks the button, open the modal
btn8.onclick = function () {
  modal8.style.display = "block";
};

for (let i = 0; i < btn8.length; i++) {
  btn8[i].addEventListener("click", function () {
    modal8.style.display = "block";
  });
}

// When the user clicks on <span> (x), close the modal
closeModal8.onclick = function () {
  modal8.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal8) {
    modal8.style.display = "none";
  }
};
// ----------------- End Tech Model 8 --------------------------------



// ----------------- Start Tech Model 9 --------------------------------

// Get the modal
const modal9 = document.querySelector("#mmyModal9");

// Get the button that opens the modal
const btn9 = document.querySelectorAll(".nbtn9");

// Get the <span> element that closes the modal
const closeModal9 = document.getElementsByClassName("close9")[0];

// When the user clicks the button, open the modal
btn9.onclick = function () {
  modal9.style.display = "block";
};

for (let i = 0; i < btn9.length; i++) {
  btn9[i].addEventListener("click", function () {
    modal9.style.display = "block";
  });
}

// When the user clicks on <span> (x), close the modal
closeModal9.onclick = function () {
  modal9.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal9) {
    modal9.style.display = "none";
  }
};
// ----------------- End Tech Model 9 --------------------------------



// ----------------- Start Tech Model 10 --------------------------------

// Get the modal
const modal10 = document.querySelector("#mmyModal10");

// Get the button that opens the modal
const btn10 = document.querySelectorAll(".nbtn10");

// Get the <span> element that closes the modal
const closeModal10 = document.getElementsByClassName("close10")[0];

// When the user clicks the button, open the modal
btn10.onclick = function () {
  modal10.style.display = "block";
};

for (let i = 0; i < btn10.length; i++) {
  btn10[i].addEventListener("click", function () {
    modal10.style.display = "block";
  });
}

// When the user clicks on <span> (x), close the modal
closeModal10.onclick = function () {
  modal10.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal10) {
    modal10.style.display = "none";
  }
};
// ----------------- End Tech Model 10 --------------------------------





// ----------------- Start Tech Model 11 --------------------------------

// Get the modal
const modal11 = document.querySelector("#mmyModal11");

// Get the button that opens the modal
const btn11 = document.querySelectorAll(".nbtn11");

// Get the <span> element that closes the modal
const closeModal11 = document.getElementsByClassName("close11")[0];

// When the user clicks the button, open the modal
btn11.onclick = function () {
  modal11.style.display = "block";
};

for (let i = 0; i < btn11.length; i++) {
  btn11[i].addEventListener("click", function () {
    modal11.style.display = "block";
  });
}

// When the user clicks on <span> (x), close the modal
closeModal11.onclick = function () {
  modal11.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal11) {
    modal11.style.display = "none";
  }
};
// ----------------- End Tech Model 11 --------------------------------





// ----------------- Start Tech Model 12 --------------------------------

// Get the modal
const modal12 = document.querySelector("#mmyModal12");

// Get the button that opens the modal
const btn12 = document.querySelectorAll(".nbtn12");

// Get the <span> element that closes the modal
const closeModal12 = document.getElementsByClassName("close12")[0];

// When the user clicks the button, open the modal
btn12.onclick = function () {
  modal12.style.display = "block";
};

for (let i = 0; i < btn12.length; i++) {
  btn12[i].addEventListener("click", function () {
    modal12.style.display = "block";
  });
}

// When the user clicks on <span> (x), close the modal
closeModal12.onclick = function () {
  modal12.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal12) {
    modal12.style.display = "none";
  }
};
// ----------------- End Tech Model 7 --------------------------------



