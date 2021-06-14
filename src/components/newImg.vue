<template>
    <div class="newImg">
        <form action="" class="uploadImg">
            <input id="file" :class="src?'active':''" type="file" @change="showFile($event)" name="file">
            <div class="imgPrev">
                <img :src="src" v-if="src" alt="" srcset="">
            </div>
            <div class="submit" v-if="src">
                <button @click.prevent="uploadImg()" type="submit">upload image</button>
            </div>
        </form>
    </div>
</template>
<script>
import firebase from './../firebase/index'
export default {
    name:'newImg',
    data() {
        return {
            files:'',
            src:''
        }
    },
    methods:{
        showFile(event){
            this.files=event.target.files;
            let image=this.files[0];
            if (image) {
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.addEventListener("load", () => {
                this.src=reader.result;
            });
        }
    },
    uploadImg(){
        const name=new Date()+'-'+this.files[0].name,
              metadata={
                    contentType:this.files[0].type
              };
        console.log(name)
        firebase.storage().ref().child(name).put(this.files[0],metadata)
        .then(()=>{
              firebase.storage().ref(name).getDownloadURL()
              .then(url=>{
                  this.$store.state.projectImage.new=true;
                  this.$store.state.projectImage.name=name;
                  this.$store.state.projectImage.url=url;
                  this.$store.state.model=false;
              })
            })
    }
}
}
</script>
<style lang="scss">
    .newImg{
        position: relative;
        height: 54vh;
        overflow-y:scroll ;
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
