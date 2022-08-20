<template>
    <VueSignaturePad  ref="signaturePad" />
    <div>
        <button @click="save">Save</button>
        <button @click="undo">Undo</button>
    </div>
</template>

<script>
// import Vue from 'vue';
// import VueSignaturePad from 'vue-signature-pad';

// Vue.use(VueSignaturePad);

export default {
    name: "SignaturePad",

    props: {
        name: {
            type: String,
            required: true
        },
        formId: Number,
        saved: Array,
    },
    data() {
        return {
            input: null,
            signaturePad: null
        };
    },
    mounted() {
        // console.log(VueSignaturePad);
        // let canvas = this.$refs.signaturePadCanvas;
        // canvas.style.width = "100%";
        // canvas.style.height = "100%";
        // canvas.width = canvas.offsetWidth;
        // canvas.height = canvas.offsetHeight;
        // this.signaturePad = new SignaturePad(canvas);
        // this.signaturePad.onEnd = () => {
        //     if (!this.signaturePad.isEmpty()) {
        //         this.input = this.signaturePad.toDataURL();
        //     }
        // };
        // if (this.value) {
        //     this.input = this.value;
        //     this.signaturePad.fromDataURL(this.input);
        // }
    },
    watch: {
        input() {
            this.$emit("input", this.input);
            console.log(this.input);
        }
    },
    methods: {
        undo() {
            this.$refs.signaturePad.undoSignature();
        },
        save() {
            const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
            console.log(isEmpty);
            console.log(data);
        }
    }
};
</script>

<style scoped>
.signature-pad-body {
    position: relative;
    border: 1px solid #000;
    margin-bottom: 1rem;
}

.signature-pad-body .signature-pad-actions {
    position: absolute;
    bottom: 5px;
    right: 5px;
}
</style>
