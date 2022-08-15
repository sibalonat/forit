<script setup>
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import { Head } from '@inertiajs/inertia-vue3';

</script>

<template>

    <Head title="Dashboard" />
    <BreezeAuthenticatedLayout>
        <template #header>
            <h2 class="text-xl font-semibold leading-tight text-gray-800">
                Dashboard
            </h2>
        </template>

        <div class="py-12">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    <form @submit.prevent="store" enctype="multipart/form-data">
                        <div class="p-6 bg-white border-b border-gray-200" v-if="elements.length">
                            <div class="flex border-b border-gray-200" v-for="(el, a) in elements" :key="el.id">
                                <div class="w-4/5">
                                    <div class="grid gap-4" :class="el.name" v-if="el.cols.length">
                                        <div class="text-black" :class="el.cols[index].type"
                                            v-for="(col, index) in el.cols" :key="col.id">
                                            <!-- {{ el.cols[index] }} -->
                                            <div class="grid grid-cols-2">

                                                <div class="col-auto">
                                                    <select v-model="el.cols[index]" v-if="!el.cols[index].type">
                                                        <option v-for="cl in selectedCol" :key="cl.id" :value="cl">
                                                            {{ cl.name }}
                                                        </option>
                                                    </select>
                                                </div>
                                                <div class="col-span-2" v-if="el.cols[index].type">
                                                    <ul class="grid items-center grid-flow-row grid-cols-1"
                                                        v-if="!col.field">
                                                        <li v-for="(fld, i) in fields" :key="i" class="inline-block">
                                                            <input type="radio" v-model="col.field" :value="fld.text"
                                                                class="inline-block" :id="`radio-for-${i}`">
                                                            <label class="ml-4 text-xs text-black"
                                                                :for="`radio-for-${i}`">
                                                                {{ fld.alias }} field
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="col-span-2">

                                                    <component :is="col.field"
                                                        @input="getData($event, col.field, el, index)"
                                                        @ChangeFile="changeData($event, col.field, el, index)"
                                                        :name="col.field" class="px-4 py-3 rounded-lg" :formId="f.id">
                                                    </component>

                                                </div>
                                            </div>
                                            <div class="justify-end float-right w-32">
                                                <button class="w-full text-white bg-black rounded-lg"
                                                    @click="deleteColumn(el, col)">-</button>
                                            </div>
                                        </div>
                                    </div>
                                    <p v-else>No columns</p>
                                </div>
                                <div class="w-1/5">
                                    <div class="grid grid-cols-2">
                                        <select @change="changeAttribute($event, a)">
                                            <option v-for="(gr, u) in grid" :key="u" :value="gr.name">
                                                {{ gr.name }}
                                            </option>
                                        </select>

                                        <button type="button" class="w-full text-white bg-slate-900"
                                            @click="addColumn(el)">
                                            Add Column
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p v-else>No Row created</p>
                        <div class="grid grid-cols-2">
                            <button type="button" class="w-full text-white bg-gray-800" @click="addONe">+</button>
                        </div>
                        <br /><br /><br />
                        <div class="grid grid-cols-1">
                            <button type="submit" class="w-20 text-white bg-gray-800">Add Form</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </BreezeAuthenticatedLayout>
</template>


<script>
import Input from "./../Components/fields/Input.vue";
import Textarea from "./../Components/fields/Textarea.vue";
import FileUpload from "./../Components/fields/FileUpload.vue";
import Select from "./../Components/fields/Select.vue";
import SignaturePad from "./../Components/fields/SignaturePad.vue";
import VDatepicker from "./../Components/fields/VDatepicker.vue";
import { reactive } from '@vue/reactivity';
// import { ref } from 'vue';
export default {
    components: {
        'Text': Input,
        'Text Area': Textarea,
        'Select': Select,
        'Signature': SignaturePad,
        'Date-Time Picker': VDatepicker,
        'fileUpload': FileUpload,
    },
    props: {
        f: Object,
    },

    data() {
        return {
            indentifier: 1,
            value: {},
            tempJson: [],
            input: null,
            form: this.$inertia.form({
                form_builder_json: [],
            }),
            grid: [
                { name: 'grid-cols-1', id: 1 },
                { name: 'grid-cols-2', id: 2 },
                { name: 'grid-cols-3', id: 3 },
                { name: 'grid-cols-4', id: 4 },
                { name: 'grid-cols-5', id: 5 },
            ],
            cols: [
                { id: 1, name: 'auto', type: ['col-auto', 'p-2', 'border rounded border-black'], field: null },
                { id: 2, name: 'span1', type: ['col-span-1', 'p-2', 'border rounded border-black'], field: null },
                { id: 3, name: 'span2', type: ['col-span-2', 'p-2', 'border rounded border-black'], field: null },
                { id: 4, name: 'span3', type: ['col-span-3', 'p-2', 'border rounded border-black'], field: null },
                { id: 4, name: 'span3', type: ['col-span-3', 'p-2', 'border rounded border-black'], field: null },
                { id: 5, name: 'span4', type: ['col-span-4', 'p-2', 'border rounded border-black'], field: null },
                { id: 6, name: 'span5', type: ['col-span-5', 'p-2', 'border rounded border-black'], field: null },
                { id: 7, name: 'span-auto', type: ['col-span-auto', 'p-2', 'bg-gray-800'], field: null },
                { id: 8, name: 'end1', type: ['col-end-1', 'p-2', 'bg-gray-800'], field: null },
                { id: 9, name: 'end2', type: ['col-end-2', 'p-2', 'bg-gray-800'], field: null },
            ],
            fieldlist: [
                {
                    name: 'TextInput',
                    text: 'Text',
                    alias: 'Text',
                    hasOptions: false,
                    isRequired: false,
                    isHelpBlockVisible: false,
                    isPlaceholderVisible: true,
                },
                // {
                // 	name: 'NumberInput',
                // 	text: 'Number',
                // 	hasOptions: false,
                // 	isRequired: false,
                // 	isHelpBlockVisible: false,
                // 	isPlaceholderVisible: false,
                // },
                {
                    name: 'TextArea',
                    text: 'Text Area',
                    alias: 'Textarea',
                    hasOptions: false,
                    isRequired: false,
                    isHelpBlockVisible: false,
                    isPlaceholderVisible: false,
                },
                {
                    name: 'SignaturePad',
                    text: 'Signature',
                    alias: 'Signature',
                    hasOptions: false,
                    isRequired: false,
                    isHelpBlockVisible: false,
                    isPlaceholderVisible: false,
                },
                {
                    name: 'SelectList',
                    text: 'Select',
                    alias: 'Select List',
                    hasOptions: true,
                    isRequired: false,
                    isHelpBlockVisible: false,
                    isPlaceholderVisible: false,

                },
                {
                    name: 'FileUpload',
                    text: 'fileUpload',
                    alias: 'File Upload',
                    hasOptions: false,
                    isRequired: false,
                    isHelpBlockVisible: false,
                    isPlaceholderVisible: false,
                },
                // {
                // 	name: 'TimePicker',
                // 	text: 'Time Picker',
                // 	hasOptions: false,
                // 	isRequired: false,
                // 	isHelpBlockVisible: false,
                // 	isPlaceholderVisible: false,
                // },
                {
                    name: 'DatetimePicker',
                    text: 'Date-Time Picker',
                    alias: 'Date-Time',
                    hasOptions: false,
                    isRequired: false,
                    isHelpBlockVisible: false,
                    isPlaceholderVisible: false,
                },
            ],
            elements: [],
        }
    },

    created() {
        this.input = this.value;
        console.log(this.f.id);
    },

    computed: {
        selectedCol() {
            return this.cols
        },
        fields() {
            return this.fieldlist
        },
    },


    methods: {
        addONe() {
            this.elements.push({ id: this.indentifier++, name: 'grid gap-4 grid-cols-4', cols: [] })
        },

        changeAttribute(e, s) {
            let val = e.target.value
            this.elements[s].name = 'grid gap-4 ' + val + ''
        },

        addColumn(item) {
            item.cols.push({ id: this.indentifier++ })
        },

        nameAttr() {
            console.log(this.$attrs);
        },

        store() {

            this.form.form_builder_json = JSON.stringify(this.tempJson)

            this.form.put(`/update/${this.f.id}`)

        },

        // getData(e, dataType, row, i, col, o) {
        getData(e, dataType, row, o) {

            if (e) {
                if (e.target) {
                    // console.log(dataType);
                    if (dataType === 'Text') {
                        let identif = 0;
                        var lastItem = e.target.value;
                        let plus = identif++;

                        const reactiveDText = reactive({
                            id: (identif === 0) ? plus : identif,
                            type: dataType,
                            item: lastItem,
                        })

                        let valueOfId = reactiveDText.id;
                        let exists = Object.values(reactiveDText).includes(valueOfId);
                        if (exists) {
                            let monitor = row.cols[o]
                            let check = Object.keys(monitor).indexOf("save") != -1
                            if (!check) {
                                // this.tempJson.push
                                row.cols[o].save = []
                                row.cols[o].save.push(reactiveDText)
                                let first = row.cols[o]
                                // console.log(first);
                                this.tempJson.push(first)
                                // console.log(this.tempJson);

                            } else {
                                console.log('eshte');
                                row.cols[o].save[0].item = e.target.value
                                // console.log(this.tempJson);
                                //  this.tempJson
                            }
                        }

                    }
                }
            }
        },
        changeData(e, dataType, row, o) {
            if (e) {
                if (dataType === 'fileUpload') {
                    // condition
                    // console.log(dataType);

                    const reactiveDtImg= reactive({
                        id: e.id,
                        formID: e.model_id,
                        type: dataType,
                        name: e.name,
                    })

                    let monitor = row.cols[o]

                    let check = Object.keys(monitor).indexOf("save") != -1

                    console.log(check);
                    if (!check) {
                        // console.log('is not');
                        monitor.save = []
                        monitor.save.push(reactiveDtImg)
                        this.tempJson.push(monitor)
                    } else {
                        // console.log('eshte');

                        row.cols[o].save[0].id = e.id
                        row.cols[o].save[0].formID = e.model_id
                        row.cols[o].save[0].name = e.name
                    }
                }
            }
            console.log(e);

        },

        deleteColumn(parent, child) {
            const fromEl = this.elements.indexOf(parent)
            // const fromCol = this.elements[fromEl].cols.indexOf(child)
            this.elements[fromEl].cols.splice(child, 1);
        }

    },

    unmounted() {
        if (this.f.form_builder_json === null && this.tempJson.length === 0) {
            console.log('is null');

            axios.delete(route('form.destroy', { form: this.f.id }))
        }
    }

}
</script>
