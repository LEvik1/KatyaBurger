
    
let doc1 = document;

let burger_menu = doc1.querySelector('.burger-menu')
let aside = doc1.querySelector('.not_active')
let burger1 = doc1.querySelector('.burger1')
let burger2 = doc1.querySelector('.burger2')
let burger3 = doc1.querySelector('.burger3')
burger_menu.addEventListener('click', function () {
  aside.classList.toggle('active')
  burger1.classList.toggle("rotate");
  burger2.classList.toggle("hide");
  burger3.classList.toggle("rotate2");
});
console.log('hello');


