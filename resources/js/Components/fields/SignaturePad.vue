<template>
    <div class="w-full h-52">
        <!-- , dotSize, minWidth, maxWidth -->
        <!-- <VueSignaturePad ref="signaturePad" :options="{ onBegin, onEnd }" /> -->
        <VueSignaturePad
        width="100%"
        height="100%"
        ref="signaturePad" />
        <!-- @input="input" -->
        <div class="grid grid-cols-2 -mt-2">
            <!-- -mb-14 -->
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
        name: {
            type: String,
            required: true
        },
        formId: Number,
        saved: Array,
    },
    data() {
        return {
            // options: {
            //     dotSize: null,
            //     minWidth: null,
            //     maxWidth: null
            // },
            input: null,
            signaturePad: null
        };
    },
    computed: {
        entireObj: {
            get() {

            },
            set(newvl) {
                console.log(newvl);
            }
        }
    },
    mounted() {
        const data = this.saved[0].item
        const canvas = this.$refs.signaturePad

        // console.log(data);
        // console.log(canvas);

        if (data) {
            this.input = data;
            canvas.fromDataURL(this.input);
        }
    },
    watch: {
        input() {
            this.$emit("input-signature", this.input);
            // console.log(this.input);
        }
    },
    methods: {
        undo() {
            this.$refs.signaturePad.undoSignature();
        },
        save() {
            const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
            // console.log(isEmpty);
            // console.log(data);
            this.input = data
        },
        // onBegin() {
        //     console.log('=== Begin ===');
        //     console.log(this.$refs.signaturePad);
        //     // console.log(this.$refs.signaturePad.options.dotSize);

        //     // this.$refs.signaturePad.options.dotSize = (0.5 + 2.5) / .15
        //     // this.$refs.signaturePad.options.dotSize = (0.5 + 27.5) / .15
        //     this.$refs.signaturePad.options.minWidth = 97.5
        //     this.$refs.signaturePad.options.maxWidth = 297.5
        //     this.$refs.signaturePad.options.penColor = '#ff0000'
        //     console.log(this.$refs.signaturePad.options);
        //     // dotSize: (0.5 + 2.5) / 2,
        // },
        // onEnd() {
        //     console.log('=== End ===');
        // }
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
