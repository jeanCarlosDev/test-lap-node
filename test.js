var supertest = require('supertest');
var should = require('should');

var server = supertest.agent('http://localhost:3000');

describe('Teste Endpoint getAll',()=>{
    it('should return a message from server', (done)=>{
        server
          .get('/employee/getAll')
          .expect(200)
          .end((err,res)=> {
                if(err) return done(err);
          done();
          })
        
    })
});

describe('Teste Endpoint POST',()=>{
    it('should return a message from server', (done)=>{
        server
          .post('/employee/save')
          .expect(200)
          .end((err,res)=> {
                if(err) return done(err);
          done();
          })
        
    })
});