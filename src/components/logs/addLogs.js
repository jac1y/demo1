import store from '@/store/index'
import moment from 'moment'
import axios from '@/axios/request'

export function addLogs(operation, details) {

    // 获取当前时间
    const sendTime = moment().format('YYYY-MM-DD HH:mm:ss');
    const name = store.state.user.user[0].username;
    // 向后端传输数据
    axios.post('api/addLogs', {
        logs: {
            username: name,
            operation: operation,
            details: details,
            data: sendTime
        }
    })
        .then(function (response) {
        })
        .catch(function (error) {
            alert("添加失败")
        });
}