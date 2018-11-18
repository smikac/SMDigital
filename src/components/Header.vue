<template>
    <div>
        <section>
            <nav class="navbar">
                <div class="navbar-brand">
                    <a role="button" v-bind:class="[isActive ? 'is-active' : '']" @click="toggleClass()" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>   
                </div>    
                <div v-bind:class="[isActive ? 'is-active' : '']" class="navbar-menu">
                    <div class="navbar-end basic-menu">
                        <router-link class="navbar-item" to="/">Home</router-link>
                        <router-link class="navbar-item" to="/Contact">Contact</router-link>
                    </div>
                </div>
 
            </nav>
        </section>        
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
            isActive: false,
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
    methods: {
        toggleClass: function(event){
            // Check value
            if(this.isActive){
            this.isActive = false;
            }else{
            this.isActive = true;
            }    
        }
    }
}
</script>

<style lang="scss">
.basic-menu {
    a{
        position: relative;
        transition: all 0.3s ease 0s;
        color: #232332;
        font-size: 1.2rem;
        font-weight: 600;
        letter-spacing: 1px;
        position: relative;
        text-transform: uppercase;    
        padding: 30px 0;
        margin-right: 2rem;
        
        &:hover, &.router-link-exact-active{
            background-color: #fff;
            &::before{
                opacity:1;
                width:15px;
            }
        }

        &:hover{
            color: #999;
        }
        &:last-child{
            margin-right: 3rem;
        }
    }
    > a:last-child:after{
        display:none
    }
    > a{
        &::before{
            background: #666666 none repeat scroll 0 0;
            bottom: 23px;
            content: "";
            height: 1px;
            left: 0;
            margin: auto;
            opacity: 0;
            position: absolute;
            right: 0;
            transition: all 0.3s ease 0s;
            width: 0px;
        }
    }
}
@media only screen and (max-width: 1087px) {
    .navbar-menu{
        padding:0;
        .basic-menu {
            a{
                width: 100%;
                border-bottom: #f1f1f1 1px solid;
                padding: 1rem;

                &:before{
                    display: none;
                }
            }
        }
    }
}
</style>
