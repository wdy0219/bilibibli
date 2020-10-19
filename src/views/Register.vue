<template>
  <div>
      <login-top middleTop="注册bilibili">
         <div slot="right" style="font-size: 3.611vw;" @click="$router.push('/login')">切换到登录</div>
      </login-top>

      <login-text label="姓名" 
        style="margin: 4.167vw 0;"
        placeholder="请输入姓名"
        rule="^.{6,16}$" 
        @inputchange="res => model.name = res"
        />
      <login-text label="账号"
        placeholder="请输入账号"
        rule="^.{6,16}$"
        @inputchange="res => model.username = res" 
        /> 
      <login-text label="密码"
        type="password"
        placeholder="请输入密码"
        rule="^.{6,16}$"
        @inputchange="res => model.password = res"
        />

    <login-btn btntext="注册" @registerSubmit="registerSubmit"/>
  </div>
</template>

<script>
import loginTop from '../components/common/loginTop.vue'
import loginText from '../components/common/loginText.vue'
import loginBtn from '../components/common/loginBtn.vue'

export default {
    components:{
        loginTop,loginText,loginBtn
    },

    data() {
        return {
            model:{
                name:"", 
                username:"",
                password:"",
            }
        }
    },

    methods:{
        async registerSubmit() {
            let rulg = /^.{6,16}$/
            if (rulg.test(this.model.name) && rulg.test(this.model.username) && rulg.test(this.model.password)) {
                // console.log('正则全部效验成功，可以点击注册');
                const res = await this.$http.post('./register', this.model) //.then(res => {console.log(res);})  
                // console.log(res);       
                // console.log('我一定要第二次执行'); 

                this.$msg.fail(res.data.msg) 

                localStorage.setItem('id', res.data.id) // setItem 往本地存储中存储数据
                localStorage.setItem('token', res.data.objtoken)

                setTimeout(() => {
                    this.$router.push('/userinfo')
                }, 1000)
            }else {
                this.$msg.fail('格式不正确，请重新输入')
            }
        }
    }
}
</script>

<style scoped>
</style>