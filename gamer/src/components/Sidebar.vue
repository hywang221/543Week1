<script setup>
import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

defineProps({
  msg: String,
})

const count = ref(0)

const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
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
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span><router-link to="/">Home</router-link></span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon><document /></el-icon>
          <span><router-link to="/">Collection</router-link></span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
  </div>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.game-sidebar {
  width: 200px;
  height: 100vh;
  position:fixed;
  left: 0;
  top: 0;
}
::v-deep .el-menu {
  height: 100vh;
}
</style>
