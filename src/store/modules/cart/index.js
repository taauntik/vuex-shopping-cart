import cartGetters from './getters.js';
import cartMutations from './mutations.js';

export default {
    namespaced: true,
    state() {
        return {
            cart: { items: [], total: 0, qty: 0 }
        };
    },
    getters : cartGetters,
    mutations : cartMutations,
    actions : {}
};