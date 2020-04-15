import home from "../components/Home";
import about from "../components/About";
import contact from "../components/Contact";
export default {
    mode: 'hash',
    routes: [
        {path: '/',          component: home},
        {path: '/about',     component: about},
        {path: '/contact',   component: contact},
    ]
}