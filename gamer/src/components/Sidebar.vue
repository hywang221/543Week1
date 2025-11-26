<script setup>
import { ref } from 'vue'
import gameInfo from "@/utils/gameInfo";
import { useRouter } from "vue-router";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  Ticket
} from '@element-plus/icons-vue'
const router = useRouter();


import logoImg from '@/images/logo4.png'


const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
const goRandomDetail = () => {
  try {
    const randomInt = Math.floor(Math.random() * 8) + 1;
    let formatData = gameInfo.map(item => {
      return {
        ...item,
        imgUrl: new URL(`../images/${item.img}`, import.meta.url).href
      }
    });
    const item = formatData[randomInt];
    router.push({ path: "/detail", query: item });
  } catch (error) {
    alert("Please go detail pages from Homepage");
  }
  const randomInt = Math.floor(Math.random() * 8) + 1;
  let formatData = gameInfo.map(item => {
    return {
      ...item,
      imgUrl: new URL(`../images/${item.img}`, import.meta.url).href
    }
  });
}
</script>

<template>
  <div class="game-sidebar">
    
    <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="1">
          <img :src="logoImg" alt="logo" class="sidebar-logo" />
        </el-menu-item>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span><router-link to="/list">Home</router-link></span>
        </el-menu-item>
        <el-menu-item index="3" >
          <el-icon><document /></el-icon>
          <span><router-link to="/checkList">Collection</router-link></span>
        </el-menu-item>
        <el-menu-item index="4" @click="goRandomDetail()">
          <el-icon><Ticket /></el-icon>
          <span>Random Game</span>
        </el-menu-item>
      </el-menu>
  </div>

</template>

<style scoped>

.game-sidebar {
  width: 200px;
  height: 100vh;
  position:fixed;
  left: 0;
  top: 0;
  padding-top: 160px;
  background: #545c64;
}
.sidebar-logo {
  width: 160px;
  height: 160px;
  display: block;
  margin: 0 auto;
  position: fixed;
  top: 50px;
}
::v-deep .el-menu {
  height: 100vh;
  color: #FFF;
  font-size: 24px;
}
::v-deep .el-menu a, .el-menu span {
    color: #FFF;
    font-size: 20px;
  }
  ::v-deep .el-menu .is-active a {
    color: #F6D04B;
  }
  ::v-deep .el-menu .is-active span {
    color: #F6D04B;
  }
</style>
