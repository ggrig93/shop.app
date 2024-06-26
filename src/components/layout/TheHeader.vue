<template>
    <div>
        <header class="header style7 the-header">
            <TopBar/>
            <div class="container">
                <HeaderMain
                    :allCategories="allCategories"
                    :brands="brands"
                />
            </div>
            <HeaderNav class="rows-space-20"/>
        </header>
        <HeaderMobile
            :allCategories="allCategories"
            :brands="brands"
        />
    </div>
</template>

<script>
import HeaderMobile from "@/components/layout/header/HeaderMobile";
import TopBar from "@/components/layout/header/TopBar";
import HeaderMain from "@/components/layout/header/HeaderMain";
import HeaderNav from "@/components/layout/header/HeaderNav";

export default {
    name: "TheHeader",
    components: {HeaderNav, HeaderMain, TopBar, HeaderMobile},
    computed: {
        allCategories() {
            return this.$store.state.allCategories
        },
        brands() {
            return this.$store.state.brands
        },
    },
    async created() {
        await this.$store.dispatch('getAllCategories')
        await this.$store.dispatch('getBrands')
    },


}
</script>