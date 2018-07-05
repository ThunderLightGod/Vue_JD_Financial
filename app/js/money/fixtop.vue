<template>
  <div :class="$style.fixtop">
    <img src="//img12.360buyimg.com/jrpmobile/jfs/t21946/193/1465725809/15772/5f47e465/5b2a3b82N6a3aec1d.png?width=750&height=120" alt="">
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" module>
.fixtop {
  position: fixed;
  top: 100px;
  left: 0;
  right: 0;
  z-index: 3;
  img {
    width: 100%;
  }
}
</style>