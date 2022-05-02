<template>
    <div v-if="$auth.isAuthenticated">
        <p>Welcome {{ $auth.email }}!</p>
        <router-link to="/logout">Logout</router-link>    
        <div class="movie-list">
            <div class="movie" v-for="movie in movies" :key="movie.id">
                <router-link :to="`/movie/${movie.id}`">
                    <h3>{{ movie.title }}</h3>
                    <img :src="`https://apigerard.herokuapp.com/img/movies/thumbnailmk2/img${movie.id}.jpg`">
                    <h3>{{ movie.title }}</h3>
                    <img :src="`https://apigerard.herokuapp.com/img/movies/thumbnailmk2/img${movie.id}.jpg`">
                </router-link>
            </div>
        </div>
    </div>
    <div v-else>
        <p>Please login:</p>
        <router-link to="/login">Login</router-link>
        <router-link to="/register">Register</router-link>
    </div>
</template>

<script>
export default {
    created(){
        if(this.$auth.isAuthenticated){
            this.fetchMovies();
        }
    },
    data() {
        return {
            movies: [],
        }
    },
    methods: {
        async fetchMovies() {
            const response = await fetch('https://apigerard.herokuapp.com/api/peliculas', { headers: {Authorization: `Bearer ${this.$auth.access_token}`}});
            this.movies = (await (response.json())).data;
        },
    },
}
</script>

<style scoped>
.movie-list {
    display: grid;
    grid-template-columns: repeat(3,300px);
    gap: 1em;
}

.movie {
    max-width: 300px;
}
</style>