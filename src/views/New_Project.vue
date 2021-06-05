<template>
    <div class="newProject">
        <form method="post" class="prjectForm">
            <div class="img">
                <button>add image</button>
            </div>
            <div class="form-group">
            <div class="form-control">
                <label for="title">title :</label>
                <input type="text" name="title" id="title" v-model="title" placeholder="title">
            </div>
            <div class="form-control">
                <label for="classe">classe :</label>
                <select name="classe" id="classe" v-model="classe">
                    <option value="" selected>chose a classe</option>
                    <option value="tron commun 1">tron commun 1</option>
                    <option value="tron commun 2">tron commun 2</option>
                    <option value="tron commun 3">tron commun 3</option>
                    <option value="tron commun 4">tron commun 4</option>
                </select>
            </div>
            </div>
            <div class="form-control">
                <label for="list">project list :</label>
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
            <button @click.prevent="submitForm()" type="submit">enregitre</button>
            </div>
        </form>
        <ImgModel v-if="active" />
    </div>
</template>
<script>
import ImgModel from './../components/imgModel'

export default {
    data() {
        return {
            title:'',
            classe:'',
            projects:'',
            description:'',
            projectsList:[],
            date:'',
            time:'00:00',
            active:false
        }
    },
    components:{
        ImgModel
    },
    methods:{
        listProjects(){
            this.projectsList= this.projects.split(',')
    },
    submitForm(){
        console.log(this.date,this.time)
    }
    }
}
</script>
<style lang="scss" >
    .newProject{
        width: 100%;
        min-height: calc(100vh - 4rem);
        display: flex;
        justify-content: center;
        align-items: center;
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