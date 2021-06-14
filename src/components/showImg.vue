<template>
    <div class="showImg">
        <form class="imgForm">
          <div class="list">
          <div class="imagesList"  v-for="(img,index) in images" :key="index" @click.prevent >
           <input type="radio" v-model="image" name="radio" :value="img.url" :id="`radio${index}`">
           <label @click="activeImg(img)" :for="`radio${index}`">
               <img :src="img.url" alt="" srcset="">
           </label>
          </div>
          <div>
          </div>
          </div>
          <hr>
          <div class="controlter">
           <button @click.prevent='save()' type="submit">envoyer</button>
          </div>
        </form>
    </div>
</template>
<script>
export default {
    name:'choseImg',
    data() {
      return {
        loading:false,
        image:''
      }
    },
    props:['images'],
    methods:{
        activeImg(img){
           this.image=img.url
            this.$store.state.projectImage=img;
        },
        save(){
          if(this.images)
           this.$store.state.model=false;
        }
    }
}
</script>
<style lang="scss">
    .showImg{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 54vh;
        overflow-y: scroll;
        overflow-x: hidden ;
         .imgForm{
          padding: 1.25rem 1rem;
          background: #fff  !important;
          width: 100% !important;
            hr{
              margin: 1rem 0;
            }
            .list{
              display: flex;
              justify-content: center;
              flex-wrap: wrap;
              .imagesList{
                  flex: 0 0 33.333%;
                  padding: .25rem;
              }
              input[type="radio"]{
                display: none;
                visibility: hidden;
                &:checked ~ label{
                  overflow: hidden;
                  padding: .5rem;
                  background:  #3D4675 !important;
                  border-radius: 0;
                }
              }
              label{
                cursor: pointer;
                background: #fff !important;
                display: inline-block;
                margin: 0 .6rem;
                height: 100%;
                width: 100%;
                img{
                    width: 100%;
                    height: 100%;
                }
              }
            }
          .controlter{
            text-align: center;
            button{
              outline: none;
            border: none;
            background: green;
            color: #fff;
            padding: 0.5rem 4rem;
            border-radius: 1.25rem;
            }
          }
        }
    }
</style>
