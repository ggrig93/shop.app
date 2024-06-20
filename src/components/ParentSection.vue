<template>
    <div>
        <div v-if="item.parent" class="parent-not-null">
            <SectionItem
                :item="item.parent"
            />
        </div>

        <div class="parent-not-parent">
            {{ categoryName(item.name) }}

            <div @click="showMiddleCategory = (showMiddleCategory === item.id) ? null : item.id">
                <div class="show-subCats" v-if="showMiddleCategory === item.id">
                    <i class="fa fa-minus" aria-hidden="true"></i>
                </div>
                <div v-else>
                    <i class="fa fa-plus" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SectionItem from "@/components/SectionItem.vue";

export default {
    name: "ParentSection",
    components: {SectionItem},
    props: {
        item: {
            type: Object
        }
    },
    data() {
        return {
            showMiddleCategory: false,
        }
    },
    watch: {
        showMiddleCategory: {
            handler(val) {
                this.$emit('showSub', val)
            }
        }
    },
    methods: {

        categoryName(names) {
            return names[this.$i18n.locale]
        },
    }
}
</script>

<style lang="scss">
    .search-category-content {
        .parent {
            font-weight: bold; margin-bottom: 10px;
        }
        .parent-not-parent {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
</style>