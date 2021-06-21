<template>
    <div class="card">
        <div class="controllers" v-if="isTeatcher">
            <div class="btn">
             <router-link tag="div"  class="modify-link" :to="Modifylink(id)" >modifier</router-link>
             <router-link tag="div"  class="modify-link" :to="Reslink(id)" >Afficher les résultats</router-link>
            </div>
        </div>
        <router-link v-else tag="div" class="project-link" :to="link(id)" ></router-link>
        <div class="card-img">
            <div class="overlay"></div>
            <div class="image">
                <img :src="img">
            </div>
            <div class="card-title">
                <h4 v-text="title" class="title"></h4>
                <p v-text="prof" class="class"></p>
                <p v-text="matier" class="professeur"></p>
                <p v-text="classe" class="professeur"></p>
            </div>
            <div class="professeur-img"><img :src="prof_img" alt="" srcset=""></div>
        </div>
        <div class="card-content">
            <h4>date limite</h4>
            <p >{{date}} {{time}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name:'card',
    methods:{
      link:function(id){
          return '/project/'+id;
      },
      Modifylink(id){
          return '/project/modify/'+id;
      },
      Reslink(id){
          return '/project/resulta/'+id;
      },
    },
    computed:{
        isTeatcher(){
            return this.$store.state.user.role=='teatcher';
        },
    },
    props:["date","prof_img","prof","classe","img",'title',"id","time","matier"]
}
</script>

<style lang="scss">
    .card{
        background: #1C213E;
        max-width: 20rem;
        box-shadow: none;
        border-radius: 1.2rem;
        overflow: hidden;
        margin: auto;
        transition: all .3s ease-in;
        position: relative;
        .controllers{
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            z-index: 9;
            height: 100%;
            background: #1C213E;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all 1s ease;
            cursor: default;
            .btn{
                .modify-link{
                    padding: 0.5rem 2rem;
                    color: white;
                    border-radius: 3rem;
                    background: #75757a;
                    text-align: center;
                    margin: 1rem;
                    cursor: pointer;
                    &:hover{
                        background: #242A4B;
                    }
                }
            }
        }
        &:hover{
            box-shadow: #d2d2d2 1px 4px 8px;
            .controllers{
                top: 0 !important;
            }
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