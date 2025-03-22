document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Check if dark mode was previously enabled
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        themeToggle.innerHTML = "☀️"; // Sun icon for light mode
    } else {
        themeToggle.innerHTML = "🌙"; // Moon icon for dark mode
    }

    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        // Update icon and store dark mode preference
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
            themeToggle.innerHTML = "☀️"; // Sun icon for light mode
        } else {
            localStorage.setItem("dark-mode", "disabled");
            themeToggle.innerHTML = "🌙"; // Moon icon for dark mode
        }
    });
});
