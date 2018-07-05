<template>
  <article class="">
    <Slider :items="items" :cname="$style.slider"></Slider>
    <section :class="$style.list">
      <div :class="$style.item" v-for="item in enters" :key="item.img">
        <router-link :to="{name: item.href}">
          <img :src="item.img" :alt="item.title">
          <h4>{{item.title}}</h4>
        </router-link>
      </div>
    </section>
  </article>
</template>
<script>
import Slider from '../core/slider.vue'
export default {
  data () {
    return {
      items: [{
        href: 'Home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t22219/223/1855945530/42046/46b47d1d/5b3b53cbN6caa4d7b.jpg?width=750&height=320'
      },{
        href: 'Home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t20929/74/1872954449/43853/4e190cb8/5b3b544aN4419f413.jpg?width=750&height=320'
      },{
        href: 'Home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t22705/299/676618392/31049/a6244401/5b3b5414Nd3cc933d.jpg?width=750&height=320'
      }],
      enters: [{
        href: 'Home',
        img: '//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
        title: '优惠券'
      },{
        href: 'Home',
        img: '//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132',
        title: '领红包'
      },{
        href: 'Home',
        img: '//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132',
        title: '抢钢镚'
      },{
        href: 'Home',
        img: '//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135',
        title: '白条提额'
      }]
    }
  },
  components: {
    Slider
  }
}
</script>
<style lang="scss" module>
@import "../../css/element.scss";
.slider {
  margin-top: 120px;
  img {
    width: 100%;
  }
}
.list {
  @include list(row);
  background: #ffffff;
  padding-top: 40px;
  padding-bottom: 20px;
  justify-content: space-around;
  a {
    text-decoration: none;
  }
  .item {
    text-align: center;
    img {
      display: inline-block;
      width: 90px;
      height: 90px;
    }
    h4 {
      font-size: 26px;
      margin-top: 12px;
      color: #666;
    }
  }
}
</style>
