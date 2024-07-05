<template>
    <div class="main-content main-content-contact-us">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <Breadcrumbs/>
                </div>
            </div>
            <div class="row">
                <h2>{{ $t('ContactInformation') }}</h2>
                <p> {{ $t('callUs') }}: +374-94-88-07-04</p>
                <p>{{ $t('emailUs') }}: salebemine@gmail.com </p>
            </div>
        </div>
    </div>
</template>

<script>
import Breadcrumbs from "@/components/Breadcrumbs";
import {mapGetters} from "vuex";

export default {
    name: "contactUs",
    components: {Breadcrumbs},
    computed: {
        ...mapGetters({"design": "settings"}),
        styleObject: function () {
            return {
                '--bg-color': this.design ? this.design.main_color : null,
            }
        },
    },
    created() {

    },
}
</script>

<style lang="scss">
    .main-content-contact-us {
        height: 100vh;
        padding: 0;
        p {
            margin-top: 20px;
            font-weight: bold;
        }
    }
    #app {
        height: 100vh;
        display: flex;
        flex-direction: column;
    }
</style>