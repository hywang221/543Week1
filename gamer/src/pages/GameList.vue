<script setup>
import { useRouter } from "vue-router";
import { ref, reactive } from "vue";
import { StarFilled, Star } from "@element-plus/icons-vue";
import gameInfo from "@/utils/gameInfo";
import { debounce, onCheckGame } from "@/utils";
import logoImg from "@/images/logo1.png";
const router = useRouter();

let formatData = gameInfo.map((item) => {
  return {
    ...item,
    imgUrl: new URL(`../images/${item.img}`, import.meta.url).href,
  };
});
try {
  let checkListStorage = localStorage.getItem("checkList");
  if (checkListStorage) {
    checkListStorage = JSON.stringify(checkListStorage);
  } else {
    checkListStorage = [];
  }
  formatData = formatData.map((item) => {
    return {
      ...item,
      checked: checkListStorage ? checkListStorage.includes(item.id) : false,
      imgUrl: new URL(`../images/${item.img}`, import.meta.url).href,
    };
  });
} catch (error) {}
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
      <img :src="logoImg" alt="logo" class="home-logo" />
    </div>
    <el-table :data="gameListData" class="game-list">
      <el-table-column prop="img" label="" width="180">
        <template #default="scope">
          <div>
            <img :src="scope.row.imgUrl" class="game-img" alt="game img" />
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="Name" width="280">
        <template #default="scope">
          <div class="game-name" @click="onGoDetail(scope.row)">{{ scope.row.name }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="author" label="Author" width="180">
      </el-table-column>
      <el-table-column prop="img" label="Rate" width="220">
        <template #default="scope">
          <el-rate
            v-model="scope.row.rate"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value} points"
          />
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="Operations" min-width="180">
        <template #default="scope">
          <el-button
            link
            type="primary"
            size="small"
            @click="onGoDetail(scope.row)"
          >
            Detail
          </el-button>
          <el-button link type="primary" @click="onCheck(scope.row)">
            <el-icon>
              <StarFilled v-if="scope.row.checked" class="star-checked" />
              <Star v-if="!scope.row.checked" class="star-unchecked" />
            </el-icon>
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped>
.home-logo {
  width: 240px;
  height: 240px;
  margin: 0 auto;
  display: block;
  margin-top: -40px;
}

.game-img {
  width: 100px;
  height: 100px;
  border: 1px #eee solid;
  border-radius: 8px;
}
.game-name {
  color: #409EFF;
  cursor: pointer;
}
.game-list {
  font-size: 18px;
}
.game-list button {
  font-size: 18px;
}
.star-checked {
  width: 30em !important;
}
.star-unchecked {
  width: 30em;
}
</style>
