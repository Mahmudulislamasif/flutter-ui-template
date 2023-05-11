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
copyImg.addEventListener('click', () => {
    // Create a new textarea element to hold the text content
    const textarea = document.createElement('textarea');
    textarea.style.position = 'fixed';
    textarea.style.opacity = 0;
  
    // Add the text content of each span element to the textarea
    let text = '';
    spanElements.forEach(span => {
      text += span.textContent + '\n';
    });
    textarea.value = text.trim();
  
    // Append the textarea to the document
    document.body.appendChild(textarea);
  
    // Select the text content of the textarea
    textarea.select();
  
    // Copy the selected text to the clipboard
    document.execCommand('copy');
  
    // Remove the textarea from the document
    document.body.removeChild(textarea);
  });