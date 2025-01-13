// Page Navigation Buttons
const lightsButton = document.getElementById('lightsButton');
const decorateButton = document.getElementById('decorateButton');
const messageButton = document.getElementById('messageButton');
const timerButton = document.getElementById('timerButton');
const cakeButton = document.getElementById('cakeButton');
const finalButton = document.getElementById('finalButton');

const pages = document.querySelectorAll('.page');
let timer = 10;

// Set the first page as active initially
function initializePage() {
    pages[0].classList.add('active'); // Show page 1
}

// Navigate between pages
function navigate(pageNumber) {
    pages.forEach((page, index) => {
        page.classList.remove('active');
        if (index === pageNumber) {
            page.classList.add('active');
        }
    });
}

// Event Listeners for Buttons
lightsButton.addEventListener('click', () => navigate(1));
decorateButton.addEventListener('click', () => navigate(2));
messageButton.addEventListener('click', () => navigate(3));
timerButton.addEventListener('click', startTimer);
cakeButton.addEventListener('click', () => navigate(5));
finalButton.addEventListener('click', () => navigate(6));

// Timer functionality
function startTimer() {
    navigate(4);
    const timerElement = document.getElementById('timer');
    const countdown = setInterval(() => {
        timer--;
        timerElement.textContent = timer;
        if (timer <= 0) {
            clearInterval(countdown);
            navigate(5);
        }
    }, 1000);
}

// Initialize the first page
initializePage();