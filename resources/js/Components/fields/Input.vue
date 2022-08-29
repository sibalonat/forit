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
            saved: {},
            // value: { default: null },
            disabled: { default: false },
        },
        data() {
            return {
                input: null,
            };
        },
        created() {
            if (this.saved) {
                this.input = this.saved[0].item
            }
        },
        watch: {
            input() {
                this.$emit("input", this.input);
            },
        },
    };
</script>
