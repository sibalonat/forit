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
                    <form @submit.prevent="store">
                    <div class="p-6 bg-white border-b border-gray-200" v-if="elements.length">
                    <div class="flex border-b border-gray-200" v-for="(el, a) in elements" :key="el.id">
                        <div class="w-4/5">
                            <div class="grid gap-4" :class="el.name" v-if="el.cols.length">
                                <div class="text-black" :class="el.cols[index].type" v-for="(col, index) in el.cols" :key="col.id">
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
                                        <ul class="grid items-center grid-flow-row grid-cols-1" v-if="!col.field">
                                            <li v-for="(fld, i) in fields" :key="i" class="inline-block">
                                                <input type="radio" v-model="col.field" :value="fld.text" class="inline-block" :id="`radio-for-${i}`">
                                                <label class="ml-4 text-xs text-black" :for="`radio-for-${i}`">
                                                {{ fld.text }}
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-span-2">
                                        <!-- <component :is="col.field" @input="getData($event, col.field, el, a, el.cols[index], index)" :name="col.field" class="px-4 py-3 rounded-lg"> </component> -->
                                        <component :is="col.field" @input="getData($event, col.field, el, a, el.cols[index], index)" :name="col.field" class="px-4 py-3 rounded-lg"> </component>
                                    </div>
                                </div>
                                <div class="justify-end float-right w-32">
                                    <button class="w-full text-white bg-black rounded-lg" @click="deleteColumn(el, col)">-</button>
                                </div>
                                </div>
                            </div>
                            <p v-else>No columns</p>
                        </div>
                        <div class="w-1/5">
                            <div class="grid grid-cols-2">
                                <select @change="changeAttribute($event, a)">
                                    <option
                                    v-for="(gr, u) in grid"
                                    :key="u"
                                    :value="gr.name">
                                    {{ gr.name }}
                                    </option>
                                </select>

                                <button type="button" class="w-full text-white bg-slate-900" @click="addColumn(el)">
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
export default {
    components: {
        'Text': Input,
        'Text Area': Textarea,
        'Select': Select,
        'Signature': SignaturePad,
        'Date-Time Picker': VDatepicker,
        'File Upload': FileUpload,
    },
    props: {
    // eslint-disable-next-line vue/prop-name-casing
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
	          		hasOptions: false,
	          		isRequired: false,
	          		isHelpBlockVisible: false,
	          		isPlaceholderVisible: false,
		        },
                {
	          		name: 'SignaturePad',
	          		text: 'Signature',
	          		hasOptions: false,
	          		isRequired: false,
	          		isHelpBlockVisible: false,
	          		isPlaceholderVisible: false,
		        },
                {
	          		name: 'SelectList',
	          		text: 'Select',
	          		hasOptions: true,
	          		isRequired: false,
	          		isHelpBlockVisible: false,
	          		isPlaceholderVisible: false,

		      	},
                {
	          		name: 'FileUpload',
	          		text: 'File Upload',
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
            this.elements[s].name = 'grid gap-4 '+val+''
        },

        addColumn(item) {
            item.cols.push({id: this.indentifier++ })
        },

        store() {
            // this.form.form_builder_json = this.$refs.gott.$data.fBuilder.formData
            // console.log(this.tempJson);
            // this.tempJson
            this.form.form_builder_json = JSON.stringify(this.tempJson)

            // console.log(this.form.form_builder_json);
            this.form.put(`/update/${this.f.id}`)
            // this.form.put(`/update/${this.form.id}`, {
            //     onSuccess: () => {
            //         this.form.reset('password', 'photo'),
            //     }
            //     onSuccess: () => this.form.reset('password', 'photo'),
            //
            // })
            // this.form.post('/create')
        },

        // getData(e, dataType, row, i, col, o) {
        getData(e, dataType, row, i, col, o) {
            // console.log(row);
            // // console.log(i);
            // console.log(col);
            // console.log(o);
            // let indexFromArr = row.indexOf(col)
            // console.log(indexFromArr);

            if (e) {
                if (e.target) {
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

        deleteColumn(parent, child) {
            const fromEl = this.elements.indexOf(parent)
            // const fromCol = this.elements[fromEl].cols.indexOf(child)
            this.elements[fromEl].cols.splice(child, 1);
        }

    },

    unmounted() {
        if (this.f.form_builder_json === null) {
            console.log('is null');

            axios.delete(`/delete/${this.f.id}`).then(response => {
                console.log(response);
            })
        }
    }

}
</script>
