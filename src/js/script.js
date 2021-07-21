const tabs = document.getElementById('tabs'),
 contents = document.querySelectorAll('.content');

const changeClass = el => {
 for (let i = 0; i < tabs.children.length; i++) {
  tabs.children[i].classList.remove('active');
 }
 el.classList.add('active');
}

tabs.addEventListener('mouseover', e => {
 const currTab = e.target.dataset.btn;
 changeClass(e.target);
 for (let i = 0; i < contents.length; i++) {
  contents[i].classList.remove('active');
  if (contents[i].dataset.content === currTab) {
   contents[i].classList.add('active');
  }
 }
})
