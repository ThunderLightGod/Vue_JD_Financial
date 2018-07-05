import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"
import Money from "../money/index.vue"
import Ious from "../ious/index.vue"
import "../../css/reset.scss"
import "../../css/start.scss"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
        }, {
            path: "/Money",
            name: "Money",
            component: Money,
        }, {
            path: "/Ious",
            name: "Ious",
            component: Ious,
        },
    ],
})
