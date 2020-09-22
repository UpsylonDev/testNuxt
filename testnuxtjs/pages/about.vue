<template>
    <div class="fond">

        <Nav></Nav>
        <h1>Test page about
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum quis
            consequuntur officia ad labore? Ducimus repudiandae reprehenderit laborum
            accusantium iure beatae, maiores accusamus reiciendis illo facilis, ullam
            exercitationem, hic debitis? Eaque, ad? Magni, modi iure temporibus illo tempore
            similique maiores alias eligendi. Eveniet, minima? Repellat eius, libero,
            officiis laboriosam ad facere sequi sed, autem quisquam blanditiis fuga rem
            molestias aspernatur. Mollitia nihil odit ea nulla dicta, nostrum minus soluta
            maiores, sequi sunt a aliquam ipsa dolore amet ipsam atque at officiis.
            Quibusdam facilis, suscipit necessitatibus aliquid nisi pariatur ab ipsa?
            Expedita suscipit neque rem temporibus optio distinctio beatae. Dolorem
            laboriosam accusamus ad ut tempora cum dicta fugiat incidunt consequatur velit
            provident, quae libero autem veritatis, culpa rerum quaerat. Dolor, repellat?</p>
        <button @click="changeAll">CHANGE BASE
        </button>
        <button @click="reset">RESET
        </button>
        <button @click="ajoute">INCREMENT
        </button>
        <button @click="changeVal">CHANGE VAL
        </button>
        <!-- <button @click="multiplie">Multiplie</button> -->
        <!-- <button @click="reset">RESET</button> -->
        <!-- <p>{{points}}</p> -->
        <!-- <p>{{ nom }}</p> -->
        <p>
            le compteur depuis son state :
            {{ count }}</p>
        <p>
            le compteur depuis getters :
            {{ compteur }}</p>
        <p>
            Double compteur :
            {{ doubleCompteur }}</p>
        <p>mlanges :
            {{melanges}}</p>
        <p> id utilisateur  : {{ getId}}</p>
        <p>valeur :
            {{ val }}</p>
            <p>id et nom : {{idName}}</p>

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
        computed: {
            // texte() {
            //     return  this.$store.state.compteur.text
            // },
            count() {
                return this.$store.state.compteur.count
            },
            // recuperation des states via les getters
            ...mapGetters ({
                compteur :'compteur/get',
                val : 'getValeur',
                doubleCompteur :'compteur/mutiply',
                melanges : 'compteur/getTotal',
                idName : 'user/getIdAndName',
                getId : 'user/getId',
                // valeurCompteur : 'compteur/get',
                // total : 'compteur/countdouble',

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
            changeAll() {
                this.value = 1
                this.$store.commit('compteur/ADD', this.value)
            },
            ajoute() {
                this.$store.commit('compteur/INCREMENT')
            }
  
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