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
        
        onKey: addEventListener("keyup", function(checked){
            if(checked.key == "ArrowLeft"){
                app.leftClick()
            } else if(checked.key == "ArrowRight"){
                app.rightClick()
            }
        }),

        counter: 0,
        interval: null
     
    },
     


    methods :{

        setTimer: function (){
            this.counter += 1

            if (this.counter % 2 !== 0){
                this.interval = setInterval(this.rightClick, 1000);
            } else{
                clearInterval(this.interval)
            }
        
        },


       rightClick: function (){
           this.defaultVueImg += 1

           let limite = (this.immagini.length -1)

           if(this.defaultVueImg > limite){
            this.defaultVueImg = 0
 
           }
           
        },
           
       

       leftClick: function (event){
           
            this.defaultVueImg += -1
            

            let limite = 0

            if(this.defaultVueImg < limite ){
               this.defaultVueImg = (this.immagini.length - 1)
            }
            
       },

       dotClick: function (myPicIndex){
           this.defaultVueImg = myPicIndex 
       },

       count: function (){
           this.counter = 5
       }
       

    
    }

    

})