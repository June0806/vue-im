import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const files = require.context('./modules', false, /\.js$/);
const store = new Vuex.Store({
    modules: files.keys().reduce((modules, modulePath) => {
        // set './app.js' => 'app'
        const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
        const value = files(modulePath);
        modules[moduleName] = value.default;
        return modules;
    }, {})
});
Vue.use(store);
export default store;