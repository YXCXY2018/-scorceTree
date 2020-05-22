// request拦截器
import axios from 'axios'

// import router from '../router'
// 创建axios实例
axios.defaults.withCredentials = true
const service = axios.create({
  timeout: null // 请求超时时间
})
service.cancelToken = axios.CancelToken // 取消请求
let serviceTips

// request拦截器
service.interceptors.request.use(
  config => {
    let token = localStorage.getItem('tokendata')
    console.log(token)
    // 设置请求头
    // let headers = 'application/json'
    // 是否携带token
    let tokenFlag = true
    // 是否修改请求信息
    if (config.opts) {
      // 获取携带token状态
      tokenFlag = config.opts ? config.opts.token : true
      // 获取请求头
      // headers = config.opts.Header ? config.opts.Header : 'application/json'
      // 拓展头部参数
      let Head = config.opts.Head
      if (Head) {
        for (let key in Head) {
          config.headers[key] = Head[key]
        }
      }
    }
    if (token && tokenFlag) {
      // 条件允许，携带token请求
      config.headers['X-Auth0-Token'] = token
    }
    // else {
    // headers = 'application/x-www-form-urlencoded'


    if (process.env.NODE_ENV === 'development') {
      config.headers['x-tif-uid'] = '0754c9bzg7n0ce0iprrq2i'
     
    }



    // }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// http response 服务器响应拦截器
service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.message.includes('timeout')) { // 判断请求异常信息中是否含有超时timeout字符串
      serviceTips = '请求超时，请检查网络是否可用！'
    }
    if (error.response) {
      switch (error.response.status) {
        case 401:
          error.response.data = '登陆超时，重新登陆'
          break
        case 404:
          error.response.data = '系统繁忙，请联系管理员'
          break
        case 406:
          error.response.data = '头部无携带token'
          break
          // case 412:
          //   // 拦截错误 并重新跳入登页重新获取token
          //   router.replace({
          //     path: '/login',
          //     query: {
          //       redirect: router.currentRoute.fullPath
          //     } // 登录成功后跳入浏览的当前页面
          //   })
          //   error.response.data = '秘钥失效'
          //   localStorage.removeItem('tokendata') // 清除token
          //   break
          // case 415:
          //   error.response.data = '请求type有误'
          //   break
        case 500:
          error.response.data = '服务器异常'
          break
      }
      serviceTips = error.response.data
    }
    return Promise.reject(serviceTips)
  }
)
export default service
