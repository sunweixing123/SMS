import 'whatwg-fetch';
import 'es6-promise';

//{key1: 'value1', key2: 'value2', key3: 'value3}
// 将对象拼接成 'key1=val1&key2=val2&key3=val3' 的字符串形式
function obj2params(obj) {
  var result = '';
  var item;
  for (item in obj) {
    result += '&' + item + '=' + encodeURIComponent(obj[item]);
  }

  if(result) {
    result = result.slice(1);
  }

  return result;
}

//发送post请求
export function post(url, promiseObj) {
  var result = fetch(url, {
    method: 'POST',
    credentials: 'include',
    headers: {
      "Accept": 'application/json, text/plain, */*',
      "Content-Type": 'application/x-www-form-urlencoded',
    },
    body: obj2params(promiseObj),
  });
  return result;
}