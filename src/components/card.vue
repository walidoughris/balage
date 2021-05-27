<template>
    <div class="card">
        <router-link tag="a" class="project-link" :to="link(id)" ></router-link>
        <div class="card-img">
            <div class="overlay"></div>
            <div class="image">
                <img :src="require(`@/assets/random3.jpg`)">
            </div>
            <div class="card-title">
                <h4 v-text="title" class="title">teatching</h4>
                <p v-text="prof" class="class">tron comun 6</p>
                <p v-text="classe" class="professeur">walid oughris</p>
            </div>
            <div class="professeur-img"><img :src="require(`@/assets/man2.png`)" alt="" srcset=""></div>
        </div>
        <div class="card-content">
            <h4>date limit</h4>
            <p v-text="date"></p>
        </div>
    </div>
</template>

<script>
export default {
    name:'card',
    methods:{
      link:function(id){
          return '/project/'+id;
      }
    },
    props:["date","prof-img","prof","classe","img",'title',"id"]
}
</script>

<style lang="scss">
    .card{
        max-width: 20rem;
        box-shadow: none;
        border-radius: 1.2rem;
        overflow: hidden;
        border: .5px solid #ccc;
        margin: auto;
        transition: all .3s ease-in;
        position: relative;
        &:hover{
            box-shadow: #d2d2d2 0px 8px 12px;
        }
        .project-link{
            position: absolute;
            cursor: pointer;
            width: 100%;
            height: 100%;
            left: 0;
            right: 0;
            z-index: 22;
        }
        .card-img {
            position: relative;
         .overlay{
             position: absolute;
             top: 0;
             left: 0;
             width: 100%;
             height: 100%;
             background: #000;
             opacity: .55;
         }
         .image{
            height: 8rem;
            img{
                width: 100%;
                height: 100%;
            }
         }
         .card-title{
                position: absolute;
                top: 50%;
                left: .75rem;
                transform: translate(0,-50%);
                text-align: left;
                color: #fff;
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
         .professeur-img{
             position: absolute;
             left: 68%;
             bottom: -1.35rem;
             border-radius: 50%;
             overflow: hidden;
             width: 4rem;
             height: 3.9rem;
             img{
                 width: 100%;
                 height: 100%;
             }
         }
        }
        .card-content{
            text-align: left;
            padding: .25rem;
            h4,p{
                margin: 0.5rem 0.2rem;
                font-size: 1.1rem;
            }
            p{
                font-size: .8rem;
                font-weight: 600;
            }
        }
    }
</style>