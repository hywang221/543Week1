<script setup>
import { useRoute, useRouter } from "vue-router";
import Comment from "../components/Comment.vue";
import comments from "../utils/comments";
import { shuffleArray } from "../utils";

const router = useRouter();
const route = useRoute();

const gameInfo = route.query || {};
const commentsList = shuffleArray(comments);
</script>

<template>
  <div>
    <el-button class="return-btn" type="primary">
      <router-link to="/list">Return</router-link>
    </el-button>
    <h1>{{ gameInfo.name }}</h1>
    <div class="game-detail">
      <img :src="`/images/${gameInfo.img}`" class="game-img" />
      <div class="game-content">
        <div class="info-item">
          <span class="info-label">Game Name: </span> {{ gameInfo.name }}
        </div>
        <div class="info-item">
          <span class="info-label">Game Author: </span> {{ gameInfo.author }}
        </div>
        <div class="info-item">
          <span class="info-label">Main Story Duration: </span>
          {{ gameInfo.duration }} hrs
        </div>
        <div class="info-item">
          <span class="info-label">Story + SIDES Duration: </span>
          {{ gameInfo.duration }} hrs
        </div>
        <div class="info-item">
          <span class="info-label">Everything Duration: </span>
          {{ gameInfo.duration }} hrs
        </div>
        <div class="info-item">
          <span class="info-label">All Styles Duration: </span>
          {{ gameInfo.duration }} hrs
        </div>
        <div class="info-item">
          <span class="info-label">Rate: </span>
          <el-rate
            v-model="gameInfo.rate"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value} points"
          />
        </div>
      </div>
    </div>
    <div class="comments-wrapper">
      <h2>Comments</h2>
      <div class="comments-list">
        <div v-for="(item, index) in commentsList" :key="index">
          <Comment :commentInfo="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.game-detail {
  display: flex;
  font-size: 18px;
}
.game-img {
  width: 300px;
  height: 300px;
  border: 1px #eee solid;
  border-radius: 8px;
  margin-right: 40px;
}
.info-item {
  margin-bottom: 20px;
}
.info-label {
  font-weight: bold;
}
.return-btn {
  position: fixed;
  left: 240px;
  top: 40px;
  color: #FFF;
}
.return-btn a {
  color: #FFF;
}
</style>
