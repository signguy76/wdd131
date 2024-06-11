document.addEventListener('DOMContentLoaded', () => {
    // Set the current year
    document.getElementById('currentyear').textContent = new Date().getFullYear();

    // Set the last modified date
    document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
});
