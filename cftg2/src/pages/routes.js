import {Home, About, Contact, Monitor, Limit, Block} from './index'

export const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/about-us',
        component: About,
        exact: true
    },
    {
        path: '/contact',
        component: Contact,
        exact: true
    },
    {
        path: '/monitor',
        component: Monitor,
        exact: true
    },
    {
        path: '/limit',
        component: Limit,
        exact: true
    },
    {
        path: '/block',
        component: Block,
        exact: true
    }
]