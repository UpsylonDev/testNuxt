export default {
    get (state) {
      return state.name
    },
    nomComplet (state) {
        return state.name + ' marie joseph'
    },
    nomCourt (state) {
        return state.name.substring(0, 2) 
    }
}