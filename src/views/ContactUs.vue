<template>
    <div class="main-content main-content-contact-us">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <Breadcrumbs/>
                </div>
            </div>
            <div class="row">
                <h2>Contact Information We're here to help!</h2>
                <p> Call us: 1.888.676.2660, 6am - 6pm PST, Mon-Fri</p>
                <p>Live Chat Help: Ask your question right now to a member of the 6pm Customer Loyalty Team. Go ahead - start a conversation now!</p>
                <p>Email us: cs@6pm.com (When sending us an email, please do so from the email address on your 6pm account or it may result in a delay of assistance.)</p>
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

<style lang="scss" scoped>
    .main-content-contact-us {
        padding-bottom: 220px;
        p {
            margin-top: 20px;
            font-weight: bold;
        }
    }
</style>