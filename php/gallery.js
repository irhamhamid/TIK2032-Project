document.addEventListener("DOMContentLoaded", function () {
    const galleryTitle = document.querySelector('h2');
    const letters = galleryTitle.textContent.split("");
    galleryTitle.textContent = "";

    letters.forEach((letter, idx) => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.style.opacity = 0; 

        galleryTitle.append(span);

        setTimeout(() => {
            span.style.opacity = 1;
        }, 1000 + idx * 100); 
    });
});
