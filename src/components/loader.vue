<!-- 加载遮罩组件：使用 Uiverse 提供的纯 CSS 3D 旋转动画 -->
<template>
<div class="spinner"></div>
</template> 

<style scoped>
/* 来源：Uiverse.io by Nawsome */ 
.spinner:before {
  transform: rotateX(60deg) rotateY(45deg) rotateZ(45deg);
  animation: 750ms rotateBefore infinite linear reverse;
}

.spinner:after {
  transform: rotateX(240deg) rotateY(45deg) rotateZ(45deg);
  animation: 750ms rotateAfter infinite linear;
}

.spinner:before,
.spinner:after {
  box-sizing: border-box;
  content: '';
  display: block;
  position: absolute;
  margin-top: -5em;
  margin-left: -5em;
  width: 10em;
  height: 10em;
  transform-style: preserve-3d;
  transform-origin: 50%;
  transform: rotateY(50%);
  perspective-origin: 50% 50%;
  perspective: 340px;
  background-size: 10em 10em;
  background-image: url(/img/loader.svg);
}
/* sitNSpin.less */
@keyframes rotateBefore {
  from {
    transform: rotateX(60deg) rotateY(45deg) rotateZ(0deg);
  }

  to {
    transform: rotateX(60deg) rotateY(45deg) rotateZ(-360deg);
  }
}

@keyframes rotateAfter {
  from {
    transform: rotateX(240deg) rotateY(45deg) rotateZ(0deg);
  }

  to {
    transform: rotateX(240deg) rotateY(45deg) rotateZ(360deg);
  }
}
</style>
