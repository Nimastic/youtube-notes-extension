(function() {
    // Inject UI elements into the YouTube page for note-taking
    const noteContainer = document.createElement('div');
    noteContainer.id = 'youtube-note-container';
    document.body.appendChild(noteContainer);
  
    const noteTextArea = document.createElement('textarea');
    noteTextArea.id = 'youtube-note-textarea';
    noteContainer.appendChild(noteTextArea);
  
    const saveButton = document.createElement('button');
    saveButton.innerText = 'Save Note';
    saveButton.onclick = saveNote;
    noteContainer.appendChild(saveButton);
  
    function saveNote() {
      const noteContent = noteTextArea.value;
      const timestamp = document.querySelector('.ytp-time-current').innerText;
      const videoId = window.location.search.split('v=')[1].split('&')[0];
  
      // Replace with your server URL
      const apiUrl = 'http://localhost:5001/api/notes';
  
      fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: noteContent, timestamp, videoId }),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Note saved:', data);
        noteTextArea.value = '';
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  })();
  