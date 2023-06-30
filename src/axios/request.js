import axios from 'axios'
import store from '@/store/index.js'
import router from '../router/index.js'


const instance = axios.create({
    baseURL: "", //默认url
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
});


// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 这里应该让后端验证token，但是下次一定
    if (store.state.user.token == null) {
        router.push('/')
    }
    // 在发送请求之前做些什么
    return config
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
});
// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
});

export default instance;