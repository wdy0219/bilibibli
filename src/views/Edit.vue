<template>
  <div v-if="model" class="editViews">
    <div style="margin-bottom: 2.778vw">
      <nav-bar></nav-bar>
    </div>

    <div class="uploadfile">
      <van-uploader :after-read="afterRead" preview-size="100vw" class="uploadimg"/>
      <edit-banner left="头像">
        <img :src="model.user_img" slot="right" v-if="model.user_img"/>
        <img src="@/assets/default_img.jpg" slot="right" v-else />
      </edit-banner>
    </div>

    <edit-banner left="昵称" @bannerClick="show = true">
      <a href="javascript:;" slot="right">{{ model.name }}</a>
    </edit-banner>

    <edit-banner left="账号">
      <a href="javascript:;" slot="right">{{ model.username }}</a>
    </edit-banner>

    <edit-banner left="性别" @bannerClick="gendershow = true">
        <a href="javascript:;" slot="right">{{model.gender ? '男' : '女'}}</a>
    </edit-banner>

    <edit-banner left="个性签名" @bannerClick="textshow = true"></edit-banner>

    <div class="editback" @click="$router.back()">返回个人中心</div>

    <van-dialog v-model="show" title="昵称" show-cancel-button @confirm="confirmClick" @cancel="content=''">
        <van-field v-model="content"  autofocus />
    </van-dialog>

    <van-dialog v-model="textshow" title="个签" show-cancel-button @confirm="textareaClick" @cancel="content=''">
        <van-field v-model="content" type="textarea" autofocus />
    </van-dialog>

    <van-action-sheet v-model="gendershow" cancel-text="取消" :actions="actions" @select="onSelect" />

  </div>
</template>

<script>
import navBar from "../components/common/navBar";
import editBanner from "../components/common/editBanner";

export default {
  components: {
    navBar,editBanner,
  },

  data() {
    return {
      model: {},
      show:false,
      textshow:false,
      gendershow:false,
      content:"",
      actions: [
        { name: '男',val:1 },
        { name: '女',val:0 },
      ],
    };
  },

  methods: {
    async selectUser() {
      const res = await this.$http.get("/user/" + localStorage.getItem("id"));
      this.model = res.data[0];
    },
    async afterRead(file) { 
           const fromdata = new FormData() 
           fromdata.append('file', file.file)    // 'file'后端规定
           const res =  await this.$http.post('/upload', fromdata)
            // console.log(res);
           this.model.user_img = res.data.url
           this.UserUpdate()
           this.$refs.navbar.NavInit()
    },
    async UserUpdate() { 
           const res = await this.$http.post('/update/' + localStorage.getItem('id'), this.model)
           if(res.data.code == 200){
               this.$msg.fail('修改成功')
           } 
    },
    confirmClick() {
           this.model.name =  this.content
           this.UserUpdate()
           this.content = ''
    },
    textareaClick() {
           this.model.user_desc = this.content
           this.UserUpdate()
           this.content = ''
    },
    onSelect(data) {
           this.model.gender = data.val
           this.UserUpdate()
           this.gendershow = false
    }
  },

  created() {
    this.selectUser();
  },
};
</script>

<style scoped lang="less">
.editViews a {
  color: #333;
}
.editViews img {
  width: 12.778vw;
  height: 12.778vw;
  border-radius: 50%;
}
.uploadfile{
    overflow: hidden;
    position: relative;
    .uploadimg{
        opacity: 0;
        position: absolute;
    }
}
.editback{
    margin-top: 5.556vw;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    color: #999;
    padding: 4.167vw 0;
    font-size: 4vw;
}
</style>