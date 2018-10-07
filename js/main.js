(function () {
  const navParent = document.querySelector('ul');
  const navItems = navParent.querySelectorAll('li a');

  let open = false;
  const contactBar = document.getElementById('contact-bar');
  const contactNavItem = navParent.querySelector("[href='#contact']");

  navParent.addEventListener('click', setActiveColor);
  contactNavItem.addEventListener('click', showHideContactBar);

  function setActiveColor (e) {
    for (const navItem of navItems) {
      navItem.classList.remove('active');
    }

    e.target.classList.add('active');
    e.stopPropagation();
  }

  function showHideContactBar () {
    if (!open) {
      openNav();
    } else {
      closeNav();
    }
  }

  function openNav () {
    open = true;
    contactBar.classList.remove('hide-contact-bar');
    contactBar.classList.add('show-contact-bar');
  }

  function closeNav () {
    open = false;
    contactBar.classList.remove('show-contact-bar');
    contactBar.classList.add('hide-contact-bar');
  }
})();
