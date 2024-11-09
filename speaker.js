document.addEventListener('DOMContentLoaded', () => {
    // Select the carousel elements
    const speakersSlider = document.querySelector('.speakers-slider');
    const leftButton = document.querySelector('.carousel-control.left');
    const rightButton = document.querySelector('.carousel-control.right');
    
    // Ensure that speaker cards are loaded
    const speakerCards = Array.from(document.querySelectorAll('.speaker-card'));

    // Check if there are speaker cards
    if (speakerCards.length === 0) {
        console.error("No speaker cards found.");
        return;
    }

    // Get the width of each card (including margin)
    const cardWidth = speakerCards[0].offsetWidth + 16;  // Adjust based on your margin

    // Carousel control logic
    leftButton.addEventListener('click', () => {
        // Scroll to the left (previous)
        speakersSlider.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    });

    rightButton.addEventListener('click', () => {
        // Scroll to the right (next)
        speakersSlider.scrollBy({ left: cardWidth, behavior: 'smooth' });
    });
});


// JavaScript function to display speaker details
function showSpeakerDetails(element) {
    // Get the selected speaker details from data attributes
    const name = element.getAttribute("data-name");
    const title = element.getAttribute("data-title");
    const company = element.getAttribute("data-company");
    const description = element.getAttribute("data-description");
    const imageSrc = element.querySelector("img").src;

    // Update the display section with the selected speaker's details
    document.getElementById("selectedSpeakerName").textContent = name;
    document.getElementById("selectedSpeakerTitle").textContent = title;
    document.getElementById("selectedSpeakerCompany").textContent = company;
    document.getElementById("selectedSpeakerDescription").textContent = description;
    document.getElementById("selectedSpeakerImage").src = imageSrc;

    // Show the selected speaker section if hidden
    document.getElementById("selectedSpeaker").hidden = false;
}

// Add event listeners to all speaker cards
document.querySelectorAll(".speaker-card").forEach(card => {
    card.addEventListener("click", function() {
        showSpeakerDetails(card);
    });
});

// Function to close the speaker details modal
function closeCard() {
    document.getElementById("selectedSpeaker").hidden = true;
}



