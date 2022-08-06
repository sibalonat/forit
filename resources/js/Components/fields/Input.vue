<template>
    <input :name="name" :type="type" v-model.lazy="input" :disabled="disabled" />
    <!-- {{ input }} -->
</template>

<script>
    export default {
        name: "Input",
        props: {
            name: {},
            type: {},
            // value: { default: null },
            disabled: { default: false },
        },
        data() {
            return {
                input: null,
            };
        },
        created() {
            this.input = this.value;
        },
        watch: {
            // value() {
            //     this.input = this.value;
            //     console.log(this.input);
            // },
            input() {
                this.$emit("input", this.input);
            },
        },
    };
</script>
