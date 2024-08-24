document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');
    const responseSection = document.getElementById('response-section');
    const mainContent = document.getElementById('main-content');

    function showResponseMessage(message) {
        responseSection.innerHTML = `<div class="response-message">${message}</div>`;
    }

    function hideButtons() {
        yesButton.style.display = 'none';
        noButton.style.display = 'none';
    }

    function moveNoButton() {
        const rect = mainContent.getBoundingClientRect();
        const noButtonRect = noButton.getBoundingClientRect();
        const x = Math.random() * (rect.width - noButtonRect.width - 20);
        const y = Math.random() * (rect.height - noButtonRect.height - 20);
        noButton.style.transform = `translate(${x}px, ${y}px)`;
        noButton.classList.add('move-animation');
    }

    yesButton.addEventListener('click', () => {
        window.location.href = 'yes.html'; // Redirect to the new HTML page
    });

    noButton.addEventListener('click', () => {
        moveNoButton();
    });
});
