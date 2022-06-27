export default {
    state: {
        userId: ''
    },
    mutations: {
        STOREUSERID(state,userId) {
            state.userId = userId;
        }

    },
    actions: {
        storeUserId({commit},userId) {
            commit('STOREUSERID',userId)
        }
    }
}