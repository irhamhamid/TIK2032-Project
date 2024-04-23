document.addEventListener("DOMContentLoaded", function () {
    const highlightText = document.getElementById("highlight-text");
    const letters = highlightText.textContent.split("");
    highlightText.textContent = "";

    letters.forEach((letter, idx) => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.style.opacity = 0; 

        if (letter.toLowerCase() === 'i' || letter.toLowerCase() === 'r' || letter.toLowerCase() === 'h' || letter.toLowerCase() === 'a' || letter.toLowerCase() === 'm') {
            span.style.color = '#ff9100';
        }

        highlightText.append(span);

        setTimeout(() => {
            span.style.opacity = 1;
        }, 500 + idx * 150); 
    });
});
