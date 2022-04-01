import axios from 'axios'
export default {
    actions: {
        async addProduct({commit}, id) {
            const res = await axios.get(`http://localhost:3001/catalog`);
            const newProduct = res.data;
            const productID = newProduct[id]
            commit('setState', productID);
        }
    },
    mutations: {
        setState(state, productID) {
            state.cart.push(productID)
        }
    },
    state: {
        cart: []
    },
    getters: {
        addedProducts(state) {
            return state.cart
        }
    }
}