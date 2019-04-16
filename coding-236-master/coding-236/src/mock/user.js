const Koa = require('koa');
const Router = require('koa-router');
const mysql = require('mysql');
const DB = require('./mysqlDB');

const app = new Koa();
const router = new Router();
router.get('/stuData', async (ctx, next) => {
    const result = await DB.query('select * from t_user'); //查询数据库
    console.log(result);
    ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    ctx.set('Access-Control-Allow-Credentials', 'true');
    ctx.body = result;
  
})

router.get('/activeUser', async (ctx, next) => {
  const result = await DB.query('select * from t_user where active_user = 1'); //查询当前用户信息
  console.log(result);
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  ctx.set('Access-Control-Allow-Credentials', 'true');
  ctx.body = result;

})

//select * from t_user,t_message where t_user.message_is=t_message.message_id and t_user.active_user = 1

//SELECT empName,deptName FROM employee INNER JOIN dept ON employee.deptId=dept.id;

//select * from t_user, t_message where t_user.message_id = t_message.message_id

router.get('/userData', async (ctx, next) => {
  const result = await DB.query('select * from t_message, t_user where t_user.message_is=t_message.message_id'); //查询当前用户详细信息
  console.log(result);
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  ctx.set('Access-Control-Allow-Credentials', 'true');
  ctx.body = result;

})


router.get('/stuMessage', async (ctx, next) => {
  const result = await DB.query('select * from t_message'); //查询基本信息
  console.log(result);
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  ctx.set('Access-Control-Allow-Credentials', 'true');
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