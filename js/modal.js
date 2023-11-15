document.addEventListener("DOMContentLoaded", function() {
    const childElements = document.querySelectorAll('.child');
    console.log(childElements);
    // Add click event listeners to each child element
    childElements.forEach(child => {
        child.addEventListener('click', () => {
            const modalId = child.getAttribute('data-modal-target');
            openModal(modalId);
        });
    });

    // Function to open the modal
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'block';
            playModalSound(); // Play the sound
        }
    }

    // Function to close the modal
    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'none';
        }
    }

    // Function to play the sound
    function playModalSound() {
        const modalSound = document.getElementById('modalSound');
        if (modalSound) {
            modalSound.play();
        }
    }

    // Add click event listeners to close buttons
    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal-id');
            closeModal(modalId);
        });
    });
});