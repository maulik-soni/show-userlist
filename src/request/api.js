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
      });
  });
}