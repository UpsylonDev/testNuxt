<template>
    <div class="fond">

        <Nav></Nav>
        <h1>Test page about
        </h1>
        <p> Un titre du store (state) :  {{ titre }} </p>
        <p>Compteur depuis le (state) de compteur :  {{ count}}</p>
        <p>Compteur depuis le (getter) de compteur :  {{ compteur}}</p>
        <p>{{compose}}</p>
        <p>compteur multiplier x 2 : {{ multiplier}}</p>
        <button @click="reset" class="uk-close-large" type="button" uk-close>RESET</button>
        <button @click="changeCompt" class="uk-button" type="button" >CHANGER COMPTEUR</button>
        <button @click="add" class="uk-button" type="button" >INCREMENT</button>
        <input ref="valIncrement" type="text" value="1">
        
        <select v-model="valeurSelected" @change="valeurChoisie"  id="monselect">
            <option  value="0">00 h </option> 
            <option value="13" >13 h </option> 
            <option value="14" selected>14 h</option>
            <option value="15">15 h</option>
            <option value="...">...</option>
        </select>
        <p>{{message}}</p>
        

    </div>
</div>
</template>

<script>
        import Nav from '../components/Navigation'
        // ! Important pour récipérer le store
        // !permet de faire appel au states plus simplement
        import { mapState, mapGetters, mapMutations } from 'vuex'

    export default {
        components: {
            Nav,
        },
        data() {
            return {
                valeurSelected: '0',
                message : ""
            }
        },
        computed: {
            titre() {
                return  this.$store.state.titre
            },
            count() {
                return this.$store.state.compteur.count
            },
            // recuperation de tous les getters
            ...mapGetters ({
                compteur :'compteur/get',
                compose : 'compose',
                multiplier : 'compteur/mutiply'

            }),
        },
        methods: {
            /**
             * Pour les mutations simples ne nescessitant pas 
             * de passage de params
             */
            ...mapMutations({
                reset : 'compteur/RESET',
                changeVal : 'CHANGE_VALEUR'
            }),
            /**
             * pour les mutations paramètrées 
             */
            add() {
                this.value = this.$refs.valIncrement.value
   
                if ( isNaN(this.value)  || (this.value  == "") ) {
                    this.message = "pas un nombre "
                    setTimeout(() => {
                    this.message = ""
                        
                    }, 3000);
                    
                } else {
                    this.$store.commit('compteur/ADD', parseInt(this.value) )
                    
                }

            },
            valeurChoisie () {
                console.log(this.valeurSelected)
                
            },
            changeCompt () {
                this.$store.commit('CHANGE_COMPTEUR')
            },
  
        },
}
</script>
<style lang="scss" scoped>
.fond{
    width: 80%;
    margin-left: 20px;
    margin-top: 2%;
    background: rgba(167, 166, 166, 0.479);
}

</style>