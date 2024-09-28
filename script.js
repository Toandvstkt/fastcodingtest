
document.getElementById('scrollDown').onclick = function () {
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
};


const scrollTopButton = document.getElementById('scrollTop');
window.onscroll = function () {
    if (window.pageYOffset > 300) {
        scrollTopButton.style.display = "block";
    } else {
        scrollTopButton.style.display = "none";
    }
};

scrollTopButton.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
 
 