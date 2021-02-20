<template>
    <div>
        <Navbar :home="'Home'" :links="links"/>
        <router-view></router-view>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'; 
import Navbar from '../../components/Navbar'
export default {
    name: "Login",
    components: {
        Navbar
    },
    data() {
        return {
            links: [
                { name: 'ManagerEvents', dir: 'Events'},
                { name: 'ManagerCourses', dir: 'Courses'},
                { name: 'ManagerStudents', dir: 'Add Students'},
                { name: 'ManagerStudentGroups', dir: ' Create Groups'},
            ],
        }
    },
    computed: {
        ...mapGetters(['user'])
    }
}
</script>