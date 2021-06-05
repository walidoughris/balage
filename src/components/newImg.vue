<template>
    <div class="newImg">
        <form action="" class="uploadImg">
            <input id="file" :class="Upload?'active':''" type="file" @change="uploadFile($event)" name="">
            <div class="imgPrev">
                <img :src="src" v-if="src" alt="" srcset="">
            </div>
            <div class="submit" v-if="src">
                <button @click.prevent="" type="submit">upload image</button>
            </div>
        </form>
    </div>
</template>
<style lang="scss">
    .newImg{
        position: relative;
        height: 54vh;
        .uploadImg{
            input#file{
                position: absolute;
                top: calc(50% - 3rem);
                left: 50%;
                transform: translate(-50%,-50%);
                background: #1C213E;
                padding: .5rem 1rem;
                border-radius: 1.25rem;
            }
            input#file.active{
                top: -2rem;
                left: 50%;
                transform: translate(-50%, 0);
            }
            .imgPrev{
                    margin-top: 3rem;
                    height: 38vh;
                    margin-left: auto;
                    margin-right: auto;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    img{
                        width: 10rem;
                        height: 10rem;
                    }
                }
                .submit{
                text-align: center;
                padding: .5rem;
                button{
                    border: none;
                    outline: none;
                    background: #0bb50b;
                    color: #fff;
                    padding: .5rem 2rem;
                    border-radius: 1.25rem;
                    margin: auto;
                }
            }
        }
    }
</style>
<script>
export default {
    name:'newImg',
    data() {
        return {
            Upload:'',
            src:''
        }
    },
    methods:{
        uploadFile(event){
            this.Upload=event.target.files[0];
            if (this.Upload) {
            const reader = new FileReader();
            reader.readAsDataURL(this.Upload);
            reader.addEventListener("load", () => {
                console.log(reader.result);
                this.src=reader.result;
            });
        }
    }
}
}
</script>