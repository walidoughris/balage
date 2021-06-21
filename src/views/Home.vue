<template>
  <div class="home">
     <div class="Project-Loader" v-if="loaderStart">
                <div class="overlay"></div>
                <loader />
     </div>
    <div class="new" title="new project">
      <router-link class="admin-link" tag="div" to="/new/project">+</router-link>
    </div>
    <div class="contenu">
      <h2 >projet actuel </h2>
      <div class="container flex">
        <div v-for="(info,index) in projectInf" :key="index" class="col">
          <Card   :date="info.data.date" :id="info.id" :time="info.data.time"
          :title="info.prof.data.title" :img="info.img" :prof="info.prof.data.name" 
          :prof_img="info.prof.url" :classe="info.data.classe"
          :matier="info.prof.data.matier"
           />
        </div>
      </div>
      <h2 v-if="expiredProject.length>0">projets expirés</h2>
      <div class="container flex">
        <div v-for="(info,index) in expiredProject" :key="index" class="col">
          <Card   :date="info.data.date" :id="info.id" :time="info.data.time"
          :title="info.prof.data.title" :img="info.img" :prof="info.prof.data.name" 
          :prof_img="info.prof.url" :classe="info.data.classe"
          :matier="info.prof.data.matier"
           />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Card from '../components/card.vue'
import firebase from './../firebase/index'
import Loader from './../components/loader'

export default {
  name: 'Home',
  data() {
    return {
      projectInf:[],
      expiredProject:[],
      loaderStart:false
    }
  },  
  components: {
    Card,
    Loader
  },
  beforeMount(){
    this.loaderStart=true;
    let userClasse=this.$store.state.user.classe;
    firebase.firestore().collection('projects').where('classe','==',userClasse).get()
    .then((snapshot)=>{
      console.log(snapshot.docs,userClasse)
      snapshot.docs.forEach(doc=>{
      firebase.firestore().collection('users').doc(doc.data().id).get()
      .then((user)=>{
       firebase.storage().ref(user.data().img).getDownloadURL()
      .then(profUrl=>{
      firebase.storage().ref(doc.data().img).getDownloadURL()
      .then(url=>{
        if(doc.data().expired){
          this.expiredProject.push({data:doc.data(),id:doc.id,img:url,prof:{data:user.data(),url:profUrl}})
        }else{
          this.projectInf.push({data:doc.data(),id:doc.id,img:url,prof:{data:user.data(),url:profUrl}})
        }
      })
      })
       .catch(error=>console.log(error))
      })
      this.loaderStart=false;
    })
    })
    .catch(error=>console.log(error))
  }
}
</script>

<style lang="scss" scoped>
.Project-Loader{
                position: fixed;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                left: 0;
                top: 0;
                height: 100%;
                z-index: 889;
                .overlay{
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: #000;
                    opacity: .4;
                    z-index: 777;
                }
            }
.new{
position: fixed;
cursor: pointer;
bottom: 3rem;
right: 1rem;
font-size: 2rem;
width: 4rem;
height: 4rem;
z-index: 99;
background: #686E9F;
overflow: hidden;
border-radius: 50%;
transition: all .2s ease-in-out;
&:hover{
  background: #9098D8;
}
.admin-link{
 display: flex;
justify-content: center;
align-items: center;
position: relative;
width: 100%;
height: 100%;
background: #fff;
color:#000
}
}
  h2{
    padding: .5rem 1rem;
    background: #1C213E;
    font-weight: normal;
    color: #fff;
    border: none;
    border-radius: 1rem;
    display: inline-block;
    font-size: .9rem;
  }
  .flex{
    display: flex;
    .col{
      flex: 0 0 33.3333%;
      padding: 0 24px;
    }
  }
  .contenu{
    padding: 2% 3%;
  }
</style>