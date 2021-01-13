import Vue from "vue";
import Vuex from "vuex";
import todos from "./modules/todos";

// Load VUEX
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
    modules: {
        todos
    }
})