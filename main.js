var app = new Vue({
    el: '#app',
    data: {
        brand: 'SuperVue',
        product: 'Socks',
        selectedVariant: 0,
        oosImage: './assets/oos-vmSocks-green-onWhite.jpg',
        altText: 'Out of Stock',
        link: 'https://www.amazon.de/s?k=socken&__mk_de_DE=ÅMÅŽÕÑ&ref=nb_sb_noss_2',
        inventory: 100,
        onSale: false,
        details: ['100% cotton', '0% polyester', '110% superstylisch'],
        variants: [
            {
                variantID: 0,
                variantColor: 'green',
                variantImage: './assets/vmSocks-green-onWhite.jpg',
                variantQuantity: 99,
                onSale: true
            },
            {
                variantID: 1,
                variantColor: 'blue',
                variantImage: './assets/vmSocks-blue-onWhite.jpg',
                variantQuantity: 0,
                onSale: false
            }
        ],
        cart: 0
    },
    methods: {
        addToCart: function() {
            this.cart += 1
        },
        removeFromCart: function() {
            if (this.cart > 0) {
                this.cart -= 1
            }  
        },
        updateProduct: function(index) {
            this.selectedVariant = index
            console.log(index)
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        sale() {
            if (this.variants[this.selectedVariant].onSale) {
                return this.brand + ' ' + this.product + 'are in Sale right now!'
            }
            
            return 'Sorry, no Sale for ' + this.brand + ' ' + this.product + ' right now!'
        }
    }
})