export default {
    data() {
        return {
            activeImg: null,
            activeBlock: null,
            hasWishListItem: false
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
        },
        addToWishList(product) {
            const wishList =
              JSON.parse(localStorage.getItem("wishList")) ?
                JSON.parse(localStorage.getItem("wishList")) : [];
            console.log("find", wishList.find(el => el.id === product.id))
            if(wishList.find(el => el.id === product.id)) {
                this.hasWishListItem = true;
                setTimeout(() => { this.hasWishListItem = false }, 1500)
                return;
            }
            wishList.push(product)
            localStorage.setItem('wishList', JSON.stringify(wishList))
            this.$store.commit("setWishList", JSON.parse(localStorage.getItem("wishList")))
        },
        removeWishListItem(idx) {
            const products = JSON.parse(localStorage.getItem("wishList"))
            products.splice(idx,1)
            localStorage.setItem('wishList', JSON.stringify(products))
            this.$store.dispatch('getWishList')
        }

    }
}