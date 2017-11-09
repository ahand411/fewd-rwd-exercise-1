(function () {
  const navParent = document.querySelector('ul')
  const navItems = document.querySelectorAll('li a')

  let open = false
  const contactBar = document.getElementById('contact-bar')
  const contactNavItem = document.querySelector("nav [href='#contact']")

  navParent.addEventListener('click', setActiveColor, false)
  contactNavItem.addEventListener('click', showHideContactBar, false)

  function setActiveColor (e) {
    if (e.target !== e.currentTarget) {
      for (let i = 0; i < navItems.length; i++) {
        navItems[i].classList.remove('active')
      }

      e.target.classList.add('active')
    }

    e.stopPropagation()
  }

  function showHideContactBar () {
    if (!open) {
      openNav()
    } else {
      closeNav()
    }
  }

  function openNav () {
    open = true
    contactBar.classList.remove('hide-contact-bar')
    contactBar.classList.add('show-contact-bar')
  }

  function closeNav () {
    open = false
    contactBar.classList.remove('show-contact-bar')
    contactBar.classList.add('hide-contact-bar')
  }
})()
