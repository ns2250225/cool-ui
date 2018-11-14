<template>
    <div class="file-upload">
        <div class="image-upload-wrap" :class="{ 'hide': isHide, 'image-dropping': isDrop }" draggable="true" @dragover="dragBegin" @dragleave="dragEnd">
            <input class="file-upload-input" type='file' ref="upload_input" @change="readURL" accept="image/*" />
            <div class="drag-text">
                <h3>{{ info }}</h3>
            </div>
        </div>
        <div class="file-upload-content" :class="{'show': isShow}">
            <img class="file-upload-image" :src="imgSrc" alt="your image" />
            <div class="image-title-wrap">
            <button type="button" @click="removeUpload" class="remove-image">Remove <span class="image-title">{{ upload_img_name }}</span></button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'co-upload',
    data () {
        return {
            isHide: false,
            isShow: false,
            isDrop: false,
            imgSrc: '#',
            upload_img_name: 'demo.jpg'
        }
    },
    props: {
        info: {
            type: String,
            default: '拖拽或点击上传图片 :D'
        }
    },
    components: {},
    mounted(){
    },
    methods: {
        readURL () {
            let input = this.$refs.upload_input

            var vm = this

            if (input.files && input.files[0]) {

                var reader = new FileReader();

                reader.onload = function(e) {
                    vm.isHide = true
                    vm.imgSrc = e.target.result
                    vm.isShow = true
                    vm.upload_img_name = input.files[0].name
                }

                reader.readAsDataURL(input.files[0])

            } else {
                this.removeUpload()
            }
        },
        removeUpload () {
            let input = this.$refs.upload_input
            input.value = ''
            this.isShow = false
            this.isHide = false
        },
        dragBegin () {
            this.isDrop = true
        },
        dragEnd () {
            this.isDrop = false
        }
    },
    computed: {
    },
    filters: {}
}
</script>