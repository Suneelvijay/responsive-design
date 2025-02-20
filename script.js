function toggleMenu() {
    console.log("toggleMenu function called");
    const navLinks = document.querySelector('.nav-links');
    console.log("navLinks element:", navLinks);
    if (navLinks.style.display === 'flex') {
        console.log("Menu is currently visible, hiding it now.");
        navLinks.style.display = 'none';
    } else {
        console.log("Menu is currently hidden, showing it now.");
        navLinks.style.display = 'flex';
    }
}
