// Script Menu Burger (JQuery)
$('.menu-burger, .menu-items').on('click', function() {
  $('.menu-bg, .menu-items, .menu-burger').toggleClass('fs');
  $('.menu-burger').text() == "☰" ? $('.menu-burger').text('✕') : $('.menu-burger').text('☰');
});

// Script Searchbar (Js)
const body = document.querySelector('body');
const searchBtn = document.querySelector('#search');
const searchInput = document.querySelector('#search-input');
let active = false;

body.addEventListener('click', (e) => {
  if(e.target.id === 'search' || e.target.id === 'search-input' || e.target.id === 'search-icon') {
    if(!active) {
      searchBtn.classList.add('active');
      searchInput.classList.add('active');
      active = true;
    }
  } else {
      searchBtn.classList.remove('active');
      searchInput.classList.remove('active');
      searchInput.value = '';
      active = false;
  }
});

// mouseover/mouseleave effects on nav-grid
// tre pezzi di codice per tre elementi --> ridurre a un solo pezzo, se possibile

/* * * * * */

// item-c: studiare

let on_mouse_over = document.getElementsByClassName("over_effect")[0];
let background_effect = document.getElementsByClassName("background")[0];
let color_filter = document.getElementsByClassName("overlay")[0];

on_mouse_over.addEventListener("mouseover", over);
on_mouse_over.addEventListener("mouseover", (e) => {
  console.log(e.target)
  
  on_mouse_over.style.transform = "translate(0px, -3px)";
  on_mouse_over.style.boxShadow = "5px 5px 3px gray";
  on_mouse_over.style.transition = "1s";
  background_effect.classList.add("no-background-effects");
  background_effect.style.transition = "1s";
  color_filter.classList.add("no-background-color");
  color_filter.style.transition = "1s";
});



function over() {
  on_mouse_over.style.transform = "translate(0px, -3px)";
  on_mouse_over.style.boxShadow = "5px 5px 3px gray";
  on_mouse_over.style.transition = "1s";
  background_effect.classList.add("no-background-effects");
  background_effect.style.transition = "1s";
  color_filter.classList.add("no-background-color");
  color_filter.style.transition = "1s";
  }

on_mouse_over.addEventListener("mouseleave", leave);

function leave() {
  on_mouse_over.style.transform = "translate(0px, 0px)";
  on_mouse_over.style.boxShadow = "none";
  background_effect.classList.remove("no-background-effects");
  color_filter.classList.remove("no-background-color");
}
// item-d: mangiare

let on_mouse_over_a = document.getElementsByClassName("over_effect")[1];
let background_effect_a = document.getElementsByClassName("background")[1];
let color_filter_a = document.getElementsByClassName("overlay")[1];

on_mouse_over_a.addEventListener("mouseover", over_a);

function over_a() {
  on_mouse_over_a.style.transform = "translate(0px, -3px)";
  on_mouse_over_a.style.boxShadow = "5px 5px 3px gray";
  on_mouse_over_a.style.transition = "1s";
  background_effect_a.classList.add("no-background-effects");
  background_effect_a.style.transition = "1s";
  color_filter_a.classList.add("no-background-color");
  color_filter_a.style.transition = "1s";
  }

on_mouse_over_a.addEventListener("mouseleave", leave_a);

function leave_a() {
  on_mouse_over_a.style.transform = "translate(0px, 0px)";
  on_mouse_over_a.style.boxShadow = "none";
  background_effect_a.classList.remove("no-background-effects");
  color_filter_a.classList.remove("no-background-color");
}

// item-e: svagarsi

let on_mouse_over_b = document.getElementsByClassName("over_effect")[2];
let background_effect_b = document.getElementsByClassName("background")[2];
let color_filter_b = document.getElementsByClassName("overlay")[2];

on_mouse_over_b.addEventListener("mouseover", over_b);

function over_b() {
  on_mouse_over_b.style.transform = "translate(0px, -3px)";
  on_mouse_over_b.style.boxShadow = "5px 5px 3px gray";
  on_mouse_over_b.style.transition = "1s";
  background_effect_b.classList.add("no-background-effects");
  background_effect_b.style.transition = "1s";
  color_filter_b.classList.add("no-background-color");
  color_filter_b.style.transition = "1s";
  }

on_mouse_over_b.addEventListener("mouseleave", leave_b);

function leave_b() {
  on_mouse_over_b.style.transform = "translate(0px, 0px)";
  on_mouse_over_b.style.boxShadow = "none";
  background_effect_b.classList.remove("no-background-effects");
  color_filter_b.classList.remove("no-background-color");
}


