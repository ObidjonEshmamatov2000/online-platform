<template>
    <div>
        <Navbar :home="'Home'" :links="links"/>
        <div class="entrance">
            <Entrance />
        </div>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar"
import Entrance from "@/components/Entrance"
export default {
    props: {
        user: {
            type: String,
            default: null
        }
    },
    components: {
        Navbar,
        Entrance
    },
    data() {
        return {
            links: [
                { name: 'Login', dir: 'Login'},
            ],
        } 
    },
    created() {
        if(!this.$store.state.user) {
            this.$router.push({name: 'Login'});
        }
        
    }

}
</script>

<style scoped>
    
</style>