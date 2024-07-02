<template>
    <div>
        <input type="checkbox" :id="label + $attrs.id" :value="inputValue" v-model="internalModel"
               :checked="ids.includes(inputValue)">
        <label class="label-text" :for="label + $attrs.id">{{ label }}</label>
    </div>

</template>

<script>
export default {
    name: "CategoryCheckbox",
    data() {
        return {
            internalModel: this.ids.includes(this.inputValue)
        };
    },
    props: {
        label: String,
        value: Array,
        inputValue: [String, Number],
        ids: {
            type: Array,
        }
    },
    watch: {
        ids(newIds) {
            this.internalModel = newIds.includes(this.inputValue);
        },
        internalModel(newModel) {
            this.$emit('update:model', newModel);
        }
    },
    computed: {
        model: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit("input", value);
            },
        },
    },
}
</script>