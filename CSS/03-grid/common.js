const menuToggleButton = document.getElementById('toggle-button')
const mobileNavCloseButton = document.getElementById('mobile-nav-close-button')
const backdrop = document.querySelector('.backdrop')
const mobileNav = document.querySelector('.mobile-nav')

console.log(menuToggleButton)
console.log(mobileNavCloseButton)
console.log(backdrop)

const openMobileNavMenu = () => {
  if (backdrop?.style.display !== 'block' && mobileNav?.style.display !== 'grid') {
    backdrop.style.display = 'block'
    mobileNav.style.display = 'grid'
  } else {
    backdrop.style.display = 'none'
    mobileNav.style.display = 'none'
  }
}

const closeMobileNavMenu = () => {
  backdrop.style.display = 'none'
  mobileNav.style.display = 'none'
}

menuToggleButton.addEventListener('click', openMobileNavMenu)

mobileNavCloseButton.addEventListener('click', closeMobileNavMenu)

backdrop.addEventListener('click', closeMobileNavMenu)
