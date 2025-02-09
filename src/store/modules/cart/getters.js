export default {
    totalPrice(state) {
        return state.cart.total.toFixed(2);
    },
    totalCount(state) {
        return state.cart;
    },
    items(state) {
        return state.cart;
    }
}