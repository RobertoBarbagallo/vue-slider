const app = new Vue({

    el: `#vueTarget`,
    data: {

        immagini: [
            { file: 'img/img1.jpg' },
            { file: 'img/img2.jpg' },
            { file: 'img/img3.jpg' },
            { file: 'img/img4.jpeg' },
            { file: 'img/img5.jpg' },
            { file: 'img/img6.jpeg' }

        ],

        defaultVueImg: 2,     
        counter: 0,
        interval: null
     
    },
     


    methods :{

        setTimer: function (){
            this.counter += 1

            if (this.counter % 2 !== 0){
                this.interval = setInterval(this.rightClick, 2000);
            } else{
                clearInterval(this.interval)
            }
        },

       rightClick: function (){

           let newIndex = this.defaultVueImg + 1
           let limite = (this.immagini.length -1)

           if(newIndex > limite){
            newIndex = 0
           }
           this.defaultVueImg = newIndex
        },
           
       leftClick: function (){
           
            let newIndex = this.defaultVueImg - 1
            let limite = 0

            if(newIndex < limite ){
               newIndex = (this.immagini.length - 1)
            }
            this.defaultVueImg = newIndex     
       },

       dotClick: function (myPicIndex){
           this.defaultVueImg = myPicIndex 
       },

       count: function (){
           this.counter = 5
       }
       

    
    },

    mounted (){
        document.querySelector(".sliderContainer").focus()
    }

    

})