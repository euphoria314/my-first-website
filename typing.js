class TypingEffect {
    constructor(elementSelector, text, speed = 100, delay = 500) {
        this.element = document.querySelector(elementSelector);
        this.text = text;
        this.speed = speed;
        this.delay = delay;
        this.index = 0;
        this.isDeleting = false;
        this.isWaiting = false;

        // Start after a delay
        setTimeout(() => this.type(), this.delay);
    }

    type() {
        if (!this.isWaiting) {
            if (this.index < this.text.length) {
                // Typing forward
                this.element.textContent += this.text.charAt(this.index);
                this.index++;
                setTimeout(() => this.type(), this.speed);
            } else {
                // Text is fully typed, pause before repeating
                this.isWaiting = true;
                setTimeout(() => {
                    this.element.textContent = '';
                    this.index = 0;
                    this.isWaiting = false;
                    this.type();
                }, 2000); // Pause for 2 seconds before restarting
            }
        }
    }
}

// Initialize typing effect when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new TypingEffect('.typing-text', 'Full Stack Developer', 80, 500);
});