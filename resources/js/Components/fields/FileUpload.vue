<template>
    <div class="file-upload">
        <input type="hidden" :name="name" :value="valueJson" />
        <div
            v-for="(file, index) in files"
            :key="`file_${file.id}_${index}`"
            class="file-upload-file"
        >
            <a :href="file.url" target="_blank">
                <div class="file-upload-preview">
                    {{ file.url }}
                    <img v-if="isImage(file.mime_type)" :src="file.url"  :title="file.filename" />
                    <img v-else src="/img/icons/pdf2.svg" :title="file.filename" style="width: 100px; height: 73px;"/>
                </div>
                <div class="file-upload-title">{{ file.filename }}</div>
            </a>
            <button class="file-upload-file-remove" type="button" @click="deleteFile(index, file)">
                <i class="fal fa-times"></i>
            </button>
        </div>
        <div class="dropzone" ref="dropzone"></div>

        <FileUploader :url="'/image'"
                          :text="'select an image'"
                          :buttonText="'Upload'"
                          :autoProcess="false"
                          :multiple="true"
                          :btnClass="'btn btn-primary'"
                          @file-uploader="fileUploader">
     </FileUploader>
    </div>
</template>

<!-- :additionalFields="[
    {
        'type': 'text',
        'name': 'test',
        'value': 'test',
        'id': 'test1',
        'labelText': 'test1'
        },

    {
        'type': 'text',
        'name': 'test2',
        'value': 'test2',
        'id': 'test1',
        'labelText': 'test2'
    },

    {
        'type': 'textarea',
        'name': 'test3',
        'value': 'test3',
        'id': 'test3',
        'labelText': 'test3',
        'cols': '50',
        'rows': '3'
        }
]" -->




<script>
    import FileUploader from 'tb-vue3-laravel-inertiajs-file-upload'
    import axios from "axios";
    import Dropzone from "dropzone";
    Dropzone.autoDiscover = false;
    export default {
        name: "FileUpload",
        components: {
            FileUploader
        },
        props: {
            name: String,
            value: {},
            getUrl: {
                type: String,
                default: "/file",
            },
            storeUrl: {
                type: String,
                default: "/image",
                // default: "/file",
            },
            destroyUrl: {
                type: String,
                default: "/file",
            },
            placeholder: {
                type: String,
                default: "Drop files here",
            },
        },
        setup() {
            function fileUploader(response) {
                console.log(response)
            }

            return  { fileUploader }
        },
        data() {
            return {
                files: [],
                dropzone: null,
            };
        },
        mounted() {
            this.dropzone = new Dropzone(this.$refs.dropzone, {
                url: this.storeUrl,
                addRemoveLinks: true,
                dictDefaultMessage: 'Drop files here',
                sending: (file, xhr, formData) => {
                    console.log(file);
                    console.log(xhr);
                    formData.append("_token", document.querySelector('meta[name="csrf-token"]').getAttribute('content'));
                },
                success: (file, response) => {
                    console.log(file);
                    console.log(response);
                    this.files.push(response.data);
                    console.log(this.files);
                },
                // complete: (file) => {
                //     this.dropzone.removeFile(file);
                // },
            });
            // console.log(this.storeUrl);
        },
        created() {
            let files = this.value;
            if (files) {
                this.files = files;
            }
        },
        methods: {
            deleteFile(index, file) {
                axios
                    .delete(this.destroyUrl, {
                        params: {
                            id: file.id,
                        },
                    })
                    .then((res) => {
                        this.$delete(this.files, index);
                    })
                    .catch((error) => console.log(error));
            },
            getFile(id) {
                axios
                    .get(this.getUrl, {
                        params: {
                            id: id,
                        },
                    })
                    .then((res) => {
                        console.log(res);
                        let data = res.data.data;
                        this.files.push({
                            id: data.id,
                            filename: data.filename,
                            path: data.path,
                            url: data.url,
                            mime_type: data.mime_type,
                        });
                    })
                    .catch(console.error);
            },
            isImage(mimeType) {
                let imageMimes = [
                    "image/gif",
                    "image/jpeg",
                    "image/png",
                    "image/tiff",
                ];
                return imageMimes.includes(mimeType);
            },
        },
        computed: {
            valueJson() {
                let fileIds = this.files.map((file) => {
                    return file.id;
                });
                return JSON.stringify(fileIds);
            },
        },
        watch: {
            files() {
                this.$emit(
                    "input",
                    this.files.map((file) => {
                        return file.id;
                    })
                );
            },
            placeholder() {
                $(this.dropzone.element).find('.dz-message').text(this.placeholder);
            },
        },
    };
</script>
