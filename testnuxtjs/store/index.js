/**
 * sore index contient les states globaux
 */
export const state = () => ({
    valeur: 4
})

/**
 * les getters  : mise en cache et ne modifient 
 * pas directement ls states
 */
export const getters = {
    getValeur(state) {
        return state.valeur
    },
    compose ( getters) {
        return console.log(getters)
        
    }
}

/**
 * Les mutations modifient les states de base 
 * les guetters seront alors mis à jour
 */
export const mutations = {
    CHANGE_VALEUR (state) {
        state.valeur = 3
    }
}
