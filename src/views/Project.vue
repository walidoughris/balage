<template>
  <div class="project">
    <div class="header">
      <div class="overlay"></div>
      <div class="header-img">
        <img :src="data.img" alt="" srcset="">
      </div>
      <div class="haeder-contenu">
        <h4 class="title">{{projectInf.title}}</h4>
        <h4 class="title">{{data.prof.data.matier}}</h4>
        <p class="class">{{projectInf.classe}}</p>
      </div>
    </div>
    <div class="container">
      <div class="flex">
        <div class="contenu">
          <div class="avatar"><img :src="data.prof.url" alt="" srcset="">
          <p>{{data.prof.data.name}}</p>
          </div>
          <div class="date">
            <h4>date limite :</h4>
            <p>{{projectInf.date}} {{projectInf.time}}</p>
          </div>
        </div>
        <div class="description">
          <h4>description :</h4>
          <p>{{projectInf.description}}</p>
        </div>
      </div>
      <div class="project-list" v-if="!currentproject">
        <form method="GET">
          <div class="list">
          <div  v-for="(project,index) in projectInf.List" :key="index" @click.prevent >
           <input type="radio" v-model="selectedProj" name="radio" :value="project.name" :id="`radio${index}`">
           <label @click="change(project.name)" :class="project.chosed?'disabled-link':''" :for="`radio${index}`">{{project.name}}</label>
          </div>
          </div>
          <hr>
          <div class="controlter">
           <button @click.prevent="submit()" type="submit">envoyer</button>
          </div>
        </form>
      </div>
      <div class="projectCur" v-else>
        test4
      </div>
    </div>
    <Loader v-if="loaderStart" />
  </div>
</template>
<script>
import firebase from './../firebase/index'
import Loader from './../components/loader.vue'

export default {
  name:'aboutPage',
  data() {
    return {
       projectInf:"",
      loaderStart:false,
      selectedProj:'',
      data:'',
      currentproject:'',
      doc_id:''
    }
  },
  comments:{
    Loader
  },
  methods:{
   change(name){
     this.selectedProj=name
   },
   submit(){
     console.log(this.projectInf)
     let selectedId='';
     for(let i=0;i<this.projectInf.List.length;i++){
       if(this.projectInf.List[i].name==this.selectedProj){
         this.projectInf.List[i].chosed=true;
         this.projectInf.List[i].studentIds.push(this.$store.state.user.uid);
         selectedId=i;
       }
     }
     console.log(this.projectInf)
     firebase.firestore().collection("projects").doc(this.doc_id).update({
       List:this.projectInf.List
     })
     .then(()=>{
       this.currentproject=this.projectInf.List[selectedId];
     })
     .catch(error=>console.log(error));
   }
  },
  beforeMount(){
    this.loaderStart=true;
    this.doc_id=this.$route.params.id;
    firebase.firestore().collection("projects").doc(this.doc_id).get()
    .then((doc)=>{
      if(!doc.exists){
        this.$router.push('/')
      }
      firebase.firestore().collection('users').doc(doc.data().id).get()
      .then((user)=>{
       firebase.storage().ref(user.data().img).getDownloadURL()
      .then(profUrl=>{
      firebase.storage().ref(doc.data().img).getDownloadURL()
      .then(url=>{
          this.projectInf=doc.data(),
          this.data={id:doc.id,img:url,prof:{data:user.data(),url:profUrl}}
          this.selectedProj=this.projectInf.List[0].name;
          this.projectInf.List.forEach(proj=>{
            proj.studentIds.forEach(id=>{
              if(id==this.$store.state.user.uid){
                this.currentproject=proj;
              }
            })
          })
      })
      })
       .catch(error=>console.log(error))
      })
      this.loaderStart=false;
    })
    .catch(error=>console.log(error))
  }
}
</script>
<style lang="scss" >
  .disabled-link{
    background: #ddd !important;
    pointer-events: none;
    color: #000 !important;
  }
  .project{
    padding: 2% 3%;
    text-align: left;
    .header{
      position: relative;
      border: .5px solid #ccc;
      border-radius: 1.2rem;
        overflow: hidden;
      .overlay{
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        bottom: 0;
        background: #000;
        opacity: .5;
        z-index: 2;
      }
      .header-img{
        height: 12rem;
        img{
          height: 100%;
          width: 100%;
        }
      }
      .haeder-contenu{
        position: absolute;
        left: 2rem;
        top: 1rem;
        color: #fff;
        text-align: left;
        z-index: 3;
        h4{
                    margin:.75rem 0;
                    font-size: 1.5rem;
                }
                p{
                    margin:.35rem 0;
                    font-size: 1.1rem;
                    color: #ddd;

                    &:last-of-type{
                        font-size: .9rem;
                    }
                }
      }
    }
    .container{
      margin-top: 2.5rem;
      padding: 0 3%;
      .flex{
        display: flex;
         margin-bottom: 2rem;
          .contenu{
            background-color: #1C213E;
            border: .5px solid #ccc;
            border-radius: 1.2rem;
            padding: .25rem 1rem;
            flex: 0 0 30%;
            .avatar{
              display: flex;
              align-items: center;
              font-size: .93rem;
              margin-top:.25rem ;
              img{
                width: 3rem;
                height: 2.9rem;
                border-radius: 50%;
                margin-right: .5rem ;
              }
            }
            .date{
              h4,p{
                  margin: 0.5rem 0.2rem;
                  font-size: 1rem;
              }
              p{
              font-size: .9rem;
            }
            
          }
          }
          .description{
            background-color: #1C213E;
            border: .5px solid #ccc;
            border-radius: 1.2rem;
            padding: .25rem 1rem;
            margin-left:2rem ;
            flex: 0 0 calc(70% - 2rem);
            h4,p{
                  margin: 0.5rem 0.2rem;
                  font-size: 1rem;
              }
            p{
              font-size: .9rem;
            }
          }
        }
        .project-list form{
          padding: 1.25rem 1rem;
            background-color: #1C213E;
          border: .5px solid #ccc;
            border-radius: 1.2rem;
            hr{
              margin: 1rem 0;
            }
            .list{
              display: flex;
              justify-content: center;
              input[type="radio"]{
                display: none;
                visibility: hidden;
                &:checked ~ label{
                  background: #3D4675 !important;
                }
              }
              label{
                padding: .5rem 2rem;
                cursor: pointer;
                background: #000;
                color: #fff;
                display: inline-block;
                border-radius: 1.25rem;
                margin: 0 .6rem;
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
  }
</style>