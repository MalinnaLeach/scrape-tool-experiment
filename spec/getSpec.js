var request = require('request');

describe('get route',function(){

  beforeEach(function(done) {
    request("http://localhost:4000/set?bestfun=coding", function(error, response, body){
      done();
    });
  });

  it("should display added test data", function(done) {
    request("http://localhost:4000/get?key=bestfun", function(error, response, body){
      expect(body).toBe('coding');
      done();
    });
  });


});
