// script.js
function goToOrderingSite() {
    window.location.href = "https://www.goldbelly.com/primos-donuts";
  }

function goToAbout() {
    window.location.href = "about.html";
  }

  function goToMenu() {
    window.location.href = "menu.html";
  }
  
  function order() {
    document.getElementById("order-btn").removeEventListener("click", order);
    document.getElementById("order-link").removeEventListener("click", order);
    goToOrderingSite();
  }

  function about() {
    document.getElementById("about-link").removeEventListener("click", order);
    goToAbout();
  }

  function menu() {
    document.getElementById("menu-link").removeEventListener("click", order);
    goToMenu();
  }
  
  document.getElementById("order-btn").addEventListener("click", order);
  document.getElementById("order-link").addEventListener("click", order);
  document.getElementById("about-link").addEventListener("click", about);
  document.getElementById("menu-link").addEventListener("click", menu);
  
  



  