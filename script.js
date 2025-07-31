  let x = document.getElementById('menu-icon')
  let Menu = document.querySelector(".menu-bar")

 x.onclick = ()=>
{
    x.classList.toggle('bx-x');
    Menu.classList.toggle('active');

}