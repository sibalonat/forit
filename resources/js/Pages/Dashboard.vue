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
                    <div class="p-6 bg-white border-b border-gray-200" v-if="elements.length">
                    <div class="flex border-b border-gray-200" v-for="(el, a) in elements" :key="el.id">
                        <div class="w-4/5">
                            <div class="grid gap-4" :class="el[a].name" v-if="el.cols.length">
                                <div class="text-black" :class="el.cols[index].type" v-for="(col, index) in el.cols" :key="col.id">
                                <div class="grid grid-cols-2">
                                    <div class="col-auto">
                                        <select v-model="el.cols[index]" @change="reflectValues(col)">
                                            <option v-for="cl in selectedCol" :key="cl.id" :value="cl">
                                            {{ cl.name }}
                                            </option>
                                        </select>
                                    </div>
                                    <div class="col-span-2">
                                        {{ !col.field === false }}
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
                                        <component :is="col.field" :name="col.field" class="px-4 py-3 rounded-full"> </component>
                                    </div>
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
                                <button class="w-full text-white bg-slate-900" @click="addColumn(el)">
                                    Add Column
                                </button>
                            </div>
                        </div>
                    </div>
                    </div>
                    <p v-else>No Row created</p>
                    <button type="button" class="w-1/2 text-white bg-gray-800" @click="addONe">+</button>
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

    computed: {
        selectedCol() {
            return this.cols
        },
        fields() {
            return this.fieldlist
        }
    },

    methods: {
        addONe() {
            this.elements.push({ id: this.indentifier++, name: 'grid gap-4 grid-cols-4', cols: [] })
        },
        addColumn(item) {
            console.log(item);
            item.cols.push({id: this.indentifier++, field: null })
        },

        onClickDefault () {

        },
        reflectValues(col) {
            console.log(col);
        }
    },

}
</script>
