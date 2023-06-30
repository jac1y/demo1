<template>
    <div class="login-wrap">
        <el-form class="login-container">
            <h1 class="title">用户登陆</h1>
            <el-form-item>
                <el-input type="text" v-model="username" placeholder="用户账号：张三" autocomplete="off" minlength="2"
                    maxlength="6"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input type="password" v-model="password" placeholder="用户密码:123456" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="doLogin" style="width: 100%;">登陆</el-button>
            </el-form-item>
            <!-- <el-row style="text-align: center;margin-top: -10px;">
                <el-link type="primary" @click="doRegister">注册账号</el-link>
                <el-link type="primary" @click="">忘记密码</el-link>
            </el-row> -->
        </el-form>
    </div>
</template>
   
<script>
export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        doLogin() {
            let username = this.username;
            let password = this.password;
            let that = this;
            if (username == '' || password == '') {
                alert('密码或用户名为空')
            }
            else {
                // 上述请求也可以按以下方式完成（可选）
                this.$axios.post('api/test', {
                    user: {
                        name: username,
                        pw: password,
                    }
                })
                    .then(function (response) {
                        if (response.data == false) {
                            alert('用户名或密码错误')
                        }
                        else {
                            that.$store.commit('user/saveUser', response);
                            that.$router.push('/home');
                            that.$message({
                                message: '登陆成功！！！',
                                type: 'success',
                                center: true,
                            });
                            that.$addLogs("登录", "登陆成功");
                        }
                    })
                    .catch(function (error) {
                        console.error(error);
                    })
                    .then(function () {
                        // 总是会执行
                    });
            }

        }


    },
    created() {
        if (this.$store.state.user.token != null) {
            this.$router.push('/home');
        }
    }
    // doRegister: function () {
    //     this.$router.push('/Register')
    // }
}
</script>
   
<style>
.login-wrap {
    width: 100%;
    height: 1200px;
    max-height: 100%;
    box-sizing: 100%;
    background-color: #525151;
}

.login-container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    width: 350px;
    color: rgb(255, 255, 255);
    padding: 30px 35px 15px 35px;
    background-color: rgb(84, 92, 100);
    border: 1px solid #eaeaea;
    text-align: left;
    box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
}

.title {
    margin: 0px auto 40px auto;
    text-align: center;
}
</style>