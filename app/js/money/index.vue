<template lang="html">
    <div>
        <Heador></Heador>
        <Fixtop></Fixtop>
        <Slider></Slider>
        <Vault></Vault>
        <Footor></Footor>
        <Navbar></Navbar>
    </div>
</template>

<script>
import Heador from '../public/header.vue';
import Footor from '../public/footer.vue';
import Navbar from '../public/navbar.vue';
import Fixtop from './fixtop.vue';
import Slider from './mslider.vue';
import Vault from './vault.vue';
export default {
  components: {
    Heador,
    Footor,
    Navbar,
    Fixtop,
    Slider,
    Vault
  }
}
</script>

<style lang="scss" module>

</style>
