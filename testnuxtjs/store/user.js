export const state = () => ({
    idUser: 68890909098,
    name : 'Yann '
})

export const getters = {
    getIdAndName(state) {
        return  `  id : ${state.idUser}  Nom : ${state.name}` 
    },
    getId (state) {
        return state.idUser
    }
}

export const mutations = {
    // ADD(state, value) {
    //     state.count = value
    // },

}
