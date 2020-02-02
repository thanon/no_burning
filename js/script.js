// Variables
const navElement = document.querySelectorAll('section')
const navList = document.getElementById('navbarlist')

// Navlist Iterations
navElement.forEach(element => {
  const navlistElement = `<li class='c_menu_style${element.className}'data-link=${element.id}><a href="#${element.id}">${element.dataset.nav}</li>`
  navList.insertAdjacentHTML('beforeend', navlistElement)
})

// Scroll to section on click by listenting to the click-event in navlist
navList.addEventListener('click', e => {
  e.preventDefault()
  const elementTarget = e.target.hasAttribute('data-link') 
  ? e.target : e.target.parentElement
  const scrolltoElement = document.getElementById(elementTarget.dataset.link)
  scrolltoElement.scrollIntoView({behavior: 'smooth', block: 'end'})
});

//Pass css class 'active'to Navbar and to section by using IntersectionObserver
const callback = entries => {
  entries.forEach(entry => {
    const navlistElement = document.querySelector(`.c_menu_style[data-link='${entry.target.id}']`,)
    const section = document.getElementById(entry.target.id)

    if (entry && entry.isIntersecting) {
      navlistElement.classList.add('active')
      section.classList.add('active')
    } else {
      if (navlistElement.classList.contains('active')) {
        navlistElement.classList.remove('active')
      }

      if (section.classList.contains('active')) {
        section.classList.remove('active')
      }
    }  
    })
}

// Options for the observer. 
const options = {
  threshold: 0.6
};

// Setting an observer with options and callback when checks
const observer = new IntersectionObserver(callback, options)
navElement.forEach(element => {
  observer.observe(document.getElementById(element.id))
})

