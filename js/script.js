/**
* Description: CPNT262 Assignment 1
* Author: Byung Uk An
* Date: 2021.10.16
*/


// 1. Created an EventHandler for the Hamburger menu.
 function showMenu() {
  const navbar = document.getElementById("menu");
  navbar.classList.toggle("show");
}

// 2. Registered the EventHandler by adding the EventListener.
document.querySelector("#menu-btn").addEventListener("click", showMenu);