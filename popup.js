document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.querySelector('#hide-buttons');

  checkbox.addEventListener('change', (event) => {
    const display = event.target.checked ? 'none': 'inline-flex'

    // Send value to the active tab
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { value: display });
    });
  });
});