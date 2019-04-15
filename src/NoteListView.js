(function(exports) {

  function NoteListView(noteListModel) {
    this._noteListModel = noteListModel;
  };

  NoteListView.prototype.toHTML = function() {
    notes = this._noteListModel.noteStringArray();
    if(notes.length === 0) {
      return '<div>Sorry, there are no stored notes :(</div>'
    } else {
      return '<ul><li><div>' + notes.join('</div></li><li><div>') + '</div></li></ul>';
    }
  };

  exports.NoteListView = NoteListView;
})(this);
