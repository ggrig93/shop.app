<template>
    <div class="about">
        <div class="main-content main-content-about">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <Breadcrumbs/>
                    </div>
                    <div class="brand-logo">
                        <div class="img" v-if="brandCategory.length">
                            <img :src="brandCategory[0].products[0].brand.avatar" alt="">
                        </div>
                        <div class="img" v-else>
                            <img src="../assets/images/default.webp" alt="">
                        </div>
                    </div>
                    <div class="parent-category-section col-lg-12">
                        <ul
                            v-for="section in brandCategory" :key="section.id"
                            class="parent-category"
                        >
                            <li class="parent">
                                <a
                                    @click="selectCategory(section.id)"
                                    class="pointer"
                                >
                                    <div class="img" v-if="section.products.length && section.products[0].avatar">

                                        <img :src="section.products[0].avatar" alt="">
                                    </div>
                                    <div class="img" v-else>
                                        <img src="../assets/images/default.webp" alt="">
                                    </div>
                                    <span>{{ categoryName(section.name) }}</span>
                                </a>
                            </li>
                            <li
                                v-for="sub_sub in section.sub_sections" :key="sub_sub.id"
                                class="pointer child"
                            >
                                <a
                                    @click="selectCategory(sub_sub.id)"
                                    :title="sub_sub.name"
                                >
                                    <span>{{ categoryName(sub_sub.name) }}</span>
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Breadcrumbs from "@/components/Breadcrumbs";
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
    name: 'Brand',
    components: {Breadcrumbs},
    data() {
        return {}
    },
    computed: {
        ...mapGetters({brandCategory: "brandCategory"}),
    },
    created() {
        this.getBrandCategory(this.$route.params.id)
    },
    methods: {
        ...mapMutations(["setCategory"]),
        ...mapActions(["getBrandCategory"]),

        selectCategory(id) {
            this.setCategory([id])
            if (id !== this.$route.query['filter[categories]']) {
                this.$router.replace({name: 'Products', query: {'filter[categories]': [id] }})
            }
        },

        categoryName(names) {
            return names[this.$i18n.locale]
        }
    }
}
</script>

<style lang="scss">
    .brand-logo {
        width: 100%;
        display: flex;
        align-items: center;
        border-top: 1px solid #dddddd;
        border-bottom: 1px solid #dddddd;
        margin-bottom: 30px;
        padding: 20px;
        .img {
            width: 220px;
            height: 140px;
            img {
                width: 100%;
                object-fit: cover;
                height: 100%;
            }
        }
    }
    .parent-category-section {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        .parent-category {
            list-style: none;
            margin-bottom: 20px;
            padding: 10px;
            border: 1px solid #dddddd;
            margin-right: 20px;
            width: calc(100% / 3 - 20px);
            li.parent {
                a {
                    line-height: 41px;
                    color: #000000;
                    text-transform: capitalize;
                    position: relative;
                    font: 600 18px knockout, helvetica, sans-serif;
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    .img {
                        img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                    }
                }
            }
            li.child {
                margin-top: 15px;
                display: flex;
                justify-content: center;
                a {
                    display: block;
                    line-height: 41px;
                    color: #000000;
                    text-transform: capitalize;
                    position: relative;
                    font: 500 16px knockout, helvetica, arial, sans-serif;
                }
            }

        }
    }

    @media screen and (max-width: 1200px) {
        .parent-category-section {
            .parent-category {
                width: calc(100% / 2 - 20px);

            }
        }
    }

</style>