// JavaScript to update the real-time clock
function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString(); // Get current time in HH:MM:SS format
    document.getElementById("time").textContent = time;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock when the page loads
updateClock();
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('.scroll-link');

    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetUrl = event.target.getAttribute('href');

            // Smooth transition effect
            document.body.style.transition = "opacity 0.5s";
            document.body.style.opacity = 0;

            // Redirect after fade-out effect
            setTimeout(() => {
                window.location.href = targetUrl;
                document.body.style.opacity = 1;
            }, 500);
        });
    });
});