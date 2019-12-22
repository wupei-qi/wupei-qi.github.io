const router = new VueRouter({
    routes: [{
            path: '/',
            component: {
                template: '#indexs'
            }
        },
        {
            path: '/about',
            component: {
                template: '#abouts'
            },

        },
        {
            path: '/news-t',
            component: {
                template: '#news-t'
            }
        },
        {
            path: '/line',
            component: {
                template: '#lines'
            }
        },
        {
            path: '/news',
            component: {
                template: '#news'
            },

        },
        {
            path: '/contact',
            component: {
                template: '#contact'
            }
        },
        {
            path: '/essays',
            component: {
                template: '#essays'
            }
        }
    ]
})

new Vue({
    el: '#box',
    router
})