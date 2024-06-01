// popup.js
document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:5000/api/notes')
      .then(response => response.json())
      .then(notes => {
        const notesContainer = document.getElementById('notes-container');
        notes.forEach(note => {
          const noteElement = document.createElement('div');
          noteElement.className = 'note';
          noteElement.innerText = `${note.timestamp}: ${note.content}`;
          notesContainer.appendChild(noteElement);
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  });
  