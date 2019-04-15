function noteListViewConstructor() {
  noteListView = new NoteListView(1);
  console.log('noteListViewConstructor:');
  assert.isEqual(noteListView._noteListModel, 1);
};

noteListViewConstructor();
