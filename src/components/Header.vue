<template>
    <div>
        <h1>Header title</h1>

        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <img src="../images/SMDigital_Logo.png" height="40px">

                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <router-link class="navbar-item" to="/">Home</router-link>
                <router-link class="navbar-item" to="/Contact">Contact</router-link>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                    <a class="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">
                        Log in
                    </a>
                    </div>
                </div>
            </div>
        </div>
        </nav>
    </div>
</template>

<script>
export default {
    props:{
        backgroundImage:{
            type:String
        }
    },    
    data () {
        return {
            title: 'NM Logo!',
            mainMenu: [
                {
                    text: "Home",
                    component: "home",
                    isActive: true
                },
                {
                    text: "Contact",
                    component: "contact",
                    isActive: true
                }              
            ],            
        }
    },

}
</script>

<style>
header{
    background-color: green;
    padding: 10px;
}
h1{
    color:#222;
    text-align: center;
}

.background-image{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;    
}
</style>
