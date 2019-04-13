import 'whatwg-fetch';
import 'es6-promise';
import './get';


const Api = {
    GET(url) {
        const result = this.get(url);
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