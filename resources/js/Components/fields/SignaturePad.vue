<template>
    <div class="w-full h-52">

        <VueSignaturePad width="100%" height="100%" ref="signaturePad" />

        <div class="grid grid-cols-2 -mt-2">
            <div class="mt-7 flex space-x-2">
                <button class="rounded-t-full bg-slate-700 text-yellow-200 w-1/2" @click.prevent="save">Save</button>
                <button class="rounded-t-full bg-slate-700 text-yellow-800 w-1/2" @click.prevent="undo">Undo</button>
            </div>
            <div>

            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: "SignaturePad",

    props: {
        // name: {},
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
        const canvas = this.$refs.signaturePad

        console.log(this.name);

        if (this.saved) {
            const data = this.saved[0].item
            console.log('it is');

            this.input = data;
            canvas.fromDataURL(this.input);
        }

    },
    watch: {
        input() {
            this.$emit("input-signature", this.input);
        }
    },
    methods: {
        undo() {
            this.$refs.signaturePad.undoSignature();
        },
        save() {
            const { isEmpty, data } = this.$refs.signaturePad.saveSignature();

            this.input = data
        },
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
