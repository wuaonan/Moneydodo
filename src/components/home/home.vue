<template>
  <div class="content-wrap">
    <el-tabs v-model="activeName" class="el-tabs">
      <el-tab-pane label="用户管理" name="first">
        <div class="content-main">
          <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          </el-row>
        </div>
      </el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
    export default {
        name: "home",
        data(){
          return{
            activeName: 'first'
          }
        }
    }
</script>

<style scoped lang="less">
  .content-wrap{
    padding: 5px 20px;
    box-sizing: border-box;
    .el-tabs{
      width: 100%;
    }
    .content-main{
      .grid-content{
        height: 100px;
        background: gray;
      }
    }
  }

</style>
