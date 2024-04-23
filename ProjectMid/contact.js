document.addEventListener('DOMContentLoaded', function() {
    var contactInfo = document.querySelectorAll('.contact-info p');

    function handleScrollAnimation() {
        contactInfo.forEach(function(element) {
            if (isElementInViewport(element)) {
                element.classList.add('show');
            }
        });
    }

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    handleScrollAnimation();

    window.addEventListener('scroll', function() {
        handleScrollAnimation();
    });
});


function handleBlurAnimation(input) {
    input.addEventListener('blur', function() {
        this.style.animation = 'none';
        this.offsetHeight; 
        this.style.animation = null;
    });
}

document.addEventListener('DOMContentLoaded', function() {
    var inputs = document.querySelectorAll('input, textarea');

    inputs.forEach(function(input) {
        input.addEventListener('focus', function() {
            this.style.animation = 'inputFocus 0.3s ease-in-out forwards';
            handleBlurAnimation(this); 
        });
    });
});

