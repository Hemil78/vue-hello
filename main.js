
//Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

//Aggiungere alla pagina un’immagine, presa anch’essa da un data.


const app = new Vue({
        el: '#root',
        data: {
        happyDay : "Good Morning World !",
        logo: 'https://fr.cdn.v5.futura-sciences.com/buildsv6/images/wide1920/6/8/c/68ce9326b3_122220_terre-espace-vitesse-02.jpg'
 
        },
        methods: {
                cambioSlide() {
                        this.logo = "https://carraro1927.com/site/wp-content/themes/carraro/img/home/pro-banner-w-desktop.jpg",
                        this.happyDay = "Are you Ready ?"
                }
        }
});
             
                        



