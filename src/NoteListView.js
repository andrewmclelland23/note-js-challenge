(function(exports) {

  function NoteListView(noteListModel) {
    this._noteListModel = noteListModel;
  };

  NoteListView.prototype.toHTML = function() {
    htmlString = "<ul>"
    this._noteListModel.noteArray().forEach(function(note) {
      htmlString += `<li><div>${note.content()}</div></li>`
    });
    return htmlString + '</ul>';
  };

  exports.NoteListView = NoteListView;
})(this);
