const Koa = require('koa');
const Router = require('koa-router');
const mysql = require('mysql');
const DB = require('./mysqlDB');

const app = new Koa();
const router = new Router();
router.get('/', async (ctx, next) => {
//   ctx.body="hello koa";
//   const connection = mysql.createConnection({
//       host: 'localhost',
//       user: 'root',
//       password: '',
//       database: 'stuData',
//   })
//   connection.connect();
//   connection.query('select * from t_user', function(error, results) {
//       if(error) {
//           console.log('error');
//       }
//       console.log(results);
//   });
//   connection.end();
    const result = await DB.query('select * from t_user'); //查询数据库
    console.log(result);
    ctx.body = result;
  
})
router.get('/newscontent', (ctx, next) => {
  let url = ctx.url;
  let request = ctx.request;
  let req_query = request.query;
  let req_querystring = request.querystring;

  let ctx_query = ctx.query;
  let ctx_querystring = ctx.querystring;
  ctx.body = {
    url,
    req_query,
    req_querystring,
    ctx_query,
    ctx_querystring,
  }
});

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3001, () => {
  console.log('starting ar port 3001');
});