function mobileMenu() {
  const menu = document.querySelector('.main-menu');
  const menuWrapper = menu.nextElementSibling;
  const firstMenuItem = menuWrapper.querySelector('ul li a');
  const closeMenu = document.querySelector('.close-menu');

  menu &&
    menu.addEventListener('click', () => {
      menuWrapper?.classList.toggle('hidden');

      if (!menuWrapper.classList.contains('hidden')) {
        menu.setAttribute('aria-expanded', true);
        // do something here if the class exists
      }
    });

  closeMenu &&
    closeMenu.addEventListener('click', () => {
      menuWrapper?.classList.toggle('hidden');

      if (menuWrapper.classList.contains('hidden')) {
        menu.setAttribute('aria-expanded', false);
        // do something here if the class exists
      }
      menu && menu.focus();
    });

  var KEYCODE_TAB = 9;

  closeMenu.addEventListener('keydown', function (e) {
    if (e.key === 'Tab' || e.keyCode === KEYCODE_TAB) {
      if (e.shiftKey) {
        firstMenuItem.focus();
        e.preventDefault();
      } /* tab */ else {
        firstMenuItem.focus();
        e.preventDefault();
      }
    }
  });

  firstMenuItem.addEventListener('keydown', function (e) {
    if (e.key === 'Tab' || e.keyCode === KEYCODE_TAB) {
      if (e.shiftKey) {
        closeMenu.focus();
        e.preventDefault();
      }
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key == 'Escape') {
      if (!menuWrapper.classList.contains('hidden')) {
        menuWrapper?.classList.toggle('hidden');
        menu.setAttribute('aria-expanded', false);
        // do something here if the class exists
      }
    }
  });
}

mobileMenu();

// as we're using View transitions we this to make sure the nav js runs after the first page load
document.addEventListener('astro:after-swap', mobileMenu);
