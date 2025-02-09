import authGetters from './getters.js';
import authMutations from './mutations.js';
import authActions from './actions.js';

export default {
    namespaced: true,
    state() {
        return {
            isLoggedIn: false
        }
    },
    getters : authGetters,
    mutations : authMutations,
    actions : authActions
}