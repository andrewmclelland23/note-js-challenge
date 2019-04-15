function noteContentFromConstructor() {
  note = new NoteModel('test text');
  console.log('noteContentFromConstructor:');
  assert.isEqual(note._content, 'test text');
};

function retrieveNoteContent() {
  note = new NoteModel('test text');
  console.log('retrieveNoteContent:');
  assert.isEqual(note.content(), 'test text');
};

noteContentFromConstructor();
retrieveNoteContent();
