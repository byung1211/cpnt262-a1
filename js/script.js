/**
* Description: CPNT262 Assignment 1
* Author: Byung Uk An
* Date: 2021.10.16
*/

'use strict';

// 1. Created an EventHandler for the Hamburger menu.
 const showMenu = function() {
  document.querySelector("#menu").classList.toggle("show");
  document.querySelector("#menu-open-icon").classList.toggle("hide");
  document.querySelector("#menu-close-icon").classList.toggle("show");
}

// 2. Registered the EventHandler by adding the EventListener.
document.querySelector("#menu-btn").addEventListener("click", showMenu);