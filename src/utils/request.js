import axios from 'axios';

// 基本配置：
//axios.defaults.baseURL = 'https://www.nanshig.com/mobile/index.php';//?act=index
let instance = axios.create({
    baseURL: 'http://localhost:1995'
})

export function get(url='',params={}){
    return instance.get(url,params)
}  

export function post(url='',data={}){
    return instance.post(url,data)
}

export default {
    get,
    post
}