<template>
    <div class="newProject">
        <div class="Project-fixed" v-if="projectLoad">
            <div class="Project-Loader">
                <div class="overlay"></div>
                <loader />
            </div>
        </div>
        <form @submit.prevent class="prjectForm">
            <div class="header">
            <div class="test">
                <div>
                <input type="radio" value="individue" name="en_groube" id="individuel" v-model="groube">
                <label for="individuel" @click="show()">individuel</label>
                </div>
                <div>
                <input type="radio" value="en_groupe" name="en_groube" id="groube" v-model="groube">
                <label for="groube" @click="show()">en groupe</label>
                </div>
                <input type="number" v-if="groube=='en_groupe'" name="num_groups" id="num_g" v-model="num_groube">
            </div>
            <div class="img">
                <button @click="open()">ajouter une image</button>
                <button class="exit" @click="close()" v-if="this.$store.state.model">x</button>
            </div>
            </div>
            <div class="form-group">
            <div class="form-control">
                <label for="title">title :</label>
                <input type="text" name="title" id="title" v-model="title" placeholder="title">
            </div>
            <div class="form-control">
                <label for="classe">classe :</label>
                <select name="classe" id="classe" @change="switchSelect($event)">
                    <option v-for="(cl,index) in classe" :key="index"
                     :value="cl" v-text="cl"></option>
                </select>
            </div>
            </div>
            <div class="form-control">
                <label for="list">liste de projets :</label>
                <input type="text" @keyup="listProjects()" name="list" id="list" v-model="projects" placeholder="list her separed by ,">
                <div class="btn-list" >
                    <button v-for="(project,index) in projectsList" :key="index" v-show="project">{{project}}</button>
                </div>
            </div>
            <div class="form-control">
                <label for="description">description :</label>
                <input type="text" name="description" id="description" v-model="description" placeholder="description">
            </div>
            <div class="form-control date">
                <label for="date">date limite :</label>
                <input type="date" name="date" id="date" v-model="date" placeholder="description">
                <input type="time" name="date" id="date" v-model="time" placeholder="description">
            </div>
            <hr>
            <div class="submit">
            <button @click.prevent="submitForm()" type="submit">enregistrer</button>
            </div>
        </form>
        <ImgModel v-if="this.$store.state.model" />
    </div>
</template>
<script>
import ImgModel from './../components/imgModel'
import firebase from './../firebase/index'
import Loader from './../components/loader'
export default {
    data() {
        return {
            projectLoad:false,
            title:'',
            selectedClasse:'',
            projects:'',
            description:'',
            projectsList:[],
            date:'',
            time:'00:00',
            groube:'individue',
            num_groube:0,
            classe:''
        }
    },
    components:{
        ImgModel,
        Loader
    },
    methods:{
        listProjects(){
            let List= this.projects.split(',')
            List.forEach(proj=>this.projectsList.push({name:proj,chosed:false}));
    },
     switchSelect(event) {
      this.selectedClasse = event.target.value;
      console.log(this.selectedClasse)
    },
    close(){
        this.$store.state.model=false
    },
    open(){
        this.$store.state.model=true
    },
    submitForm(){
           this.projectLoad=true;
           firebase.firestore().collection('projects').add(
            {
            id:this.$store.state.user.uid,
            title:this.title,
            classe:this.selectedClasse,
            description:this.description,
            List:this.projectsList,
            date:this.date,
            time:this.time,
            expired:false,
            travail:this.groube,
            num_groube:this.num_groube?this.num_groube:0,
            img:this.$store.state.projectImage.name ?this.$store.state.projectImage.name : 'random1.png'
            }
            )
            .then(()=>{
                this.title='';
                this.classe='';
                this.description='';
                this.projectsList=[];
                this.num_groube=0;
                this.time='00:00';
                this.date='';
                this.groube='individue';
                this.projectLoad=false
            })
            .catch(error=>console.log(error))
    }
    },
    beforeMount(){
        if(this.$store.state.user)
          this.classe=this.$store.state.user.classes;
    }
}
</script>
<style lang="scss" >
    .exit{
        z-index: 9999;
        position: fixed;
    top: 4rem;
    right: 1rem;
    z-index: 9999;
    border-radius: 50% !important;
    }
    .newProject{
        width: 100%;
        min-height: calc(100vh - 4rem);
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        .Project-fixed{
            position: fixed;
            z-index: 888;
            width: 100%;
            height: 100%;
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
        }
        .img{
            text-align: center;
            button{
                padding: .5rem 1rem;
                background: #df24d3;
                color: #fff;
                border: none;
                border-radius: 1rem;
            }
        }
        .prjectForm{
        border-radius: 1rem;
        border: 1px solid #ccc;
        width: 60%;
        padding: 1rem;
        background: #1C213E;
        .header{
            display: flex;
            justify-content: space-between;
         .test{
              display: flex;
              justify-content: center;
              input[type="numbre"]{
                  width: 4rem;
              }
              input[type="radio"]{
                display: none;
                visibility: hidden;
                &:checked ~ label{
                  background: #000 !important;
                }
              }
              label{
                padding: .5rem 2rem;
                cursor: pointer;
                background: #3D4675;
                color: #fff;
                display: inline-block;
                border-radius: 1.25rem;
                margin: 0 .6rem;
              }
            }
            }
        .submit{
            text-align: center;
            button{
                border: none;
                outline: none;
                background: #0bb50b;
                color: #fff;
                padding: .5rem 2rem;
                border-radius: 1.25rem;
                margin: auto;
            }
        }
        .form-group{
            display: flex;
            .form-control{
                flex: 0 0 50%;
            }
        }
         .form-control{
             &.date{
                 input{
                     width: 46%;
                     margin: 0 1%;
                 }
             }
            &:first-of-type{
                margin-right: .5rem ;
            }
             label{
                 display: block;
                 margin: 1rem 0;
                 text-transform: capitalize;
                 font-weight: bold;
                 letter-spacing: 1px;
             }
             input{
                background: #242A4B;
                border: none;
                outline: none;
                color: #fff;
                width: 100%;
                height: 2.5rem;
                border-radius: 1.25rem;
                padding: 0 0.75rem;
             }
             select{
                 background: #242A4B;
                 outline: none;
                 border: none;
                 width: 96%;
                height: 2.5rem;
                color: #fff;
                background: #242A4B;
                padding: 0 .5rem;
                border-radius: .5rem;
             }
             .btn-list{
                background: #242A4B;
                margin-top: 1rem;
                border-radius: .8rem;
                max-height: 27vh;
                overflow-y: scroll;
                button{
                    margin: .7rem 0.35rem;
                    background: #1C213E;
                    color: #fff;
                    border: none;
                    outline: none;
                    padding: .5rem 2rem;
                    border-radius: 1.25rem;
                }
             }
         }
    }
    }
</style>