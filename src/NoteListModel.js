(function(exports) {
  function NoteListModel() {
    this._noteArray = [];
  };

  NoteListModel.prototype.noteArray = function() {
    return this._noteArray;
  };

  NoteListModel.prototype.addNote = function(content) {
    this._noteArray.push(new NoteModel(content));
  };

  exports.NoteListModel = NoteListModel;
})(this);
