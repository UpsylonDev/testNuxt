export const state = () => ({
    counter: 0,
    prenom : 'Yann'
})
  
export const mutations = {
    increment (state) {
      state.counter++
    },
    multiplie (state) {
        state.counter = this.getters.datax2 * 2
    },
    // mettre en ma pour plus de clarté entre smutations et actions
    RESET_COUNTER (state) {
        state.counter = 0
    }
}

export const getters = {
    datax2 (state) {
      return state.counter * 2
    }
  }
  