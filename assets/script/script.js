const toggleMenu = document.querySelector('.toggle-menu');
const sidebarContent = document.querySelector('.sidebar-content');
const sectionContainer=document.querySelectorAll('section');
const navLinksContainer=document.querySelectorAll('aside nav a');
const copyImg = document.querySelector('img[src="./assets/image/icon/copy.png"]');
const spanElements = document.querySelectorAll('.content .list-style .code-snippet span');
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
function copyText(icon) {
  const codeSpans = icon.parentNode.querySelectorAll('span');
  let text = '';
  codeSpans.forEach(span => {
    text += span.textContent + '\n';
  });
  navigator.clipboard.writeText(text).then(() => {
    const toast = document.querySelector('.toast');
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  });
}