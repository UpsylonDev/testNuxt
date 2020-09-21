export default {
    INCREMENT (state) {
      state.count++
    },
    // MULTIPLIE (state) {
    //     state.count = this.getters.datax2 * 2
    // },
    // mettre en ma pour plus de clarté entre smutations et actions
    RESET_COUNTER (state) {
        state.count = 0
    }
}