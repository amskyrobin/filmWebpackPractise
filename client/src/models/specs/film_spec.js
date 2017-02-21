var Film = require('../film');
var assert = require('assert');



describe('film', function(){
  var film;

  beforeEach(function(){
    film = new Film({
      title: "Titanic",
      actors: ["leonardo diCaprio"]
    });
  });

  it('should have a title', function(){
    assert.equal(film.title, "Titanic");
  });
})