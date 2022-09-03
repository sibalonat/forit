<script setup>
import { computed, inject, onMounted, ref } from 'vue'
import { XMarkIcon, SwatchIcon, EllipsisVerticalIcon } from '@heroicons/vue/24/solid'


const emit = defineEmits(['layoutChanged', 'contain'])
const proped = defineProps({
    classes: String
})

const element = ref(null)

const containerResizedEvent = (e) => {
    console.log(e);
    emit('contain', e)
}

const layoutUpdatedEvent = (e) => {
    console.log(e);
    emit('layoutChanged', e)
}

const setStateItem = (e) => {
    // console.log(e);
    if (e.stateitem === false) {
        e.stateitem = !e.stateitem
    }
}

// computed
const rowHeight = computed(() => (window.innerWidth - 56) / 12)

const colNum = inject('colNum')
const elements = inject('elements')

onMounted(() => {
    containerResizedEvent, layoutUpdatedEvent, setStateItem
    colNum, elements, rowHeight
    // components
    XMarkIcon, SwatchIcon, EllipsisVerticalIcon

    element.value = element
    console.log(proped.classes);
})

</script>
<template>

    <grid-layout v-model:layout="elements" ref="element" :margin="[40, 50]" :col-num="colNum" :rowHeight="50"
        :autoSize="true" :is-draggable="true" :is-resizable="true" :vertical-compact="true" :use-css-transforms="true"
        @layout-updated="layoutUpdatedEvent" :class="classes">

        <grid-item v-for="item in elements" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i" :key="item.i"
            @container-resized="containerResizedEvent" :is-horizontal-resize="true" :is-vertical-resize="true" class=" pb-36 ">
            <!-- class=" pb-36 " -->
            <div class="flex flex-row h-4/5 pb-8">
                <div class="basis-5/6 relative w-full h-full">

                    <EllipsisVerticalIcon class="h-4 w-4" @click="setStateItem(item)"></EllipsisVerticalIcon>
                    <!-- h-full -->
                    <div class="absolute top-0 left-0 min-h-0 overflow-y-auto inset-y-0 z-0 bg-white h-36 text-left"
                    :class="item.stateitem ? 'w-28 opacity-100 transition-width transition-slowest ease' : 'w-0 opacity-0 transition-width transition-slowest ease-in-out delay-150'"
                    >
                        drag
                    </div>
                    <div class="self-stretch text-center place-content-center ">
                        <SwatchIcon class="w-4 h-4 text-teal-500"></SwatchIcon>
                        <!-- <p class="text-4xl ">{{ item.i }}</p>
                        <p class="text-sm ">static:{{ item.static }}</p> -->
                    </div>
                </div>
                <div class="basis-1/6">
                    <XMarkIcon class="h-5 w-5 text-black" @click="removeItem(item.i)"> </XMarkIcon>
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

