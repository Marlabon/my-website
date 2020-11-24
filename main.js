const app = Vue.createApp({
    data(){
        return{
            specialBackground: false
        }
    },
    methods:{
        toggleBackground(){
            this.specialBackground = !this.specialBackground;
        }
    },
    computed:{
        specialBackgroundStyle(){
            if(this.specialBackground === true){
                return {specialBackground: this.specialBackground};
            }
        }
    }
});
app.mount('#app');