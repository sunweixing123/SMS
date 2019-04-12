import 'whatwg-fetch';
import 'es6-promise';

export function get(url) {
  url = `http://localhost:3001${url}`;
  var result = fetch(url, {
    credentials: 'include',
    headers: {
      'Accept': 'application/json, text/plain, */*'
    }
  });
  return result;
}