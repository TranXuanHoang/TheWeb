const backdrop = document.querySelector('.backdrop')
const modal = document.querySelector('.modal')
const modalNoButton = document.querySelector('.modal__action--negative')
const selectPlanButtons = document.querySelectorAll('.plan button')
const toggleButton = document.querySelector('.toggle-button')
const mobileNav = document.querySelector('.mobile-nav')

for (let i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener('click', () => {
    // Method 1: use 'style.display'
    // modal.style.display = 'block'
    // backdrop.style.display = 'block'

    // Method 2: use 'classList.add'
    modal.classList.add('open')
    backdrop.classList.add('open')
  })
}

const closeModal = () => {
  // Method 1: use 'style.display'
  // modal?.style.display = 'none'
  // backdrop.style.display = 'none'

  // Method 2: use 'classList.remove'
  modal?.classList.remove('open')
  backdrop.classList.remove('open')
}

backdrop.addEventListener('click', () => {
  // Method 1: use 'style.display'
  // mobileNav.style.display = 'none'

  // Method 2: use 'classList.remove'
  mobileNav.classList.remove('open')

  closeModal()
})

modalNoButton?.addEventListener('click', closeModal)

toggleButton.addEventListener('click', () => {
  // Method 1: use 'style.display'
  // mobileNav.style.display = 'block'
  // backdrop.style.display = 'block'

  // Method 2: use 'classList.add'
  mobileNav.classList.add('open')
  backdrop.classList.add('open')
})