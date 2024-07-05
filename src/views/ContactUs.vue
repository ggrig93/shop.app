<template>
    <div class="main-content main-content-product">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <Breadcrumbs/>
                </div>
            </div>
            <div class="row">
                Contact Information
                We're here to help!
                <p> Call us: 1.888.676.2660, 6am - 6pm PST, Mon-Fri</p>
                <p>Live Chat Help: Ask your question right now to a member of the 6pm Customer Loyalty Team. Go ahead -
                    start a conversation now!</p>

                <p>
                    Email us: cs@6pm.com (When sending us an email, please do so from the email address on your 6pm
                    account or it may result in a delay of assistance.)
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import Breadcrumbs from "@/components/Breadcrumbs";
import {mapGetters} from "vuex";

export default {
    name: "WishList",
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

<style lang="scss" scoped>
.view-all {
    background: var(--bg-color);
}

.wishlist-products {
    min-height: 350px;

    .list-products {
        margin: 0;
    }
}

.empty-wishlist {
    margin-top: 20px;
    text-align: center;

    &_text {
        width: 90%;
        margin: 0 auto;
        text-align: center;
    }
}

.view-all {
    margin-top: 20px;
    border: 1px solid var(--bg-color) !important;
    border-radius: 10px;

    &:hover {
        color: #c09578;
        background: #FFFFFF;
    }
}
</style>