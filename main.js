var app = new Vue({
    el: '#app',
    data: {
        brand: 'SuperVue',
        product: 'Socks',
        image: './assets/vmSocks-green-onWhite.jpg',
        oosImage: './assets/oos-vmSocks-green-onWhite.jpg',
        altText: 'Out of Stock',
        link: 'https://www.amazon.de/s?k=socken&__mk_de_DE=ÅMÅŽÕÑ&ref=nb_sb_noss_2',
        inventory: 100,
        inStock: true,
        onSale: true,
        details: ['100% cotton', '0% polyester', '110% superstylisch'],
        variants: [
            {
                variantID: 1,
                variantColor: 'green',
                variantImage: './assets/vmSocks-green-onWhite.jpg',
                variantInventory: 99
            },
            {
                variantID: 2,
                variantColor: 'blue',
                variantImage: './assets/vmSocks-blue-onWhite.jpg',
                variantInventory: 8
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
        updateProduct: function(variantImage) {
            this.image = variantImage
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        }
    }
})