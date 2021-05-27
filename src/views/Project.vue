<template>
  <div class="project">
    <div class="header">
      <div class="overlay"></div>
      <div class="header-img">
        <img :src="require('@/assets/random2.jpg')" alt="" srcset="">
      </div>
      <div class="haeder-contenu">
        <h4 class="title">teatching</h4>
        <p class="class">tron comun 6</p>
      </div>
    </div>
    <div class="container flex">
      <aside>
        <div class="contenu">
          <div class="avatar"><img :src="require('@/assets/man2.png')" alt="" srcset="">
          <p>walid oughris</p>
          </div>
          <div class="date">
            <h4>date limite :</h4>
            <p>21 11 27</p>
          </div>
        </div>
        <div class="description">
          <h4>description :</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum nam dolorem quo! Iure non magnam animi, dolor rem quos laborum nemo! Odio fugiat totam, minus quae aliquam veritatis saepe eum!</p>
        </div>
      </aside>
      <div class="project-list">
        <form method="post">
          <div class="list">
            <button  v-for="(project,index) in projectList" :key="index" @click.prevent="select(project.name)" :class="project.active?'active':''">{{project.name}}</button>
          </div>
          <button @click.prevent="" type="submit">envoyer</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'aboutPage',
  data() {
    return {
      projectList:[
        {
         name:"list1",
         active:true
       },
       {
         name:"list2",
         active:false
       },
       {
         name:"list3",
         active:false
       },
      ]
    }
  },
  methods:{
   select(item){
     console.log(item)
     for (let index = 0; index < this.projectList.length; index++) {
        if (this.projectList[index].name==item) {
          this.projectList[index].active=true;
       console.log(this.projectList[index].active)
        }
        this.projectList[index].active=false;
     }
   }
  }
}
</script>
<style lang="scss" >
  .active{
    background: red;
  }
  .project{
    padding: 2% 3%;
    text-align: left;
    .header{
      position: relative;
      box-shadow: #d2d2d2 0px 8px 12px;
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
      &.flex{
        display: flex;
        aside{
          flex: 0 0 20%;
          margin-right: 3rem;
          .contenu{
            box-shadow: #d2d2d2 0px 8px 12px;
            border: .5px solid #ccc;
            border-radius: 1.2rem;
            padding: .25rem 1rem;
            margin-bottom: 2rem;
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
            box-shadow: #d2d2d2 0px 8px 12px;
            border: .5px solid #ccc;
            border-radius: 1.2rem;
            padding: .25rem 1rem;
            h4,p{
                  margin: 0.5rem 0.2rem;
                  font-size: 1rem;
              }
            p{
              font-size: .9rem;
            }
          }
        }
        .project-list{
          flex: 0 0 calc(80% - 3rem);
          box-shadow: #d2d2d2 0px 8px 12px;
          border: .5px solid #ccc;
            border-radius: 1.2rem;
            padding: .25rem 1rem;
        }
      }
    }
  }
</style>