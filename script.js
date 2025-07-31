  let click = document.querySelector('.bx-menu')
  let Menu = document.querySelector(".menu-bar")

  click.addEventListener(onclick=()=>{
    click.classList.toggle('bx-x');
    Menu.classList.toggle('active')
  })