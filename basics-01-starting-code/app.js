const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Learning Vue.js',
            vueLink: 'https://vuejs.org'
        }
    }
})

app.mount('#user-goal')