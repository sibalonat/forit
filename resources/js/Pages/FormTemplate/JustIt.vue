<script setup>
import { computed, defineAsyncComponent, inject, onMounted, reactive, ref } from 'vue'
import Text from "../../Components/fields/Input.vue";
// import Text from "../../Components/fields/Input.vue";
// @/Components/
import Textarea from "../../Components/fields/Textarea.vue";
import FileUpload from "../../Components/fields/FileUpload.vue";
import Select from "../../Components/fields/Select.vue";
import SignaturePad from "../../Components/fields/SignaturePad.vue";
import VDatepicker from "../../Components/fields/VDatepicker.vue";

import { XMarkIcon, SwatchIcon, EllipsisVerticalIcon, EllipsisHorizontalIcon } from '@heroicons/vue/24/solid'


const emit = defineEmits(['layoutChanged', 'contain'])
const proped = defineProps({
    classes: String
})

const colNum = inject('colNum')
const elements = inject('elements')
const formId = inject('formId')

const styleObject = reactive({
    backgroundImage: `url('/images/bgimg.svg')`
})

// const AdminPage = defineAsyncComponent(() =>
//   import('./components/AdminPageComponent.vue')
// )

// defineAsyncComponent


const fieldlist = ref(
    [

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

    ]
)


const components = {
    'Text': Text,
    'Text Area': Textarea,
    'Select': Select,
    'Signature': SignaturePad,
    'Date-Time Picker': VDatepicker,
    'fileUpload': FileUpload,
}

const element = ref(null)

const containerResizedEvent = (e) => {
    emit('contain', e)
}

const layoutUpdatedEvent = (e) => {
    emit('layoutChanged', e)
}

const removeItem = (e) => {
    const index = elements.map(item => item.i).indexOf(e);
    elements.splice(index, 1);
}

const setStateItem = (e) => {
    if (e.stateitem === false) {
        e.stateitem = !e.stateitem
    } else if (e.stateitem === true) {
        e.stateitem = !e.stateitem
    }
}


const getData = (e, dataType, single) => {
    if (e) {
    if (e.target) {
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
                let monitor = single
                let check = Object.keys(monitor).indexOf("save") != -1
                if (!check) {
                    single.save = []
                    single.save.push(reactiveDText)
                } else {
                    single.save[0].item = e.target.value
                }
            }

        }
    }
}
}
const changeData = (e, dataType, single) => {
    if (e) {
        if (dataType === 'fileUpload') {

            const reactiveDtImg = reactive({
                id: e.id,
                formID: e.model_id
            })

            let monitor = single

            let check = Object.keys(monitor).indexOf("save") != -1


            if (!check) {
                console.log('is not');
                monitor.save = []
                monitor.save.push(reactiveDtImg)
            } else {
                console.log('eshte');
                monitor.save.push(reactiveDtImg)
            }
        }
    }
}

const deleteImg = (e, dataType, single) => {
    if (e) {
        if (dataType === 'fileUpload') {
            // console.log(e);
            let monitor = single

            if (e[1] === 'delete') {
                console.log(e[0]);
                // e[0].shift()
                monitor.save.shift()
            }
        }
    }
}

const hideReplace = (e) => {
    e.backCond = !e.backCond
}

// computed
const rowHeight = computed(() => (window.innerWidth - 56) / 12)
const fields = computed(() => fieldlist.value)

onMounted(() => {
    containerResizedEvent, layoutUpdatedEvent, setStateItem, hideReplace, removeItem,
    //data
    getData, changeData, deleteImg,
    colNum, elements, rowHeight, formId
    // components
    XMarkIcon, SwatchIcon, EllipsisVerticalIcon, EllipsisHorizontalIcon
    // form components
    Text, Textarea, FileUpload, Select, SignaturePad, VDatepicker
    fieldlist, fields, components, styleObject

    element.value = element
})

</script>
<template>

    <grid-layout v-model:layout="elements" ref="element" :margin="[40, 50]" :col-num="colNum" :rowHeight="50"
        :autoSize="true" :is-draggable="true" :is-resizable="true" :vertical-compact="true" :use-css-transforms="true"
        @layout-updated="layoutUpdatedEvent" :class="classes">

        <grid-item v-for="item in elements" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i" :key="item.i"
            @container-resized="containerResizedEvent" :is-horizontal-resize="true" :is-vertical-resize="true"
            class="pb-36">
            <div class="flex flex-row bg-center bg-no-repeat bg-contain h-36"
                :style="item.backCond ? styleObject :  'background-image: url()'">
                <div class="relative w-full h-full basis-5/6">
                    <EllipsisVerticalIcon class="w-4 h-4" @click="setStateItem(item)" v-if="!item.field">
                    </EllipsisVerticalIcon>
                    <div class="absolute inset-y-0 top-0 left-0 z-0 min-h-0 overflow-y-auto text-left bg-white rounded-r-lg h-36"
                        :class="item.stateitem ? 'w-11/12 opacity-100 transition-width transition-slowest ease' : 'w-0 opacity-0 transition-width transition-slowest ease-in-out delay-150'"
                        v-if="!item.field">
                        <div class="w-full">
                            <div class="grid grid-cols-5">
                                <div class="col-span-4">
                                    <ul class="grid items-center grid-flow-row grid-cols-1 ml-2">
                                        <li v-for="(fld, i) in fields" :key="i" class="inline-block">
                                            <input type="radio" v-model="item.field" @click="hideReplace(item)"
                                                :value="fld.text" class="inline-block w-3 h-3" :id="`radio-for-${i}`">
                                            <label class="ml-4 text-xs text-black" :for="`radio-for-${i}`">
                                                {{ fld.alias }} field
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <EllipsisHorizontalIcon class="w-3 h-3 mx-auto mt-2 text-black"
                                        @click="setStateItem(item)"> </EllipsisHorizontalIcon>
                                </div>
                            </div>
                        </div>
                    </div>

                    <component :name="item.field" :formId="formId" :is="components[item.field]"
                        @input="getData($event, item.field, item)" @change-file="changeData($event, item.field, item)"
                        @delete-file="deleteImg($event, item.field, item)"
                        @input-signature="signatureData($event, item.field, item)" class="w-full">
                    </component>
                </div>
                <div class="basis-1/6">
                    <XMarkIcon class="w-5 h-5 text-black" @click="removeItem(item.i)"> </XMarkIcon>
                </div>
            </div>

        </grid-item>
    </grid-layout>



</template>

<style scoped>
.vue-grid-layout {
    background: #eee;
}

/* .vue-grid-item:not(.vue-grid-placeholder) {
    background: #ccc;
    border: 1px solid black;
} */

.vue-grid-item .resizing {
    opacity: 0.9;
}

.vue-grid-item .static {
    background: #cce;
}

/* .vue-grid-item .text {
    font-size: 24px;
    text-align: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 100%;
    width: 100%;
} */

/* .vue-grid-item .no-drag {
    height: 100%;
    width: 40%;
} */

/* .vue-grid-item .minMax {
    font-size: 12px;
} */

/* .vue-grid-item .add {
    cursor: pointer;
} */

.vue-draggable-handle {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 0;
    left: 0;
    background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>") no-repeat;
    background-position: bottom right;
    padding: 0 8px 8px 0;
    background-repeat: no-repeat;
    background-origin: content-box;
    box-sizing: border-box;
    cursor: pointer;
}
</style>

