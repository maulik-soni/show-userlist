import _agent from 'superagent';
import agent from './superagnentWrapper';
import Cookies from 'js-cookie'

export function userSignin(payload) {
  return new Promise((resolve, reject) => {
    _agent
      .post("https://apertum-interview.herokuapp.com/api/user/login")
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .send(payload)
      .end((err, resp) => {
        if(resp && resp.statusCode === 200){
            const {token} = resp.body;
            token ? Cookies.set('token', btoa(token)) : reject(resp);
            resolve(resp);
            resolve({"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7fSwiZXhwIjoxNTkzNTk0OTQyLCJpYXQiOjE1OTM1OTQwNDJ9.Ad1kFqWJ0nVBJ2EqAelyuq_7T-wMq028XX-MzivsvX8","message":"You got the token!"});
        }else{
          reject(err);
        }
      });
  });
}

export function fetchUsers(){
  return new Promise((resolve, reject) => {
    agent
      .get("https://apertum-interview.herokuapp.com/api/users")
      .end((err, resp) => {
        resolve(resp.body);
        resolve([{"accountId":"admin","age":8,"firstName":"Ted","lastName":"Wei"},{"accountId":"albert","age":18,"firstName":"Albert","lastName":"Chang"},{"accountId":"anna","age":21,"firstName":"Anna","lastName":"Cheng"},{"accountId":"chris","age":28,"firstName":"Chris","lastName":"Wei"},{"accountId":"doris","age":22,"firstName":"Doris","lastName":"Chang"},{"accountId":"emily","age":44,"firstName":"Emily","lastName":"Cheng"}]);
      });
  });
}