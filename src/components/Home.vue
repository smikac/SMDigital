<template>
    <div>
        <h1>{{title}}</h1>
        <div class="columns is-mobile">
            <div class="column">
                <div class="notification is-primary has-text-centered">
                    <p class="title">1</p>
                </div>
            </div>
            <div class="column">
                <div class="notification is-primary has-text-centered">
                    <p class="title">2</p>
                </div>
            </div>
            <div class="column">
                <div class="notification is-primary has-text-centered">
                    <p class="title">3</p>
                </div>
            </div>
        </div>    
    </div>    
</template>

<script>
export default {
  data () {
    return {
        title: 'Home Page'
    }
  }
}
</script>

<style>
footer{
    background-color: lightblue;
    padding: 20px;
}
h1{
    color:#222;
    text-align: center;
}
</style>
