var app = new Vue({
    el: '#app',
    data: {
        product: 'socks',
        image: './assets/vmSocks-green-onWhite.jpg',
        oosImage: './assets/oos-vmSocks-green-onWhite.jpg',
        altText: 'Out of Stock',
        link: 'https://www.amazon.de/s?k=socken&__mk_de_DE=ÅMÅŽÕÑ&ref=nb_sb_noss_2',
        inventory: 8,
        onSale: true,
        details: ['100% cotton', '0% polyester', '110% superstylisch']
    }
})