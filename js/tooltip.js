document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".nav-link");
    console.log(elements)
    const tooltip = document.getElementById("tooltip-text");

    elements.forEach((element) => {
        element.addEventListener("mouseover", () => {
            // Get the text or content for the tooltip from the element's data attribute
            const tooltipText = ("Go to "+element.textContent) 
            
            // Set the tooltip content
            tooltip.textContent = tooltipText;

            // Position the tooltip next to the element
            const elementRect = element.getBoundingClientRect();
            tooltip.style.top = `${elementRect.bottom}px`;
            tooltip.style.left = `${elementRect.left}px`;

            // Display the tooltip
            tooltip.style.display = "block";
        });

        element.addEventListener("mouseout", () => {
            // Hide the tooltip on mouseout
            tooltip.style.display = "none";
        });
    });
});
