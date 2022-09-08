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

  it('returns the result as number', (done) => {
    request(url, (err, res, body) => {
      body = JSON.parse(body);
      expect(body.result).to.be.a('number');
      done();
    });
  });

  it('returns the result equal to 5', (done) => {
    request(url, (err, res, body) => {
      body = JSON.parse(body);
      expect(body.result).to.equal(5);
      done();
    });
  });

  it('returns the result not euqal to 15', (done) => {
    request(url, (err, res, body) => {
      body = JSON.parse(body);
      expect(body.result).to.not.equal(15);
      done();
    });
  });
});

describe('Add Two Strings', () => {
  let url = 'http://localhost:3000/addNumber/a/b';

  it('should not return status 200', (done) => {
    request(url, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('returns statusCode key in body to check if API gives right result should be 400', (done) => {
    request(url, (err, res, body) => {
      body = JSON.parse(body);
      expect(body.statusCode).to.equal(400);
      done();
    });
  });

  it('returns the result as null', (done) => {
    request(url, (err, res, body) => {
      body = JSON.parse(body);
      expect(body.result).to.be.a('null');
      done();
    });
  });
});
