Vue.component('product-review', {
    template: `
        <div></div>
    `,
    data: {
        return {
            name: null
        }
    }
})

Vue.component('productDetails', {
    props: {
        details: {
            type: Array,
            required: true
        }
    },
    template:
        `
        <ul>
            <li v-for='detail in details'>{{detail}}</li>
        </ul>
        `
})

Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    template: 
        `<div class="product">
            <div class="product-image">
                <img v-show='inventory > 10' v-bind:src="image" alt="">
                <img v-show='inventory <= 10' v-bind:src="oosImage" v-bind:alt="product + ' ' + altText">
            </div>
            <div class="product-info">
                <h1>{{title}}</h1>
                <span>{{sale}}</span>
                <br>
                <p>Shipping: {{shipping}}</p>
                <p v-if='inStock > 10'>In Stock</p>
                <p v-else-if='inStock <= 10 && inStock > 0'>Almost sold out</p>
                <p v-else v-bind:class='{outOfStock: !inStock}'>Out of Stock</p>

                <productDetails :details='details'></productDetails>

                <p>You can order these {{product}} in the following marvelous colors:</p>
                <div 
                    v-for='(variant, index) in variants' 
                    v-bind:key='variant.variantId'
                    class="color-box"
                    v-bind:style='{backgroundColor: variant.variantColor}'
                    v-on:mouseover='updateProduct(index)'>
                </div>
                <div>
                    <br>
                    <a :href="link">Here you can find more {{product}}</a> <!-- 'v-bind:href' has a shortcut to simply ':href' -->
                    <br>

                    <button v-on:click='addToCart'
                            v-bind:disabled='!inStock'
                            v-bind:class='{disabledButton: !inStock}'>Add to Cart</button>
                    <button v-on:click='removeFromCart'>Delete </button>
                    <br>
                </div>
            </div>
    
        </div>`,
    data() {
        return {
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
            ]
        }
        
    },
    methods: {
        addToCart: function() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantID)
        },
        removeFromCart: function() {
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantID)
             
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
        },
        shipping() {
            if (this.premium) {
                return 'free'
            }
            return '2.99$'
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
        premium: true,
        cart: []
    },
    methods: {
        updateCart: function(id) {
            this.cart.push(id)
        },
        removeFromCart(id) {
            for(var i = this.cart.length - 1; i >= 0; i--) {
                if (this.cart[i] === id) {
                    this.cart.splice(i, 1);
                }
            }
        }
    }
    
})