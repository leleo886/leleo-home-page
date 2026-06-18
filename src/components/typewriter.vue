<!-- 打字机效果组件：循环输出 config 中配置的多条文字 -->
<template>
    <div class="leleo-typewriter" style="text-align: center;"><span class="qm">“ </span><span ref="text" class="msg"></span><span class="qm"> ”</span></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import TypeIt from 'typeit'
import config from '../config.js';

const text = ref(null)
onMounted(() => {
    let configdata = null;
    // 支持 VITE_CONFIG 环境变量覆盖配置
    if (import.meta.env.VITE_CONFIG) {
        configdata = JSON.parse(import.meta.env.VITE_CONFIG);
    } else {
        configdata = config;
    }
    // 初始化 TypeIt 实例并开始播放
    new (TypeIt)(text.value, {
        strings: configdata.typeWriterStrings, // 要循环显示的文字数组
        cursorChar: "<span class='cursorChar' style='font-size: 26px;color: var(--leleo-vcard-color);'>|<span>", // 光标样式
        speed: 150,          // 打字速度
        lifeLike: true,      // 使打字速度不规则
        cursor: true,        // 在字符串末尾显示闪烁的光标
        breakLines: false,   // 多个字符串互相替换，而不是换行
        loop: true,          // 循环播放
    }).go()
})

</script>
 
<style scoped>
.msg, .qm {
    color: var(--leleo-vcard-color);
    letter-spacing: 2px;
    font-family: Arial, sans-serif;
    font-size: 25px;
    font-weight: bold;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}
 
.msg ::v-deep.cursorChar {
    display: inline-block;
    margin-left: 2px;
}
@media screen and (min-width: 960px) and (max-width: 1200px)  {
    .msg, .qm{
        font-size: 20px;
    }
}
@media (max-width: 960px){
    .leleo-typewriter{
        min-height: 76px;
    }
    .msg, .qm{
        font-size: 16px;
    }
}
</style>
