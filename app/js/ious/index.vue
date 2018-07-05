<template lang="html">
    <div>
        <Heador></Heador>
        <Slider></Slider>
        <Wellfare></Wellfare>
        <Service></Service>
        <Footor></Footor>
        <Navbar></Navbar>
    </div>
</template>

<script>
import Heador from '../public/header.vue';
import Footor from '../public/footer.vue';
import Navbar from '../public/navbar.vue';
import Slider from './islider.vue';
import Wellfare from './wellfare.vue';
import Service from './service.vue';
export default {
  components: {
    Heador,
    Slider,
    Wellfare,
    Service,
    Footor,
    Navbar
  }
}
</script>

<style lang="scss" module>

</style>
