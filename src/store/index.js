import { createStore } from 'vuex';
import products from './modules/products';
import cart from './modules/cart';
import auth from './modules/auth';

const store = createStore({
    modules : {
        products,
        cart,
        auth
    }
});

export default store;