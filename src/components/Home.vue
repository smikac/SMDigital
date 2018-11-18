<template>
    <div>
        <section class="hero is-info is-fullheight">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <div class="column is-12">
                        <img src="../images/SMDigital_Logo.png">
                        <h2>Software development company</h2>
                        <p>
                            $this is the best software platform for running an internet business. We handle billions of dollars every year for forward-thinking businesses around the world.
                        </p>
                    </div>
                </div>
            </div>
        </section> 
        <instagram-app /> 
    </div>
</template>

<script>
/* Components */
import Instagram from './Instagram.vue';

export default {
  components:{
    'instagram-app':Instagram 
  },    
  data () {
    return {
        title: 'Home Page'
    }
  }
}
</script>

<style scoped>
.hero{
    background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(https://unsplash.it/1200/900?random) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;    
}

h2{
    font-size: 3.5rem;
    font-weight: 700;
    letter-spacing: 0.2rem;
    margin: 0;
    margin: 2rem 0rem;
    font-family: 'Poppins', sans-serif;
    color: #fff;
    font-style: normal;
    line-height: 1.2;    
    text-transform: uppercase;
}

p{
    color: #fff;
    margin: 0;
    text-transform: capitalize;
    margin-bottom: 2rem;
    font-weight: normal;
    line-height: 2.6rem;    
}
</style>
