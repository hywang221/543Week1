<script setup>
import { useRouter } from "vue-router";
import { ref, reactive } from "vue";
import { StarFilled, Star } from "@element-plus/icons-vue";
import gameInfo from "@/utils/gameInfo";
import { debounce, onCheckGame } from "@/utils";
import logoImg from "@/images/logo1.png";
import Comment from "../components/Comment.vue";
import comments from "../utils/comments";
import { shuffleArray } from "../utils";

const router = useRouter();

let formatData = gameInfo.map((item) => {
  const commentsList = shuffleArray(comments);
  return {
    ...item,
    imgUrl: new URL(`../images/${item.img}`, import.meta.url).href,
    commentsList: commentsList.slice(0, 2),
  };
});
try {
  let checkListStorage = localStorage.getItem("checkList");
  if (checkListStorage) {
    checkListStorage = JSON.stringify(checkListStorage);
  } else {
    checkListStorage = [];
  }
  formatData = formatData.filter((item) => {
    if (!checkListStorage) return true;
    return checkListStorage.includes(item.id);
  });
} catch (error) {
  formatData = [];
}
let gameListData = reactive(formatData);

const onGoDetail = (item) => {
  router.push({ path: "/detail", query: item });
};

const onCheck = debounce((item) => {
  console.log("onCheck", item);
  const checkStatus = item.checked;
  const id = item.id;
  onCheckGame(item, !checkStatus);
  gameListData.forEach((item) => {
    if (item.id === id) {
      item.checked = !item.checked;
    }
  });
  console.log("gameListData", gameListData);
}, 300);
</script>

<template>
  <div>
    <div>
      <h1 class="collection-title">Collection</h1>
    </div>
    <el-button class="return-btn" type="primary">
      <router-link to="/list">Return</router-link>
    </el-button>
    <div v-if="!gameListData || gameListData.length === 0">
      <h2>No Data</h2>
      <div>Please collect the game on the homepage.</div>
    </div>
    

    <div class="collection-list">
      <div
        v-for="(item, index) in gameListData"
        :key="index"
        class="collection-item"
      >
        <div class="collection-item-left">
          <div class="game-name" @click="onGoDetail(item)">{{ item.name }}</div>
          <img :src="item.imgUrl" class="game-img" alt="game img" />
          
        </div>
        <div>
          <div v-for="(item, index) in item.commentsList" :key="index">
            <Comment :commentInfo="item" />
          </div>
        </div>
      </div>
    </div>

    
  </div>
</template>

<style scoped>
.collection-title {
  margin-bottom: 40px;
}
.collection-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: 1px #AAA solid;
  padding-bottom: 10px;
}
.collection-item-left {
  width: 200px;
  margin-right: 40px;
}
.game-img {
  width: 200px;
  height: 200px;
  border: 1px #eee solid;
  border-radius: 8px;
}
.game-name {
  color: #409EFF;
  cursor: pointer;
  font-weight: bold;
  margin-bottom: 10px;
}

.return-btn {
  position: fixed;
  left: 240px;
  top: 40px;
  color: #fff;
}
.return-btn a {
  color: #fff;
}
</style>
