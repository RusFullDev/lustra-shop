export const usePiniaStore = defineStore('pinia',{
    state(){
        return{
            likedProducts:[],
            basket:[]
        }
    },
    actions:{
        toogleLikeProduct(product){
            const index = this.likedProducts.findIndex(p=>p.id == product.id)
            if(index == -1){
                this.likedProducts.push(product)
            }
            else{
                this.likedProducts.splice(index,1)
            }
        },
        toogleAddProduct(product){
            const index = this.basket.findIndex(p=>p.id == product.id)
            if(index == -1){
                this.basket.push(product)
            }
            else{
                this.basket.splice(index,1)
            }
        }
    },

    persist:true
})
