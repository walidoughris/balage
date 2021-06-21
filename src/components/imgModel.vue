<template>
    <div class="model">
        <div class="overlay"></div>
        <div class="model-contenu">
            <div class="tabs">
                <button @click="active='show'" :class="active=='show'?'active':''">choisir l'image</button>
                <button @click="active='new'" :class="active=='new'?'active':''">upload image</button>
            </div>
            <div class="contenu-show">
               <NewImg v-if="active=='new'" />
               <ShowImg :images="imgs" v-if="active=='show'" />
               <Loader v-if="loading" />
            </div>
        </div>
        
    </div>
</template>
<script>
import NewImg from './newImg';
import ShowImg from './showImg';
import firebase from './../firebase/index';
import Loader from './loader'
export default {
    name:'model',
    data() {
        return {
            active:'show',
            imgs:[],
            loading:false
        }
    },
    components:{
        NewImg,
        ShowImg,
        Loader
    },
    beforeMount(){
        this.loading=true;
        if(this.$store.state.imagesList.length>0){
        this.imgs=this.$store.state.imagesList;
        this.loading=false;
        return;
      }
      this.imgs=[];
      firebase.firestore().collection("images").doc('img').get().then((doc) => {
                if (doc.exists) {
                  const storage=firebase.storage();
                  let randomImg=doc.data().images;
                  randomImg.forEach(img=>{
                    storage.ref(img).getDownloadURL()
                    .then(url=>{
                        this.imgs.push({url,name:img});
                    })
                  })
                  this.$store.state.imagesList=this.imgs;
                  this.loading=false;
                  this.$store.state.model=false
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                     this.loading=false;
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
                this.loading=false;
            });
    }
}
</script>
<style lang="scss">
    .model{
        position: fixed;
        left: 0;
        z-index: 3;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .overlay{
            z-index: -1;
            width: 100%;
            height: 100%;
            background: #000;
            opacity: .6;
            position: fixed;
            left: 0;
            top: 0;
        }
        .model-contenu{
            width: 60%;
            height: 60vh;
            background: #fff;
            border-radius: 1rem;
            overflow: hidden;
            .tabs{
                button{
                    width: 50%;
                    padding: .75rem;
                    background: #ccc;
                    color:#000;
                    border: none;
                    outline: none;
                    border-bottom: none;
                    position: relative;
                    transition: all .4s ease-in-out;
                    &.active{
                        background: #1C213E;
                        color: #fff;
                    }
                }
            }
        }
    }
</style>

