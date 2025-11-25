<script setup>
  const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    img: "../images/game1.png"
  },
  {
    date: '2016-05-02',
    name: 'Super Smash Bros. Ultimate',
    address: 'No. 189, Grove St, Los Angeles',
    img: '/game1.png'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    img: "/images/game1.png"
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    img: "../assets/game1.png"
  },
]
</script>

<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="img" label="img" width="180">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            
            <img :src="scope.row.img" class="game-img" alt="game img" />
            <img src="../images/game1.png" class="game-img images" alt="img" />
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" >
        <img src="/game1.png" class="game-img images" alt="img" />
        <img src="/images/game1.png" class="game-img images" alt="img" />
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
  border: 1px #EEE solid;
  border-radius: 8px;
}
</style>