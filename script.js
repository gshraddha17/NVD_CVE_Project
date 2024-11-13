const themeToggleButton = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';

if (currentTheme === 'dark') {
  document.body.setAttribute('data-theme', 'dark');
} else {
  document.body.setAttribute('data-theme', 'light');
}

themeToggleButton.addEventListener('click', () => {
  const newTheme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

function fetchJsonKeys(fileName) {
  return new Promise((resolve, reject) => {
    const fs = require('fs');

    // Read the file
    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) {
        reject('Error reading the file');
        return;
      }

      // Parse the JSON data
      const jsonData = JSON.parse(data);

      // Fetch the keys
      const keys = Object.keys(jsonData);
      
      resolve(keys);  // Return the keys
    });
  });
}



