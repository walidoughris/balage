<template>
  <div class="home">
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
  h2{
    text-align: left;
    color:#28a2ec;
    text-transform: capitalize;
  }
  .flex{
    display: flex;
    .col{
      flex: 0 0 25%;
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
