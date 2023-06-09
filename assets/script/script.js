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
function copyText(index) {
  const codeSnippets = document.getElementsByClassName('code-snippet');
  const currentSnippet = codeSnippets[index];
  const spanTexts = currentSnippet.querySelectorAll('span');
  let copiedText = '';

  spanTexts.forEach(function(spanText) {
    copiedText += spanText.textContent + '\n';
  });

  navigator.clipboard.writeText(copiedText).then(function() {
    const toast = currentSnippet.querySelector('.toast');
    toast.classList.add('show');

    setTimeout(function() {
      toast.classList.remove('show');
    }, 2000);
  });
}
