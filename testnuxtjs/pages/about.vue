<template>
    <div class="fond">
        <Nav></Nav>
        <h1>Test page about </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum quis consequuntur officia ad labore? Ducimus repudiandae reprehenderit laborum accusantium iure beatae, maiores accusamus reiciendis illo facilis, ullam exercitationem, hic debitis?
        Eaque, ad? Magni, modi iure temporibus illo tempore similique maiores alias eligendi. Eveniet, minima? Repellat eius, libero, officiis laboriosam ad facere sequi sed, autem quisquam blanditiis fuga rem molestias aspernatur.
        Mollitia nihil odit ea nulla dicta, nostrum minus soluta maiores, sequi sunt a aliquam ipsa dolore amet ipsam atque at officiis. Quibusdam facilis, suscipit necessitatibus aliquid nisi pariatur ab ipsa?
        Expedita suscipit neque rem temporibus optio distinctio beatae. Dolorem laboriosam accusamus ad ut tempora cum dicta fugiat incidunt consequatur velit provident, quae libero autem veritatis, culpa rerum quaerat. Dolor, repellat?</p>
        <span class="uk-margin-small-right" uk-icon="check"></span>

<a href="" uk-icon="heart"></a>

        <div class="uk-inline">
            <button type="button">Un bouton drop</button>
        <div uk-drop="mode: hover">Autre ererteteter Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio aperiam delectus, ad repudiandae molestiae nemo necessitatibus odio iste quos exercitationem praesentium explicabo corporis aliquam labore minima suscipit consectetur. Quia, at!</div>
</div>
    </div>
</template>

<script>
        import Nav from '../components/Navigation'
    export default {
        components: {
            Nav,
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