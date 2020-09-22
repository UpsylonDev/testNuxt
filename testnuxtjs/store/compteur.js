export const state = (states) => ({
  count: 111,
  nameCompteur : 'Compteur no 1 '
})

export const getters = {
    get(state ) {
        return state.count
    },
    mutiply(state) {
        return state.count * 2
    },
    getTotal(state, getters) {
        return state.count + getters.mutiply

    }
}

export const mutations = {
    ADD(state, value) {
        state.count +=  value
    },
    RESET(state) {
        state.count = 0
    },
    INCREMENT(state) {
        state.count++
    },
}
