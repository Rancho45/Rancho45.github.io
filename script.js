document.getElementById('clickMe').addEventListener('click', function() {
    document.getElementById('clickMe').style.display = 'none';
    document.getElementById('userInput').classList.remove('hidden');
});

document.getElementById('nameInput').addEventListener('input', function() {
    const nameInput = document.getElementById('nameInput').value.trim();
    document.getElementById('startButton').classList.toggle('hidden', nameInput.length === 0);
});

document.getElementById('startButton').addEventListener('click', function() {
    const nameInput = document.getElementById('nameInput').value.trim().toLowerCase();
    const correctName = "kpt"; // Correct name

    // Check if the entered name matches or has the same length
    if (nameInput === correctName || (nameInput.length === correctName.length && nameInput.includes('p'))) {
        // Blast emojis
        triggerEmojiBlast();

        // Show the message after blast
        setTimeout(() => {
            document.getElementById('userInput').style.display = 'none'; // Hide input
            triggerAnimations(); // Start animations
        }, 3000); // Time before triggering animations
    } else {
        alert("Please enter the correct code!");
    }
});

function triggerEmojiBlast() {
    const emojiBlast = document.getElementById('emojiBlast');
    emojiBlast.style.display = 'block'; // Show emoji blast
    emojiBlast.innerHTML = '❤️🌹❤️🌹❤️🌹❤️🌹❤️🌹❤️🌹❤️🌹❤️🌹'; // Emojis for blast
    emojiBlast.style.animation = 'blast 0s forwards'; // Trigger blast animation

    setTimeout(() => {
        emojiBlast.style.display = 'none'; // Hide after blast
    }, 1000); // Duration of blast
}

function triggerAnimations() {
    createHeartRain(); // Start heart rain immediately
    document.body.classList.add('transition'); // Start background transition
    // Display first text
    displayText("for the best person I have ever met.", 2000, () => {
        // Show next text
        displayText("My pyaarisi chotusi bachhi🥹🥹🥹", 3000, () => {
            displayText("Love you, my cutiebeautypie krishu🫂😘", 3000, () => {
                showFinalButton();
            });
        });
    });
}

function displayText(text, duration, callback) {
    const textContainer = document.getElementById('textContainer');
    const displayTextElement = document.getElementById('displayText');

    displayTextElement.textContent = text;
    textContainer.classList.remove('hidden');
    displayTextElement.style.animation = 'fadeIn 1s forwards';

    setTimeout(() => {
        displayTextElement.style.animation = 'fadeOut 1s forwards';
        setTimeout(() => {
            displayTextElement.textContent = '';
            displayTextElement.style.animation = ''; // Reset animation
            callback();
        }, 1000);
    }, duration);
}

function createHeartRain() {
    const heartRainContainer = document.querySelector('.heartRain');
    heartRainContainer.innerHTML = ''; // Clear previous hearts
    for (let i = 0; i < 20; i++) { // Number of hearts
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = '❤️'; // Heart emoji
        heart.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
        heart.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random fall duration
        heartRainContainer.appendChild(heart);
    }
}

finalButton.addEventListener('click', function() {
    const videoId = 'ROFF9FaSieE';
    // Attempt to open the YouTube app directly
    window.location.href = `vnd.youtube:${videoId}`;
    
    // Fallback to the web link after a small timeout
    setTimeout(function() {
        window.location.href = 'https://youtube.com/shorts/ROFF9FaSieE?si=I4g9N4a8kabt57FU';
    }, 2500); // Adjust the timeout if necessary
});
