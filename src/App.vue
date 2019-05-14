<template>
  <div id="app">
    <div class="wrap">
      <div class="header-wrap">
        <div class="header">
          <div class="header-left fl">Money dodo</div>
          <div class="user-wrap fr">
            {{username}}
          </div>
        </div>
      </div>
      <div class="content-wrap">
        <div class="nav-wrap">
          <div class="nav">
            <!--<el-button class="open" @click="openClose">-->
              <!--<span class="el-icon-s-fold"></span>-->
            <!--</el-button>-->
            <el-menu
              :collapse="isCollapse"
              :router="active"
              :unique-opened='active'
              :default-active="defaultActive"
              class="el-menu-vertical-demo"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-s-home"></i>
                  <span>首页</span>
                </template>
                <el-menu-item index="/home">
                  <i class="el-icon-s-home"></i>
                  <span>首页</span>
                </el-menu-item>
              </el-submenu>
              <!--<el-submenu index="1">-->
                <!--<template slot="title">-->
                  <!--<i class="el-icon-menu"></i>-->
                  <!--<span>顶级权限</span>-->
                <!--</template>-->
                  <!--&lt;!&ndash;<el-menu-item index="1-1">&ndash;&gt;-->
                    <!--&lt;!&ndash;<template slot="title">&ndash;&gt;-->
                    <!--&lt;!&ndash;<i class="el-icon-menu"></i>&ndash;&gt;-->
                    <!--&lt;!&ndash;<span>选项1</span>&ndash;&gt;-->
                  <!--&lt;!&ndash;</template></el-menu-item>&ndash;&gt;-->
                  <!--<el-menu-item index="1-1">商户列表</el-menu-item>-->
                  <!--<el-menu-item index="1-2">切换用户-->
                    <!--</el-menu-item>-->
                  <!--<el-menu-item index="1-3">引流管理-->
                    <!--</el-menu-item>-->
                  <!--<el-menu-item index="1-4">更多贷款APP-->
                    <!--</el-menu-item>-->
                  <!--<el-menu-item index="1-5">协议管理-->
                    <!--</el-menu-item>-->
                  <!--<el-menu-item index="1-6">文章管理-->
                    <!--</el-menu-item>-->
                  <!--<el-menu-item index="1-7">借款用途-->
                    <!--</el-menu-item>-->
                <!--<el-menu-item index="1-8">升级管理-->

                <!--</el-menu-item>-->
                <!--<el-menu-item index="1-9">机审管理-->
                <!--</el-menu-item>-->
              <!--</el-submenu>-->
              <!--<el-submenu index="2">-->
                <!--<template slot="title">-->
                  <!--<i class="el-icon-menu"></i>-->
                  <!--<span>隐藏功能</span>-->
                <!--</template>-->
                <!--<el-menu-item index="2-1">充值平台金额</el-menu-item>-->
                <!--<el-menu-item index="2-2">设置单词扣费</el-menu-item>-->
              <!--</el-submenu>-->
              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>借款管理</span>
                </template>
                  <el-menu-item index="/authorityIndex">
                    <i class="el-icon-s-finance"></i>
                    <span>借款审核</span>
                  </el-menu-item>
                  <el-menu-item index="">
                    <i class="el-icon-s-finance"></i>
                    <span>借款放款</span>
                  </el-menu-item>
                  <el-menu-item index="">
                    <i class="el-icon-s-finance"></i>
                    <span>借款汇总</span>
                  </el-menu-item>
              </el-submenu>
              <el-submenu index="4">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>贷后管理</span>
                </template>
                  <el-menu-item index="/saleList">全部还款</el-menu-item>
                  <el-menu-item index="4-2">逾期还款</el-menu-item>
                  <el-menu-item index="4-3">今日到期</el-menu-item>
              </el-submenu>
              <el-submenu index="5">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>资金管理</span>
                </template>
                  <el-menu-item index="5-1">放款记录</el-menu-item>
                  <el-menu-item index="5-2">还款续期</el-menu-item>
              </el-submenu>
              <el-submenu index="6">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>用户管理</span>
                </template>
                <el-menu-item index="6-1">用户列表</el-menu-item>
                <el-menu-item index="6-2">提额申请</el-menu-item>
              </el-submenu>
              <el-submenu index="7">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>公司管理</span>
                </template>
                <el-menu-item index="7-1">部门管理</el-menu-item>
                <el-menu-item index="7-2">角色管理</el-menu-item>
                <el-menu-item index="7-3">员工管理</el-menu-item>
              </el-submenu>
              <el-submenu index="8">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>App管理</span>
                </template>
                <el-menu-item index="8-1">收款人员</el-menu-item>
                <el-menu-item index="8-2">客服设置</el-menu-item>
                <el-menu-item index="8-3">关于我们</el-menu-item>
              </el-submenu>
              <el-submenu index="9">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>系统管理</span>
                </template>
                <el-menu-item index="9-1">费率设置</el-menu-item>
                <el-menu-item index="9-2">消费信息</el-menu-item>
                <el-menu-item index="9-3">登录记录</el-menu-item>
              </el-submenu>
              <el-submenu index="10">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>统计管理</span>
                </template>
                <el-menu-item index="10-1">今日概况</el-menu-item>
                <el-menu-item index="10-2">平台概况</el-menu-item>
              </el-submenu>
            </el-menu>
          </div>
        </div>
        <div class="content-main">
          <div class="content">
            <router-view/>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import '../static/css/reset.css'
export default {
  name: 'App',
  data(){
    return {
      defaultActive: '',
      active: true,
      isCollapse: false,
      username: 'test'
    }
  },
  mounted(){
    this.defaultActive = this.$route.path
    if(this.defaultActive = '/'){
      this.defaultActive = '/home'
    }
  },
  methods:{
    openClose(){
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style lang="less">
  body,html{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
#app {
  width: 100%;
  height: 100%;
  .wrap{
    width: 100%;
    height: 100%;
    .header-wrap{
      width: 100%;
      height: 50px;
      background: #23262b;
      .header{
        color: white;
        line-height: 50px;
        .header-left{
          width: 200px;
          text-align: center;
          /*background: cadetblue;*/
        }
        .user-wrap{
          padding: 0 15px;
        }
      }
    }
    .content-wrap{
      width: 100%;
      height: calc(100% - 50px);
      display: flex;
      display: -webkit-flex;
      .nav-wrap{
        /*flex: 0 0 201px;*/
        background: #333744;
        /*width: 201px;*/
        overflow: hidden;
        .open{
          width: 100%;
        }
      }
      .content-main{
        flex: 1;
      }
    }
    .el-menu{
      .is-active{
        .el-submenu__title{
          color: #ffd04b !important;
          i{
            color: #ffd04b !important;
          }
        }
      }
    }
  }
}
</style>
