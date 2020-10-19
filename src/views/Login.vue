<template>
  <div>
      <login-top middleTop="登录bilibili">
          <div slot="right" style="font-size: 3.611vw;" @click="$router.push('/register')">切换到注册</div>
      </login-top>

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

        <login-btn btntext="登录" @registerSubmit="registerSubmit"/>
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
                username:"",
                password:"",
            }
        }
    },

    methods:{
        async registerSubmit() {
            let rulg = /^.{6,16}$/
            if (rulg.test(this.model.username) && rulg.test(this.model.password)) {
                const res = await this.$http.post('./login', this.model)

                this.$msg.fail(res.data.msg)
                // console.log(res);               
                localStorage.setItem('id', res.data.id)
                localStorage.setItem('token', res.data.token)

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