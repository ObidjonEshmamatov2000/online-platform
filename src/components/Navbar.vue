<template>
    <div>

    
    <div class="container-fluid p-0">
        <nav class="navbar p-0">
            <div class="container-fluid">
                <span class="navbar-head ml-4 white">Online Learning Platform</span>
                <div class="navbar-links-div">
                    <ul v-if="links" class="navbar-links">
                        <li v-for="(item, i) in links" :key="i" class="navbar-link">
                            <router-link :to="{name: item.name}">{{ item.dir }}</router-link>
                        </li>
                    </ul>
                    <ul v-if="!links" class="navbar-link">
                        <a href="javascript:void(0)" @click.prevent="handleClick">Logout</a>
                    </ul>
                </div>
            </div>
        </nav>
    </div>


     </div>
</template>

<script>
export default {
    // props: ['links', 'home'],
    props: {
        links: {
            type: Array,
            default: null
        },
        home: {
            type: String,
            default: 'Home'
        }
    },
    data() {
        return {

        }
    },
    methods: {
        handleClick() {
            localStorage.removeItem('token');
            this.$router.push({name: 'Login'})
        }
    },

    created() {
        // console.log(this.links.[0].name);
    }
}
</script>

<style scoped lang="scss">
    .white {
        color: white;
        font-size: 22px;
    }
    a {
        color: #fff;
        text-decoration: none;
        display: inline-block;
        padding: 20px;
        transition: .4s all;

        &:hover {
            background-color: #006094;
            color: #fff;
        }
    }
    .navbar {
        box-sizing: border-box;
        // max-width: 1400px;
        margin: 0 auto;
        background-color: #0085B2;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: 0 1px 2px black;
    }
    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        /* justify-content: space-between; */
        align-items: center;     
        
        li {
            display: inline-block;
            margin-right: 15px;

            a{
                text-decoration: none;
            }
        }
        
    }
</style>