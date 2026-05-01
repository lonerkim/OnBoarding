// TypeScript implementation for the Premium Frontend
const greeting: string = "Hello World";

function initializeGreeting(): void {
    const titleElement = document.getElementById('main-title');
    if (titleElement) {
        titleElement.textContent = greeting;
        console.log(`[FRONTEND] ${greeting} initialized.`);
    }
}

document.addEventListener('DOMContentLoaded', initializeGreeting);
