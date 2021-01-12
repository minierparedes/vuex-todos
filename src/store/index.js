import Vuex from "vue";
import Vue from "vuex";
import todos from "./modules/todos";

// Load VUEX
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
    modules: {
        todos
    }
})