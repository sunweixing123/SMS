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
  // cbs = function(res){
  //   console.log(res);
  // };
  result.then(res => {
    console.log(res);
    return res.json()
  }).then(json => {
    console.log(json);
    // cbs(json);
    return json;
  })
  return result;
}