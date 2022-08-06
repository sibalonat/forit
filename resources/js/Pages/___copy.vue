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
                            <div class="grid gap-4" :class="el[a].name" v-if="el.cols.length">
                                <div class="text-black" :class="el.cols[index].type" v-for="(col, index) in el.cols" :key="col.id">
                                <div class="grid grid-cols-2">

                                    <div class="col-auto">
                                        <!-- v-if="el.cols[index].type" -->
                                        <!-- {{ !el.cols[index].type }} -->
                                        <!-- <select v-model="el.cols[index]" @change="reflectValues(col)"> -->
                                        <select v-model="el.cols[index]" v-if="!el.cols[index].type">
                                            <option v-for="cl in selectedCol" :key="cl.id" :value="cl">
                                            {{ cl.name }}
                                            </option>
                                        </select>
                                    </div>
                                    <div class="col-span-2" v-if="el.cols[index].type">
                                        <!-- {{ !col.field === false }} -->
                                        <ul class="grid items-center grid-flow-row grid-cols-1" v-if="!col.field">
                                            <li v-for="(fld, i) in fields" :key="i" class="inline-block">
                                                <input type="radio" v-model="col.field" :value="fld.text" class="inline-block" :id="`radio-for-${i}`">
                                                <label class="ml-4 text-xs text-white" :for="`radio-for-${i}`">
                                                {{ fld.text }}
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-span-2">
                                        <component :is="col.field" @input="getData($event, col.field)" v-model="form_builder_json" :name="col.field" class="px-4 py-3 rounded-lg"> </component>
                                        <!-- <component :is="col.field" @input.down="getData" v-model="form_builder_json" :name="col.field" class="px-4 py-3 rounded-full"> </component> -->
                                        <!-- <component :is="col.field" @update-date="getData" :name="col.field" class="px-4 py-3 rounded-full"> </component> -->
                                    </div>
                                </div>
                                <div class="justify-end float-right w-32">
                                    <button class="w-full bg-white rounded-lg" @click="deleteColumn(el, col)">-</button>
                                    <!-- <button class="w-full bg-white rounded-lg" @click="deleteColumn(el.cols[index])">-</button> -->
                                </div>
                                </div>
                            </div>
                            <p v-else>No columns</p>
                        </div>
                        <div class="w-1/5">
                            <div class="grid grid-cols-2">
                                <select v-model="el[a]">
                                    <option v-for="gr in grid" :key="gr.id" :value="gr">{{ gr.name }}</option>
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
                        <!-- @click="getData" -->
                        <!-- <button type="button"  >getData</button> -->
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
import Input from "../Components/fields/Input.vue";
import Textarea from "../Components/fields/Textarea.vue";
import FileUpload from "../Components/fields/FileUpload.vue";
import Select from "../Components/fields/Select.vue";
import SignaturePad from "../Components/fields/SignaturePad.vue";
import VDatepicker from "../Components/fields/VDatepicker.vue";
export default {
    components: {
        'Text': Input,
        'Text Area': Textarea,
        'Select': Select,
        'Signature': SignaturePad,
        'Date-Time Picker': VDatepicker,
        'File Upload': FileUpload,
    },
    data() {
        return {
            indentifier: 1,
            value: {},
            input: null,
            form: this.$inertia.form({
                form_builder_json: null,
            }),
            tempJson: [],
            grid: [
                { name: 'grid-cols-1', id: 1, cols: [] },
                { name: 'grid-cols-2', id: 2, cols: [] },
                { name: 'grid-cols-3', id: 3, cols: [] },
                { name: 'grid-cols-4', id: 4, cols: [] },
                { name: 'grid-cols-5', id: 5, cols: [] },
            ],
            cols: [
                { id: 1, name: 'auto', type: ['col-auto', 'p-4', 'bg-gray-800'] },
                { id: 2, name: 'span1', type: ['col-span-1', 'p-4', 'bg-gray-800'] },
                { id: 3, name: 'span2', type: ['col-span-2', 'p-4', 'bg-gray-800'] },
                { id: 4, name: 'span3', type: ['col-span-3', 'p-4', 'bg-gray-800'] },
                { id: 4, name: 'span3', type: ['col-span-3', 'p-4', 'bg-gray-800'] },
                { id: 5, name: 'span4', type: ['col-span-4', 'p-4', 'bg-gray-800'] },
                { id: 6, name: 'span5', type: ['col-span-5', 'p-4', 'bg-gray-800'] },
                { id: 7, name: 'span-auto', type: ['col-span-auto', 'p-4', 'bg-gray-800'] },
                { id: 8, name: 'end1', type: ['col-end-1', 'p-4', 'bg-gray-800'] },
                { id: 9, name: 'end2', type: ['col-end-2', 'p-4', 'bg-gray-800'] },
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
    create() {
        this.input = this.value;
        // console.log(this.input);
    },

    computed: {
        selectedCol() {
            return this.cols
        },
        fields() {
            return this.fieldlist
        }
                // getDT: {
        //     get: function () {
        //         return this.tempObj;
        //     },

        //     set: function (value) {
        //         //  console.log(value);
        //          this.tempObj = value;
        //          console.log(this.tempObj);
        //         //  console.log(type);
        //     },
        // },
    },

    // watch: {
    //     value() {
    //         this.input = this.value;
    //         console.log(this.input);
    //     },
    //     input() {
    //         this.$emit("input", this.input);

    //     },
    // },

    methods: {
        addONe() {
            this.elements.push({ id: this.indentifier++, name: 'grid gap-4 grid-cols-4', cols: [] })
        },
        addColumn(item) {
            // console.log(item);
            item.cols.push({id: this.indentifier++, field: null })
        },

        store() {

            // this.form.form_builder_json = this.$refs.gott.$data.fBuilder.formData

            console.log(this.form.form_builder_json);


            this.form.post('/formcreate')
        },

        // onClickDefault () {

        // },
        // reflectValues(col) {
        //     console.log(col);
        // },
        getData(e, dataType) {
            console.log(e);
            console.log(dataType);
            this.tempJson.push(e);
            console.log(this.tempJson);

                                // id: identif ? identif++ : identif,
                    // (area == 1)
                // var indentif = (indentif == 0) ? identif++ : (indentif > 0) ? indentif : indentif;
                    // id: (identif === 0) ? identif : identif++,

                                    // console.log(this.tempJson);

                // if (lastItem) {
                //     console.log('it doesnt exist');
                //     this.tempJson.push(reactiveDText);
                //     console.log(this.tempJson);
                // } else {
                //     console.log('it exist');
                //     reactiveDText.item = lastItem
                // }
                // if (!reactiveDText.id) {
                //     console.log('it doesnt exist');
                //     this.tempJson.push(reactiveDText);
                //     console.log(this.tempJson);
                // } else {
                //     console.log('it exist');
                //     reactiveDText.item = lastItem
                // }
                // if(reactiveDText.id)
                // var lastItem = this.tempJson.pop();
                // console.log(reactiveDText);
                // console.log(lastItem);
                // console.log('is text');
            // this.form.form_builder_json.push([e])
            // console.log(this.form.form_builder_json);
        },
        getData(e, dataType) {
            // console.log(e.target.value);
            if (e) {
                if (e.target) {
                    // console.log(e.target);
                    // console.log(e.target.value);
                    if (dataType === 'Text') {
                        // let tempArray = [];
                        // let tempCollection = [];
                        // tempArray.push(e);
                        // console.log(e);
                        // console.log(e.target.value);

                        // console.log(this.getDT);

                        let identif = 0;

                        // var lastItem = tempArray.pop();
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
                            if (this.form.form_builder_json.length === 0) {
                                this.form.form_builder_json.push(reactiveDText);
                            } else if (this.form.form_builder_json.length > 0) {
                                console.log('is perfect');
                                this.form.form_builder_json[0].item = e.target.value
                            }
                            // console.log(this.form.form_builder_json.length);
                            // if (this.form.form_builder_json.length > 0) {
                            //     console.log('is perfect');
                            // }
                        }

                        // console.log(reactiveDText);

                        // form
                        // console.log(valueOfId);

                        // this.form.form_builder_json.push(reactiveDText);

                        // if (this.form.form_builder_json.item.length > 0 < 1 && exists) {

                        //     console.log(exists);
                        //     this.form.form_builder_json.item = lastItem;

                        // }

                        console.log(this.form.form_builder_json);

                        // tempCollection.push(this.form.form_builder_json);

                        // console.log(this.form.form_builder_json);

                        // let valueOfId = this.form.form_builder_json.id;

                        // let exists = Object.values(tempCollection[0]).includes(valueOfId);
                        // if (exists) {
                        //     tempCollection[0].item = lastItem
                        // }
                        // console.log(tempCollection[0]);
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

}
</script>
