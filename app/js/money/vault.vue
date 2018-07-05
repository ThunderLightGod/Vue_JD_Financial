<template>
  <Panel title="小金库" :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.arrow">更多理财产品></div>
      <router-link :to="{name: 'home'}">
        <div :class="$style.bg_img">
          <h4>4.7510<span>%</span></h4>
          <p>七日年化收益</p>
          <p :class="$style.gray">支付/缴费/优质理财/大额理财</p>
          <btn :class="$style.open_btn">开启送礼包</btn>
        </div>
      </router-link>
    </section>
  </Panel>
</template>
<script>
import Panel from '../core/panel.vue'
import btn from '../core/btn.vue'
export default {
  components: {
    Panel,
    btn
  }
}
</script>
<style lang="scss" module>
@import "../../css/element.scss";
.panel {
  @include panel;
  >h4 {
    font-size: 36px;
    font-weight: 700;
    height: 120px;
    line-height: 120px;
    padding: 0 30px;
    text-align: left;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #333;
  }
  .content {
    padding-bottom: 40px;
    position: relative;
    .arrow {
      position: absolute;
      font-size: 24px;
      color: #999;
      top: -75px;
      right: 20px;
    }
    a {
      text-decoration: none;
    }
    .bg_img {
      position: relative;
      height: 200px;
      margin: 0 30px;
      padding-left: 28px;
      background:url(//m.jr.jd.com/spe/qyy/hzq/445b538c873a5bffc189ad117298eec4.png) 50% no-repeat;
      background-size: cover;
      color: #fff;
      overflow: hidden;
      h4 {
        position: relative;
        width: 280px;
        font-size: 60px;
        height: 72px;
        line-height: 72px;
        margin-top: 24px;
        &::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          height: 1px;
          width: 100%;
          background: #fff;
          opacity: .3;
        }
        span {
          font-size: 28px;
        }
      }
      p {
        font-size: 24px;
        height: 34px;
        line-height: 34px;
        margin: 8px 0 4px;
        &.gray {
          opacity: .6;
        }
      }
      .open_btn {
        position: absolute;
        top: 0;
        right: 0;
        width: 332px;
        height: 200px;
        line-height: 200px;
        background: url(//m.jr.jd.com/spe/qyy/hzq/ac3595803ef2dfd8530f13be01cbdead.png) 50% no-repeat;
        background-size: cover;
        font-size: 24px;
        text-align: center;
      }
    }
  }
}
</style>
