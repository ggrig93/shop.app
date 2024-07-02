<template>
    <div style="display: flex; flex-direction: column-reverse">
        <div>
            {{categoryName(item.name)}}
        </div>

        <SectionItem
            v-if="item.parent"
            :item="item.parent"
        />
    </div>
</template>

<script>
import SectionItem from "@/components/SectionItem.vue";

export default {
    name: "SectionItem",
    components: {SectionItem},
    props: {
        item: {
            type: Object
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

</style>