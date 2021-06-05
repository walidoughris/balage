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
    <div class="container">
      <div class="flex">
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
      </div>
      <div class="project-list">
        <form method="GET">
          <div class="list">
          <div  v-for="(project,index) in projectList" :key="index" @click.prevent >
           <input type="radio" v-model="test" name="radio" :value="index" :id="`radio${index}`">
           <label @click="change(index)" :for="`radio${index}`">list {{index}}</label>
          </div>
          </div>
          <hr>
          <div class="controlter">
           <button @click.prevent type="submit">envoyer</button>
          </div>
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
      test:1,
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
   change(index){
     this.test=index
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