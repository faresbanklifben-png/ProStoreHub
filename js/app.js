// js/app.js

// Application Initialization
const app = {
    name: 'ProStoreHub',
    version: '1.0.0',
    start() {
        console.log(`${this.name} (v${this.version}) is starting...`);
        this.setupEventListeners();
    },
    setupEventListeners() {
        document.getElementById('submitBtn').addEventListener('click', this.handleSubmit);
    },
    handleSubmit() {
        const inputValue = document.getElementById('inputField').value;
        console.log(`User submitted: ${inputValue}`);
        // Here you can add further logic like sending the input to a server or processing it
    }
};

// Start the application
document.addEventListener('DOMContentLoaded', () => app.start());