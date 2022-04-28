export default {
    data() {
        return {
            activeImg: null,
            activeBlock: null,
        }
    },
    computed: {
        colors() {
            return this.product.gallery.map(el => ({...el.color, block: el.block}))
        },
        coloredProduct() {
            return this.product.gallery.find(el => el.block === this.block)
        },
        img: {
            get() {
                return this.activeImg ? this.activeImg : this.product?.gallery[0].images[0].image
            },
            set(val) {
                this.activeImg = val
            }
        },
        block: {
            get() {
                return this.activeBlock ? this.activeBlock : this.product.gallery[0].block
            },
            set(val) {
                this.activeBlock = val
            }
        }
    },
    methods: {
        setActiveImg(src) {
            this.activeImg = src
        },
        setActiveColor(block) {
            this.activeBlock = block
            this.activeImg = this.product.gallery.find(el => el.block === block).images[0].image
        },
        removeCartItem(idx) {
            const products = JSON.parse(localStorage.getItem("shopProducts"))
            products.splice(idx,1)
            localStorage.setItem('shopProducts', JSON.stringify(products))
            this.$store.dispatch('getShopProducts')
        },
        addToCart(product) {
            const shopProducts =
              JSON.parse(localStorage.getItem("shopProducts")) ?
                JSON.parse(localStorage.getItem("shopProducts")) : [];
            shopProducts.push(product)
            localStorage.setItem('shopProducts', JSON.stringify(shopProducts))
            this.$store.commit("setShopProducts", JSON.parse(localStorage.getItem("shopProducts")))
        }
    }
}