import axios from 'axios'
export default {
    actions: {
        async addProduct({commit}, id) {
            const res = await axios.get(`http://localhost:3001/catalog`);
            const newProduct = res.data;
            const productID = newProduct[id]
            commit('setState', productID);
            commit('setCounter');
        }
    },
    mutations: {
        setState(state, productID) {
            state.cart.push(productID)
        },
        setCounter(state) {
            state.counter += 1
        }
    },
    state: {
        cart: [],
        counter: 0,
    },
    getters: {
        addedProducts(state) {
            return state.cart
        },
        showCounter(state) {
            return state.counter
        }
    }
}