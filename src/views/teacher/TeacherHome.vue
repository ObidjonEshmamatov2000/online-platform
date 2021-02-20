<template>
    <div>
        <Navbar :home="'Home'" :links="links"/>
        <Entrance />
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
                { name: 'TeacherCourses', dir: 'Courses'},
                { name: 'TeacherGrades', dir: 'Grades'},
            ],
        }
    },
}
</script>