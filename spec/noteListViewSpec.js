function noteListViewConstructor() {
  noteListView = new NoteListView(1);
  console.log('noteListViewConstructor:');
  assert.isEqual(noteListView._noteListModel, 1);
};

function noteListToHTML() {
  noteListModel = new NoteListModel;
  noteListModel.addNote('Test 1')
  noteListModel.addNote('Test 2')
  noteListModel.addNote('Test 3')
  noteListView = new NoteListView(noteListModel);
  console.log('noteListToHTML:');
  assert.isEqual(noteListView.toHTML(), "<ul><li><div>Test 1</div></li><li><div>Test 2</div></li><li><div>Test 3</div></li></ul>");
};

noteListViewConstructor();
noteListToHTML();
