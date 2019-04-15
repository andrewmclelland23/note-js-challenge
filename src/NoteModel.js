(function(exports) {

  function NoteModel(content) {
    this._content = content;
  };

  NoteModel.prototype.content = function () {
    return this._content;
  };

  exports.NoteModel = NoteModel;
})(this);
