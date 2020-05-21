import agent from 'superagent';
import saUse from 'superagent-use';
import Cookies from 'js-cookie'

let _agent = saUse(agent);

export function superAgentMiddleware(_agent) {
  let Request = _agent.Request;
  let oldThen = Request.prototype.then;
  let oldEnd = Request.prototype.end;

  Request.prototype.end = function (fn) {
    function wrapped(err, response) {
      if ([401, 403].includes(response && response.statusCode)) {
        window.location.href = '/login';
        Cookies.remove('token');
      }
      fn(err, response);
    }
    return oldEnd.call(this, wrapped);
  };

  Request.prototype.then = function (fn) {
    function wrapped(response) {
      if ([401, 403].includes(response && response.statusCode)) {
        window.location.href = '/login';
        Cookies.remove('token');
      }
      fn(response);
    }
    return oldThen.call(this, wrapped);
  };
  return _agent;
}

let rawAgent = _agent.use(function (req) {
  req
    .set('Accept', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Authorization', "Bearer " + atob(Cookies.get('token')));
  return req;
})

_agent = superAgentMiddleware(rawAgent);

export default _agent;