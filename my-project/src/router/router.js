/**
 * Created by huhai on 17/3/27.
 */
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }


const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
]


export default new VueRouter({
    routes // （缩写）相当于 routes: routes
})