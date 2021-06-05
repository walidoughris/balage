<template>
  <div class="home">
    <div class="new" title="new project">
      <router-link class="admin-link" tag="div" to="/new/project">+</router-link>
    </div>
    <div class="contenu">
      <h2>actuel project </h2>
      <div class="container flex">
        <div v-for="(info,index) in projectInf" :key="index" class="col">
          <Card   :date="info.date" :id="info.id"
          :title="info.title" :img="info.img" :prof="info.prof"
          :prof-img="info.profImg" :classe="info.class" />
        </div>
      </div>
      <h2>ecpired projects</h2>
      <div class="container flex">
        <div v-for="(info,index) in projectInf" :key="index" class="col">
          <Card   :date="info.date" :id="info.id"
          :title="info.title" :img="info.img" :prof="info.prof"
          :prof-img="info.profImg" :classe="info.class" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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

<script>
// @ is an alias to /src
import Card from '../components/card.vue'

export default {
  name: 'Home',
  data() {
    return {
      projectInf:[
        {
          img:'logo.png',
          title:'project title',
          class:'tron comun science 6',
          prof:'walid oughris',
          profImg:'user.png',
          date:'21/01/2022 22:30',
          id:'doc Id'
       },
       {
          img:'logo.png',
          title:'project title',
          class:'tron comun science 6',
          prof:'walid oughris',
          profImg:'user.png',
          date:'21/01/2022 22:30',
          id:'doc Id'
       },
       {
          img:'logo.png',
          title:'project title',
          class:'tron comun science 6',
          prof:'walid oughris',
          profImg:'user.png',
          date:'21/01/2022 22:30',
          id:'doc Id'
       },
      ]
    }
  },  
  components: {
    Card
  }
}
</script>
