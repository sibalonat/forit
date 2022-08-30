<script setup>
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import { Head } from '@inertiajs/inertia-vue3';

import { Vue3ToggleButton } from 'vue3-toggle-button'

import '../../../node_modules/vue3-toggle-button/dist/style.css'

onMounted(() => {
    BreezeAuthenticatedLayout, Vue3ToggleButton
    Head
})

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
                    <Vue3ToggleButton v-model:isActive="isActive" :handleColor="'#cc00cc'" :track-height="'20px'"
                        :handleDiameter="'20px'" :trackWidth="'5%'"> </Vue3ToggleButton>
                    <p @on-change="toggle">Value: {{  isActive  }}</p>

                    <form @submit.prevent="store" enctype="multipart/form-data">
                        <div class="p-6 bg-white border-b border-gray-200" v-if="elements.length">
                            <div class="flex border-b border-gray-200" v-for="(el, a) in elements" :key="el.id">
                                <div class="w-4/5">
                                    <div class="grid" :class="el.name" v-if="el.cols.length">

                                        <div class="text-black" :class="col.type" v-for="(col, index) in el.cols"
                                            @mouseover="col.hover = true" @mouseleave="col.hover = false" :key="col.id">
                                            <div class="grid grid-cols-5 content-center">

                                                <div class="col-auto" v-if="!col.type">
                                                    <select @change="changeColAttribute($event, index, a)">
                                                        <option v-for="(cl, y) in selectedCol" :key="y"
                                                            :value="cl.type">
                                                            {{  cl.name  }}
                                                        </option>
                                                    </select>
                                                </div>

                                                <div class="col-span-2" v-if="col.type && !col.field">
                                                    <ul class="grid items-center grid-flow-row grid-cols-1">
                                                        <li v-for="(fld, i) in fields" :key="i" class="inline-block">

                                                            <input type="radio" v-model="col.field" :value="fld.text"
                                                                class="inline-block" :id="`radio-for-${i}`">
                                                            <label class="ml-4 text-xs text-black"
                                                                :for="`radio-for-${i}`">
                                                                {{  fld.alias  }} field
                                                            </label>
                                                        </li>
                                                    </ul>

                                                </div>

                                                <div class="col-span-4" v-if="col.field">

                                                    <component :is="col.field"
                                                        @input="getData($event, col.field, el, index)"
                                                        @change-file="changeData($event, col.field, el, index)"
                                                        @delete-file="deleteImg($event, col.field, el, index)"
                                                        @input-signature="signatureData($event, col.field, el, index)"
                                                        :name="col.field" class="px-4 py-3 rounded-lg" :formId="f.id"
                                                        :saved="col.save">
                                                    </component>

                                                </div>
                                                <div class="w-full h-full col-start-5 content-center"
                                                    v-if="col.hover && col.field">
                                                    <button @click="spanCol(col.type, index, a)" type="button"
                                                        class=" bg-slate-900 text-orange-300 text-3xl flex justify-center text-center w-full rounded-lg ">
                                                        <span class=" text-base place-self-center ">+</span> >
                                                    </button>
                                                    <br>
                                                    <div class="justify-end float-right w-full">
                                                        <button class="w-full text-white bg-black rounded-lg"
                                                            @click="deleteColumn(el, col)">
                                                            -
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p v-else>No columns</p>
                                </div>
                                <div class="w-1/5">
                                    <div class="grid grid-cols-4">

                                        <p class=" bg-black text-center text-3xl text-slate-50">{{  el.name.split(" ")[2].split("-")[2] }}</p>

                                        <button type="button" class="w-full col-span-3 text-white bg-slate-900"
                                            @click="addColumn(el)">
                                            Add Column
                                        </button>

                                        <div class="col-span-4">
                                            <button type="button" class="w-full bg-black text-orange-200"
                                                @click="gridRowPlus(el, el.name, a)">
                                                <p class="-rotate-90 w-1 mx-auto">&#62;</p>
                                            </button>
                                            <br>
                                            <button type="button" class="w-full bg-black text-orange-200"
                                                @click="gridRowMinus(el, el.name, a)">
                                                <p class="-rotate-90 w-1 mx-auto">&lt;</p>
                                            </button>
                                        </div>
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
import { onMounted } from '@vue/runtime-core';
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
            headers: {
                'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf_token"]').content
            },
            indentifier: 1,
            isActive: true,
            value: {},
            input: null,
            form: this.$inertia.form({
                form_builder_json: [],
            }),

            cols: [
                { name: 'auto', type: ['col-auto', 'p-2', 'border rounded border-black'] },
                { name: 'span1', type: ['col-span-1', 'p-2', 'border rounded border-black'] },
                { name: 'span2', type: ['col-span-2', 'p-2', 'border rounded border-black'] },
                { name: 'span3', type: ['col-span-3', 'p-2', 'border rounded border-black'] },
                { name: 'span4', type: ['col-span-4', 'p-2', 'border rounded border-black'] },
                { name: 'span5', type: ['col-span-5', 'p-2', 'border rounded border-black'] },
                { name: 'span-auto', type: ['col-span-auto', 'p-2', 'bg-gray-800'] },

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
        console.log(this.f.form_builder_json !== null);

        // console.log(this.f.form_builder_json);
        // console.log(this.elements.length);

        if (this.f.form_builder_json !== null) {
            this.elements = JSON.parse(this.f.form_builder_json)
        }

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


        changeColAttribute(e, c, a) {

            let val = e.target.value

            const withoutCommas = val.replaceAll(',', ' ');

            this.elements[a].cols[c].type = withoutCommas
        },

        addColumn(item) {
            console.log(item);
            item.cols.push({ id: this.indentifier++, field: null, hover: false })
        },

        nameAttr() {
            console.log(this.$attrs);
        },

        store() {

            // this.form.form_builder_json = JSON.stringify(this.tempJson)
            this.form.form_builder_json = JSON.stringify(this.elements)

            // console.log(this.form.form_builder_json.length);

            // this.form.put(`/update/${this.f.id}`)
            this.form.put(route('form.update', { form: this.f.id }), this.headers)
        },

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
                                // let first = row.cols[o]
                                // console.log(first);
                                // this.tempJson.push(first)
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

                    const reactiveDtImg = reactive({
                        id: e.id,
                        formID: e.model_id
                    })

                    let monitor = row.cols[o]

                    let check = Object.keys(monitor).indexOf("save") != -1


                    if (!check) {
                        console.log('is not');
                        monitor.save = []
                        monitor.save.push(reactiveDtImg)
                        // this.tempJson.push(monitor)
                    } else {
                        console.log('eshte');
                        monitor.save.push(reactiveDtImg)
                    }

                }
            }

        },
        signatureData(e, dataType, row, o) {
            if (e) {
                if (dataType === 'Signature') {
                    console.log('is signature');
                    console.log(e);
                    let identif = 0;
                    var lastItem = e;
                    let plus = identif++;
                    const reactiveDtSign = reactive({
                        id: (identif === 0) ? plus : identif,
                        item: lastItem,
                    })

                    let valueOfId = reactiveDtSign.id;
                    let exists = Object.values(reactiveDtSign).includes(valueOfId);
                    if (exists) {
                        let monitor = row.cols[o]
                        let check = Object.keys(monitor).indexOf("save") != -1
                        if (!check) {
                            // this.tempJson.push

                            row.cols[o].save = []
                            row.cols[o].save.push(reactiveDtSign)
                            // let first = row.cols[o]
                            // console.log(first);
                            // console.log(this.tempJson);

                        } else {
                            console.log('eshte');
                            row.cols[o].save[0].item = e
                            // console.log(this.tempJson);
                            //  this.tempJson
                        }
                    }

                    console.log(row.cols[o]);
                }
            }
        },

        deleteImg(e, dataType, row, o) {
            if (e) {
                if (dataType === 'fileUpload') {
                    // console.log(e);
                    let monitor = row.cols[o]

                    if (e[1] === 'delete') {
                        console.log(e[0]);
                        // e[0].shift()
                        monitor.save.shift()
                    }
                }
            }
        },

        deleteColumn(parent, child) {
            const fromEl = this.elements.indexOf(parent)
            // const fromCol = this.elements[fromEl].cols.indexOf(child)
            this.elements[fromEl].cols.splice(child, 1);
        },

        toggle(file) {
            console.log(file);
            isActive = !isActive;
        },
        spanCol(e, i, a) {
            const arrayClassToCop = e.split(" ")

            const classToChange = arrayClassToCop[0].split("-")

            let semiFinal = parseInt(classToChange[2]) + 1

            let teamPlay = classToChange[0].concat('-', classToChange[1], '-', semiFinal)

            let final = teamPlay.concat(
                ' ', arrayClassToCop[1],
                ' ', arrayClassToCop[2],
                ' ', arrayClassToCop[3],
                ' ', arrayClassToCop[4]
            )
            this.elements[a].cols[i].type = final
            // console.log(final);
        },
        gridRowPlus(el, it, s) {
            const arrayClassToRow = it.split(" ")[2].split("-")[2]

            if (arrayClassToRow < 7) {

                let int = parseInt(arrayClassToRow) + 1

                this.elements[s].name = 'grid gap-4 grid-cols-' + int + ''
                console.log(el);
            }


        },
        gridRowMinus(el, it, s) {
            const arrayClassToRow = it.split(" ")[2].split("-")[2]

            console.log(arrayClassToRow);

            if (arrayClassToRow > 2) {

                let int = parseInt(arrayClassToRow) - 1

                this.elements[s].name = 'grid gap-4 grid-cols-' + int + ''
                console.log(el);
            }

        }

    },

    unmounted() {
        if (this.f.form_builder_json === null && this.elements.length === 0) {
            // axios.delete(route('form.destroy', { form: this.f.id }), this.headers)
        }
    }

}
</script>
