<script setup>
import { useRoute, useRouter } from "vue-router";
import gameList from "@/utils/gameInfo";
import Comment from "../components/Comment.vue";
import comments from "../utils/comments";
import { shuffleArray } from "../utils";

const router = useRouter();
const route = useRoute();

let gameInfo = route.query || {};
gameInfo.imgUrl = new URL(`../images/${gameInfo.img}`, import.meta.url).href;
const commentsList = shuffleArray(comments);
try {
  if (!gameInfo.id) {
    console.log('no game info')
    let formatData = gameList.map(item => {
      return {
        ...item,
        imgUrl: new URL(`../images/${item.img}`, import.meta.url).href
      }
    });
    gameInfo = formatData[0];
  }
} catch (error) {
  console.log('error', error);
}
</script>

<template>
  <div>
    <el-button class="return-btn" type="primary">
      <router-link to="/list">Return Home</router-link>
    </el-button>
    <h1 class="detail-title">{{ gameInfo.name }}</h1>
    <div class="game-detail">
      <img :src="gameInfo.imgUrl" class="game-img" />
      <div class="game-content">
        <div class="info-item">
          <span class="info-label">Game Name: </span> {{ gameInfo.name }}
        </div>
        <div class="info-item">
          <span class="info-label">Game Author: </span> {{ gameInfo.author }}
        </div>
        <div class="info-item">
          <span class="info-label">Main Story Duration: </span>
          {{ gameInfo.mainHrs }} hrs
        </div>
        <div class="info-item">
          <span class="info-label">Story + SIDES Duration: </span>
          {{ gameInfo.sidesHrs }} hrs
        </div>
        <div class="info-item">
          <span class="info-label">Everything Duration: </span>
          {{ gameInfo.eveHrs }} hrs
        </div>
        <div class="info-item">
          <span class="info-label">All Styles Duration: </span>
          {{ gameInfo.allHrs }} hrs
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
.detail-title {
  margin-top: 20px;
  margin-bottom: 40px;
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
  margin-right: 10px;
  width: 220px;
  display: inline-block;
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
