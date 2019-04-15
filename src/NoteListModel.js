(function(exports) {
  function NoteListModel() {
    this._noteArray = [];
  };

  NoteListModel.prototype.noteStringArray = function() {
    array = [];
    this._noteArray.forEach(function(note){
      array.push(note.content());
    });
    return array;
  };

  NoteListModel.prototype.addNote = function(content) {
    this._noteArray.push(new NoteModel(content));
  };

  exports.NoteListModel = NoteListModel;
})(this);
