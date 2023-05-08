const toggleMenu = document.querySelector('.toggle-menu');
const sidebarContent = document.querySelector('.sidebar-content');
const sectionContainer=document.querySelectorAll('section');
const navLinksContainer=document.querySelectorAll('aside nav a')
toggleMenu.addEventListener('click', () => {
    toggleMenu.classList.toggle('is-active');
    sidebarContent.classList.toggle('is-active');
});
window.onscroll=()=>{
sectionContainer.forEach(sec=>{
  let top=window.scrollY;
  let offset=sec.offsetTop-150;
  let height=sec.offsetHeight;
  let id=sec.getAttribute('id');
  if(top>=offset && top <offset+height)
  {
      navLinksContainer.forEach(links=>{
          links.classList.remove('is-active');
          document.querySelector('aside nav a[href*=' + id +']').classList.add('is-active');
      })
  }
})
}