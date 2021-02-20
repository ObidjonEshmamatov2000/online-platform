<template>
    <div>
        <Navbar :home="'Home'" :links="links"/>
        <div class="form-div">
            <div class="card">
                <form class="form" @submit.prevent="handleSubmit">
                    <div v-if="error" class="alert alert-danger">
                        {{ error }}
                    </div>
                    <h1 class="form-title">Please Sign in</h1>
                    <div class="input-div"> 
                        <label for="inputEmail" class="inputLabel">Email Adress</label>
                        <input id="inputEmail" v-model="email" type="email" placeholder="enter your email adress" required class="form-control">
                    </div>
                    
                    <div class="input-div"> 
                        <label for="inputPassword" class="inputLabel">Password</label>
                        <input id="inputPassword" v-model="password" type="password" placeholder="enter your password" required class="form-control">
                    </div>
                    <button type="submit" class="btn btn-block mt-2">Sign in</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Navbar from '../components/Navbar'
export default {
    name: "Login",
    components: {
        Navbar
    },
    data() {
        return {
            links: [
                { name: 'Login', dir: 'Login'},
            ],
            email: '',
            password: '',
            error: ''
        }
    },
    methods: {
        handleSubmit() {
            try {
                const response = axios.post('login', {
                    email: this.email,
                    password: this.password
                });
                console.log(response);
                localStorage.setItem('token', response.data.token);
                this.$store.dispatch('user', response.data.user);
                if (this.email === 'manager@gmail.com')
                    this.$router.push({name: "ManagerHome"})
                else  if (this.email === 'teacher@gmail.com') 
                    this.$router.push({name: 'TeacherHome'})
                else if (this.email === 'student@gmail.com') 
                    this.$router.push({name: 'StudentHome'})

                this.links = null;
            } catch (e) {
                console.log(e)
                // this.error = 'Invalid username/password';
                this.error = e;
            }
            
        }
    }
}
</script>

<style scoped lang="scss">
    .text-center {
        text-align: center;
    }
    .container {
        max-width: 1400px;
        margin: 0 auto;
    }
    .form-div {
        height: 90vh;
        position: relative
    }
    .card {
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        // box-shadow: 0 0 1px rgb(66, 62, 62);
        width: 300px;
        max-width: 430px;
        padding: 35px 15px;
        border-radius: 4px;
    }
    .form {
        .form-title {
            font-size: 24px;
            margin-bottom: 20px;
        }
        .input-div {
            margin: 10px 0;
        }
        .form-control {
            display: block;
            width: 100%;
            padding: 5px; 
            border-radius: 3px;  
        }
        .inputLabel {
            display: inline-block;
            font-family: Verdana, Geneva, sans-serif;
            margin: 8px 0;
        }

        
    }
</style>