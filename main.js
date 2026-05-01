"use strict";
// Compiled JS from main.ts
const greeting = "Hello World";
function initializeGreeting() {
    const titleElement = document.getElementById('main-title');
    if (titleElement) {
        titleElement.textContent = greeting;
        console.log(`[FRONTEND] ${greeting} initialized.`);
    }
}
document.addEventListener('DOMContentLoaded', initializeGreeting);
