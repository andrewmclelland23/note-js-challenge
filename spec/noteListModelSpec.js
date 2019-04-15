function noteListNoteArrayDefault() {
  noteList = new NoteListModel();
  console.log('noteListNoteArrayDefault:');
  assert.isEqual(noteList._noteArray.length, 0);
};

function noteArrayGetter() {
  noteList = new NoteListModel();
  console.log('noteArrayGetter:');
  var array = [1,2,3];
  noteList._noteArray = array;
  assert.isEqual(noteList.noteArray(), array);
};

function noteListAddNotes() {
  noteList = new NoteListModel();
  console.log('noteListAddNotes:');
  noteList.addNote('test text1')
  noteList.addNote('test text2')
  assert.isEqual(noteList.noteArray()[0].content(), 'test text1');
  assert.isEqual(noteList.noteArray()[1].content(), 'test text2');
};

noteListNoteArrayDefault();
noteArrayGetter();
noteListAddNotes();
