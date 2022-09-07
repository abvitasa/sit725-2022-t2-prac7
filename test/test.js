const expect = require('chai').expect;
const request = require('request');

describe('Add Two Numbers', () => {
  let url = 'http://localhost:3000/addNumber/2/3';
  it('returns status 200 to check if api works', (done) => {
    request(url, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('returns status 200 within the message body', (done) => {
    request(url, (err, res, body) => {
      body = JSON.parse(body);
      expect(body.statusCode).to.equal(200);
      done();
    });
  });
});
