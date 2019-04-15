function noteListViewConstructor() {
  noteListView = new NoteListView(1);
  console.log('noteListViewConstructor:');
  assert.isEqual(noteListView._noteListModel, 1);
};

function noteListToHTMLOneNote() {
  noteListModel = new NoteListModel;
  noteListModel.addNote('Test 1')
  noteListView = new NoteListView(noteListModel);
  console.log('noteListToHTMLOneNote:');
  assert.isEqual(noteListView.toHTML(), "<ul><li><div>Test 1</div></li></ul>");
};

function noteListToHTMLNoNotes() {
  noteListModel = new NoteListModel;
  noteListView = new NoteListView(noteListModel);
  console.log('noteListToHTMLNoNotes:');
  assert.isEqual(noteListView.toHTML(), "<div>Sorry, there are no stored notes :(</div>");
};

function noteListToHTMLMultipleNotes() {
  noteListModel = new NoteListModel;
  noteListModel.addNote('Test 1')
  noteListModel.addNote('Test 2')
  noteListModel.addNote('Test 3')
  noteListView = new NoteListView(noteListModel);
  console.log('noteListToHTMLMultipleNotes:');
  assert.isEqual(noteListView.toHTML(), "<ul><li><div>Test 1</div></li><li><div>Test 2</div></li><li><div>Test 3</div></li></ul>");
};

noteListViewConstructor();
noteListToHTMLOneNote();
noteListToHTMLNoNotes();
noteListToHTMLMultipleNotes();
