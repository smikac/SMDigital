<template>
    <footer>
        <h1>{{title}}</h1>
    </footer>
</template>

<script>
export default {
  data () {
    return {
        title: 'NM Footer!'
    }
  },

}
</script>

<style>
footer{
    background-color: lightblue;
    padding: 10px;
}
h1{
    color:#222;
    text-align: center;
}
</style>
