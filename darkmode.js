// Get the dark mode toggle button
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Check for saved dark mode preference in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
  darkModeToggle.textContent = '☀️'; // Change symbol to sun
}

// Toggle dark mode
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  darkModeToggle.textContent = isDarkMode ? '☀️' : '🌙'; // Toggle symbol
});
