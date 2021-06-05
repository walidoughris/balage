<template>
    <div class="login">
        <form>
            <div class="form-control">
                <input type="text" v-model="user.email" name="email" id="email" placeholder="email@exemple.com">
            </div>
            <div class="form-control">
                <input type="password" v-model="user.password" name="password" id="password" placeholder="mot de pass">
            </div>
            <button type="submit" @click.prevent="login()">
                <Loader class="btn-loading"  v-if="loading" />
                <span v-if="!loading">login</span>
            </button>
        </form>
    </div>
</template>

<script>
import firebase from './../firebase/index'
import Loader from './../components/loader'

export default {
    name:'login',
    data() {
        return {
            user:{
                email:'',
                password:''
            },
            loading:false
        }
    },
    components:{
        Loader
    },
    methods:{
        login(){
          this.loading=true;
          firebase.auth().signInWithEmailAndPassword(this.user.email,this.user.password)
          .then(user=>{
              //const user = firebase.auth().currentUser;
            const credential = firebase.auth.EmailAuthProvider.credential(
                this.user.email, 
                this.user.password
            );
            firebase.firestore().collection("users").doc(user.uid).get()
            .then(snapshot=>{
                console.log(snapshot.docs)
                snapshot.docs.forEach(doc=>console.log(doc.data()))
                this.$store.state.credential=credential;
                this.loading=false;
            })
            .catch(err=>{
                console.log(err);
                this.loading=false;
            })
            // Now you can use that to reauthenticate
            //user.reauthenticateWithCredential(credential);
          })
          .catch(console.error(err=>{
                console.log(err);
                this.loading=false;
            }))
        }
    }
}
</script>

<style lang="scss">
    .login{
        display: flex;
        height: calc(100vh - 4rem);
        justify-content: center;
        align-items: center;
        form{
            background: #1C213E;
            border: 1px solid #ccc;
            border-radius: 1rem;
            width: 50%;
            height: 56vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        .form-control{
            width: 80%;
            margin: .5rem 0;
        }
            input{
                color: #fff;
                background: #242A4B;
                height: 3rem;
                padding: 0 .5rem;
                width: 100%;
                border: none;
                border-radius: 1rem;
            }
            button{
                padding: .5rem 2rem;
                background: #676EA6;
                border: none;
                color: #fff;
                border-radius: 2.25rem;
                margin-top: .9rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
               .btn-loading{
                   width: 2rem;
                   height: 2rem;
                   border-width: 4px;
               }
            }
        }
    }
</style>