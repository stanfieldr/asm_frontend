import Cars from './views/Cars';
import ControlPanel from './views/ControlPanel';
import Tracks from './views/Tracks';
import VueRouter from 'vue-router';

export default [
    { path: '/', component: ControlPanel },
    { path: '/cars', component: Cars },
    { path: '/tracks', component: Tracks }
];