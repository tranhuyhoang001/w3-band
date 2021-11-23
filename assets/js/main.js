// Begin: Open/close mobile menu
const header = document.getElementById('header');
const mobileMenu = document.getElementById('mobile-menu');
const headerHeight = header.clientHeight;

mobileMenu.onclick = function () {
    const isClose = header.clientHeight === headerHeight;
    if (isClose) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}
// End: Open/close mobile menu

// Begin: Auto close menu
const menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (let i = 0; i < menuItems.length; i++) {
    const menuItem = menuItems[i];
    
    
    menuItem.onclick = function (event) {
        const isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (isParentMenu) {
            event.preventDefault();
            // Begin: Open/close subnav
            const subNav = this.nextElementSibling;
            const subNavIsClose = subNav.style.display === 'none';

            if (subNavIsClose) {
                subNav.style.display = 'block';
            } else {
                subNav.style.display = 'none';
            }
            // End: Open//close subnav
        } else {
            header.style.height = null;
        }
    }  
}
// End: Auto close menu