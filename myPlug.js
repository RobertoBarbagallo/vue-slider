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

        defaultVueImg: 2
    },
    methods :{

       rightClick: function (){
           this.defaultVueImg += 1

           let limite = (this.immagini.length -1)

           if(this.defaultVueImg > limite){
            this.defaultVueImg = 0
 
           }
           
        },
           
       

       leftClick: function (){
            this.defaultVueImg += -1
            

            let limite = 0

            if(this.defaultVueImg < limite ){
               this.defaultVueImg = (this.immagini.length - 1)
            }
            
       },

       dotClick: function (myPicIndex){
           this.defaultVueImg = myPicIndex 
       }
    
    }


})