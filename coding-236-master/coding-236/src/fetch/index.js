import 'whatwg-fetch';
import 'es6-promise';
// import {get} from './get';


const Api = {
    GET(url, cbs) {
        url = `http://localhost:3001${url}`;
        var result = fetch(url, {
            credentials: 'include',
            headers: {
            'Accept': 'application/json, text/plain, */*'
            }
        });
        // cbs = function(res){
        //     console.log(res);
        // };
        result.then(res => {
            console.log(res);
            return res.json();
        }).then(json => {
            console.log(json);
            cbs(json);
            // cbs(json);
            return json;
        })
        return result;
    },
    POST(url) {
        //api/post  提交数据
        var result = fetch(url, {
            method: 'POST',
            credentials: 'include',
            headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded',
            },
            //注意修改post时的参数形式
            body: 'a=100&b=200'
        });

        result.then(res => {
            return res;
        }).then(json => {
            console.log(json);
        })
    }
    
}

export default Api;