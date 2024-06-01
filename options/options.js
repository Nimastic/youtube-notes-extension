document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('options-form');
    const apiUrlInput = document.getElementById('api-url');
  
    // Load saved options
    chrome.storage.sync.get(['apiUrl'], (result) => {
      apiUrlInput.value = result.apiUrl || '';
    });
  
    // Save options
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const apiUrl = apiUrlInput.value;
      chrome.storage.sync.set({ apiUrl }, () => {
        console.log('API URL saved:', apiUrl);
      });
    });
  });
  