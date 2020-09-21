export const state = () => ({
  points: 0,
  prenom : 'Yann'
})

export const mutations = {
  increment (state) {
    state.counter++
  }
}

export const getters = {
  datax2 (state) {
    return state.points * 2
  }

}