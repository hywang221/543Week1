<script setup>
import { useRouter } from "vue-router";
import gameInfo from "@/utils/gameInfo";
const router = useRouter();

const onGoDetail = (item) => {
  console.log("item", item);
  router.push({ path: "/detail", query: item });
};
const gameListData = gameInfo.map(item => {
  return {
    ...item,
    imgUrl: new URL(`../images/${item.img}`, import.meta.url).href
  }
})
</script>

<template>
  <div>
    <el-table :data="gameListData" class="game-list" style="width: 100%">
      <el-table-column prop="img" label="" width="180">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <img
              :src="scope.row.img"
              class="game-img"
              alt="game img"
            />
            <img
              :src="scope.row.imgUrl"
              class="game-img"
              alt="game img"
            />
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="Name" width="280" />
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
          <el-button link type="primary" size="small">Edit</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.game-img {
  width: 100px;
  height: 100px;
  border: 1px #eee solid;
  border-radius: 8px;
}
.game-list {
  font-size: 18px;
}
.game-list button {
  font-size: 18px;
}
</style>
