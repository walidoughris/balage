<template>
  <div class="project">
    <div class="container">
      <div class="flex">
        <div class="contenu">
          <div class="haeder-contenu">
            <h4 class="title">{{projData.title}}</h4>
            <p class="class">{{projData.classe}}</p>
          </div>
          <div class="date">
            <h4>date limite :</h4>
            <p>{{projData.date}} {{projData.time}}</p>
          </div>
        </div>
        <div class="description">
          <h4>description :</h4>
          <p>{{projData.description}}</p>
        </div>
      </div>
      <div class="project-list">
        <table>
          <thead>
            <tr>
              <td>name</td>
              <td>subject</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(inf,i) in ListInf" :key="i">
              <td>
                <ul>
                  <li v-for="(stud,ind) in inf.students" :key="ind">
                    <img :src="stud.url" width="44" alt="" srcset="">
                    <span>{{stud.name}}</span>
                  </li>
                </ul>
              </td>
              <td>{{inf.name}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <Loader v-if="loaderStart" />
  </div>
</template>
<script>
import firebase from '../firebase/index'
import Loader from '../components/loader.vue'

export default {
  name:'aboutPage',
  data() {
    return {
       ListInf:[],
       projData:'',
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
   
  },
  beforeMount(){
    this.loaderStart=true;
    this.doc_id=this.$route.params.id;
    firebase.firestore().collection("projects").doc(this.doc_id).get()
    .then((doc)=>{
      if(!doc.exists){
        this.$router.push('/')
      }
      let projStud=[];
      this.projData=doc.data()
      doc.data().List.forEach(document=>{
        document.studentIds.forEach(studId=>{
           projStud=[];
          firebase.firestore().collection('users').doc(studId).get()
          .then(stud=>{
            if (stud.exists) {
              console.log(stud)
               firebase.storage().ref(stud.data().img).getDownloadURL()
              .then(url=>{
                projStud.push({
                    name:stud.data().name,
                    url:url
                })
              })
            }
          })
          this.ListInf.push({
            name:document.name,
            students:projStud
          })
        })
      })
      this.loaderStart=false;
    })
    .catch(error=>console.log(error))
  }
}
</script>
<style lang="scss" >
table{
  border: 1px solid;
width: 100%;
text-align: center;
border-collapse: collapse;
thead{
  tr{
    background: #1C213E;
    td{
      padding: 1rem;
    }
  }
}
tr{
  background: none;
  cursor: pointer;
  &:hover{
    background: #1C213E;
  }
  &:nth-child(2n){
    background: #1C213E;
  }
  td{
  border: 1px solid;
  border-collapse: collapse;
  width: 80%;
  &:last-child{
    width: 20% !important;
    padding: 0 1rem;
    text-align: center;
  }
}
}
}
  .disabled-link{
    background: #ddd !important;
    pointer-events: none;
    color: #000 !important;
  }
  .project{
    padding: 2% 3%;
    text-align: left;
    ul{
        list-style: disc;
        li{
          display: flex;
          align-items: center;
          span{
            font-weight: bold;
            padding: 0 1rem;
          }
        }
    }
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