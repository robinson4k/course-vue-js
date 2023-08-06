const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Learning Vue.js',
            vueLink: 'https://vuejs.org'
        }
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random()
            if (randomNumber < 0.5) {
                return 'Learn more'
                
            } else {
                return 'Master Vue'
            }
        }
    },
})

app.mount('#user-goal')