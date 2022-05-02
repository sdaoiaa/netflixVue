<template>
    <div>
        <input v-model="email" placeholder="Your email">
        <input v-model="password" placeholder="Your password">
        <button @click="login">Login</button>
    </div>
</template>

<script>

export default {
    created(){
        this.$auth.$subscribe((mutation, state) => {
            if (state.isAuthenticated) {
                this.$router.push('/');
            }
        })
    },
    data() {
        return {
            email: 'user@user.com', password: 'useruser'
            // email: '', password: ''
        }
    },
    methods: {
        login() {
            this.$auth.login(this.email, this.password);
        }
    }
}
</script>