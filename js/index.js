const closeIcon = document.querySelector('.close-icon');
const sidebar = document.querySelector('.sidebar');
const hamburger = document.querySelector('.hamburger');

closeIcon.addEventListener('click', () => {
  sidebar.classList.remove('open')
  document.body.style.overflow = 'auto'
});

hamburger.addEventListener('click', () => {
  sidebar.classList.add('open')
  document.body.style.overflow = 'hidden'
})

document.addEventListener('click', (event) => {
  const isSidebarOpen = sidebar.classList.contains('open');
  const isClickedInsideSidebar = sidebar.contains(event.target);
  const isClickedInsideHamburger = hamburger.contains(event.target);

  if (isSidebarOpen && !isClickedInsideSidebar && !isClickedInsideHamburger) {
    closeSidebar();
  }
});


function closeSidebar() {
  sidebar.classList.remove('open');
}
