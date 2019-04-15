function noteListNoteArrayDefault() {
  noteList = new NoteListModel();
  console.log('noteListNoteArrayDefault:');
  assert.isEqual(noteList._noteArray.length, 0);
};

function noteListAddNotes() {
  noteList = new NoteListModel();
  console.log('noteListAddNotes:');
  noteList.addNote('test text1')
  noteList.addNote('test text2')
  assert.isEqual(noteList._noteArray[0].content(), 'test text1');
  assert.isEqual(noteList._noteArray[1].content(), 'test text2');
};

function noteStringArray() {
  noteList = new NoteListModel();
  console.log('noteArrayString:');
  noteList.addNote('test text1')
  noteList.addNote('test text2')
  assert.isEqual(noteList.noteStringArray()[0], 'test text1');
  assert.isEqual(noteList.noteStringArray()[1], 'test text2');
};

noteListNoteArrayDefault();
noteListAddNotes();
noteStringArray();
