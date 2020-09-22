export const state = () => ({
    count : 111
  })
  
  export const mutations = {
    add (state) {
      state.count = 555
    }
  }
  
  export const getters = {
    get (state) {
      return state.count
    }
  }
  