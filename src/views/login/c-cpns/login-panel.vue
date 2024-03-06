<template>
  <div class="login-panel">
<!--    顶部标题-->
    <h1 class="title">后台管理系统</h1>
<!--    中间tabs切换-->
    <div class="tabs">
      <el-tabs type="border-card" stretch v-model="activeName">
        <el-tab-pane name="account">
          <template v-slot:label  >
            <div class="label">
              <el-icon><Avatar /></el-icon>
              <span class="text">账号登陆</span>
            </div>
          </template>
          <div>账号登陆</div>
        </el-tab-pane>

        <el-tab-pane name="phone">
        <template v-slot:label  >
          <div class="label">
            <el-icon><Iphone /></el-icon>
            <span class="text">手机登陆</span>
          </div>
        </template>
          <div>手机登录</div>
        </el-tab-pane>
      </el-tabs>
    </div>
<!--    底部区域-->
    <div class="controls">
      <el-checkbox v-model="isRemPwd" label=" 记住密码" size="large" />
      <el-link type="primary">忘记密码</el-link>
    </div>
      <el-button type="primary" class="login-btn" size="large" @click="handleLoginBtnClick">立即登录</el-button>
  </div>
</template>


<script setup>
//引入组件和自己所需要的东西
import {reactive, ref} from 'vue'
const isRemPwd=ref(false)
const activeName=ref('phone')


function handleLoginBtnClick(){
 if(activeName.value==='account'){
   console.log('用户在账号登陆')
 }else{
   console.log('用户在手机登陆')
 }
}

</script>

<style  scoped lang="less">
.login-panel {
  width: 330px;
  margin-bottom: 180px;
  .title{
    text-align: center;
    margin-bottom: 15px;
  }
  .label{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .text{
    margin-left: 5px;
  }
}
.controls{
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
}
.login-btn{
  margin-top: 10px;
  width: 100%;
  //对于按钮高度的调整
  //--el-button-size:50px;
}

</style>
