<template>
    <div>
        <ul
            v-for="section in sections"
            :key="section.id"
        >
            <li>
                <div class="first-section">
                    <span class="child-category">
                        <CategoryCheckbox
                            :id="`category_${section.id}`"
                            :ids="selectedSubCategories"
                            :label="categoryName(section.name)"
                            :input-value="section.id"
                            class="checkbox-color"
                            @change.native="updatedBoxes"
                        />
                    </span>
                    <div
                        v-if="section.sub_sections.length"
                        @click="showCategories = (showCategories === section.id) ? null : section.id"
                    >
                        <div class="show-subCats" v-if="showCategories === section.id">
                            <i class="fa fa-minus" aria-hidden="true"></i>
                        </div>
                        <div v-else>
                            <i class="fa fa-plus" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
                <transition>
                    <div
                        class="children"
                        v-show="showCategories === section.id"
                        v-if="section.sub_sections.length"
                    >
                        <SubSections
                            :sections="section.sub_sections"
                            :ids="selectedSubCategories"
                            @updated="passSelectedBoxes"
                            :selectedSubCategories="selectedSubCategories"
                        />
                    </div>
                </transition>
            </li>
        </ul>
    </div>
</template>

<script>

import CategoryCheckbox from "@/components/custom-input/CategoryCheckbox.vue";

export default {
    name: "SubSections",
    components: {CategoryCheckbox},
    props: {
        sections: {
            default: () => null
        },
        selectedSubCategories: {
            default: () => []
        },
    },
    data() {
        return {
            showCategories: null,
        }
    },

    methods: {
        categoryName(names) {
            return names[this.$i18n.locale]
        },

        updatedBoxes(event) {
            this.$emit('updated',  Number(event.target.value))
        },

        passSelectedBoxes(value) {
            this.$emit('updated', value)
        }
    }
}
</script>

<style lang="scss">


</style>