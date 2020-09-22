/**
 * store index contient les states globaux
 * 
 * accès dans le module  >
 * 
 */
export const state = (states) => ({
    titre: `Un titre d'article`,
    article : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quam earum eum laboriosam dolores inventore quidem repudiandae delectus consequatur consequuntur? Iusto praesentium culpa veritatis blanditiis totam nihil quisquam dolore illo!",
    nomCompteur : 'Nom du compteur'
})

/**
 * les getters  : mise en cache et ne modifient 
 * pas directement ls states
 */
export const getters = {
    getValeur(state) {
        return state.valeur
    },
    /**
     * Afin de récup un state d'un autre module 
     * $states.compteur.count
     * 
     */
    compose ( $states) {
        // importation de states d'un autre module (compteur)
        return `${$states.nomCompteur} : ${$states.compteur.nameCompteur} :  ` 
    }
    
}

/**
 * Les mutations modifient les states de base 
 * les guetters seront alors mis à jour
 */
export const mutations = {
    CHANGE_VALEUR (state) {
        state.valeur = 3
    },
    // muter une state depuis l'index
    CHANGE_COMPTEUR ($states) {
        $states.compteur.count =  1
    }
}