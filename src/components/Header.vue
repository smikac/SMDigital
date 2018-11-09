<template>
    <div>
        <h1>Header title</h1>
        <nav>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/Contact">Contact</router-link></li>       
            </ul>
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
