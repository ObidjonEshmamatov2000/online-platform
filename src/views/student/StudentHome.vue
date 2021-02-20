<template>
    <!-- <div>
        <div v-if="user">
            <Navbar :home="'Home'" :links="links"/>
        </div>
        <div v-if="!user">
            <h2 class="my-3">You are not logged in</h2>
        </div>
    </div> -->
    <div>
        <Navbar :home="'Home'" :links="links"/>
        <div class="entrance">
            <Entrance />
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import Entrance from '../../components/Entrance.vue'
import Navbar from '../../components/Navbar'
export default {
    name: "Login",
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
                { name: 'StudentCourses', dir: 'Courses'},
                { name: 'StudentGroups', dir: 'Groups in common'},
            ]
        }
    }
}
</script>