const navElement = document.querySelectorAll('section')
const navList = document.getElementById('navbarlist')

navElement.forEach(element => {
  const navlistElement = `<li class='c_menu_style${element.className}'data-link=${element.id}><a href="#${element.id}">${element.dataset.nav}</li>`
  navList.insertAdjacentHTML('beforeend', navlistElement)
})

navList.addEventListener('click', e => {
  e.preventDefault()
  const elementtarget = e.target.hasAttribute('data-link') 
  ? e.target : e.target.parentElement
  const scrolltoElement = document.getElementById(elementtarget.dataset.link)
  scrolltoElement.scrollIntoView({behavior: 'smooth', block: 'start'})
});

const callback = entries => {
  entries.forEach(entry => {
    const navlistElement = document.querySelector(`.c_menu_style[data-link='${entry.target.id}']`,)
    const section = document.getElementById(entry.target.id)

    if (entry && entry.isIntersecting) {
      navListElement.classList.add('active_li')
      section.classList.add('active_li')
    }
    // else if  (section.classList.contains('active_li') && navlistElement.classList.contains('active_li')){
    //   navListElement.classList.remove('active_li')
    // } 
    })
}


