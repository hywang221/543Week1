<script setup>
import { useRoute, useRouter } from 'vue-router'

defineProps({
  commentInfo: Object,
})
const randomInt = Math.floor(Math.random() * 8) + 1;

</script>

<template>
  <div class="comment-item">
    <div class="player-wrapper">
      <img :src="`/game${randomInt}.png`" class="player-avatar" />
      <div class="player-name">{{commentInfo?.player || "ShadowBlaze"}}</div>
    </div>
    <div class="comment-content">
      {{commentInfo?.content || "This game is extremely fun. I think it's the most enjoyable game."}}
    </div>
  </div>
</template>

<style scoped>
.comment-item {
  margin-bottom: 15px;
}
.player-wrapper {
  display: flex;
  align-items: center;
}
.player-avatar {
  width: 40px;
  height: 40px;
  border: 1px #EEE solid;
  border-radius: 40px;
  margin-right: 20px;
  color: #666;
}
.player-name {
  color: #999;
  font-weight: bold;
}
.comment-content {
  font-size: 18px;
  margin-top: 10px;
}
</style>