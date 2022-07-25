<template>
    <div class="v-datepicker">
        <input type="hidden" :name="name" :id="name" :value="date"/>
        <v-date-picker v-model="date" :name="name" value-type="format" format="yyyy-MM-dd" @update:modelValue="onThing" :placeholder="placeholder"></v-date-picker>
        <!-- @change="$emit('update-date', date)" -->
        <!-- <v-date-picker v-model="date" :name="name" value-type="format" format="yyyy-MM-dd" @change="$emit('input', date)" :placeholder="placeholder"></v-date-picker> -->
        <!-- {{ date }} -->
    </div>
</template>

<script>
    // import DatePicker from 'vue2-datepicker';

    import Datepicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css'
    export default {
        name: "VDatepicker",
        components: {
            "v-date-picker": Datepicker,
        },
        props: {
            name: {
                type: String,
                required: true,
            },
            value: {
                type: String,
                default: null,
            },
            placeholder: String,
        },
        data() {
            return {
                date: null,
            };
        },
        created() {
            if (this.value) {
                this.date = new Date(this.value);
            }
        },
        methods: {
            onThing() {
                // console.log(this.date);
                this.$emit('update-date', this.date)
            }
        }
    };
</script>
