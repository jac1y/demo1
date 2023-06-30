
export default {
    namespaced: true,
    state: {
        token: null,
        res: null,
        user: [],
    },
    getters: {
    },
    mutations: {
        saveUser(state, res) {
            state.res = res;
            state.token = res.data.token;
            state.user = res.data.results;
        },
        clearUser(state) {
            state.token = null;
            state.res = null;
            state.user = null;
        }
    },
    actions: {

    },
}