<template>
    <div class="model">
        <div class="overlay"></div>
        <div class="model-contenu">
            <div class="tabs">
                <button @click="active='show'" :class="active=='show'?'active':''">choose image</button>
                <button @click="active='new'" :class="active=='new'?'active':''">upload image</button>
            </div>
            <div class="contenu-show">
               <NewImg v-if="active=='new'" />
               <ShowImg v-if="active=='show'" />
            </div>
        </div>
        
    </div>
</template>
<style lang="scss">
    .model{
        position: fixed;
        left: 0;
        z-index: 3;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .overlay{
            z-index: -1;
            width: 100%;
            height: 100%;
            background: #000;
            opacity: .6;
            position: fixed;
            left: 0;
            top: 0;
        }
        .model-contenu{
            width: 60%;
            height: 60vh;
            background: #fff;
            border-radius: 1rem;
            overflow: hidden;
            .tabs{
                button{
                    width: 50%;
                    padding: .75rem;
                    background: #ccc;
                    color:#000;
                    border: none;
                    outline: none;
                    border-bottom: none;
                    position: relative;
                    transition: all .4s ease-in-out;
                    &.active{
                        background: #1C213E;
                        color: #fff;
                    }
                }
            }
        }
    }
</style>

<script>
import NewImg from './newImg';
import ShowImg from './showImg';

export default {
    name:'model',
    data() {
        return {
            active:'show'
        }
    },
    components:{
        NewImg,
        ShowImg
    }
}
</script>