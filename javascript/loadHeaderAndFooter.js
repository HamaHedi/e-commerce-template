function loadHeaderAndFooter() {
    // Load header
    const headerPlaceholder = document.getElementById('header-placeholder');
    const headerRequest = new XMLHttpRequest();
    headerRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            headerPlaceholder.innerHTML = this.responseText;
        }
    };
    headerRequest.open('GET', 'header.html', true);
    headerRequest.send();

    // Load footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    const footerRequest = new XMLHttpRequest();
    footerRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            footerPlaceholder.innerHTML = this.responseText;
        }
    };
    footerRequest.open('GET', 'footer.html', true);
    footerRequest.send();
}

// Call the function to load header and footer
loadHeaderAndFooter();