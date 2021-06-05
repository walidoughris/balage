<template>
    <div class="container">
        <nav class="navbar">
            <router-link class="logo" tag="div" to="/">
             <img :src="require(`@/assets/logo.jpg`)" alt="" srcset="">
            </router-link>
            <ul>
                 <router-link tag="li" to="/profile">settings</router-link> 
                 <li><img :src="require(`@/assets/man2.png`)" alt="" srcset=""></li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name:"navbar"
}
</script>

<style lang="scss">
    .navbar{
        display: flex;
        overflow: hidden;
        border-bottom: 1px solid gray;
        padding: .5rem 4.5rem;
        justify-content: space-between;
        align-items: center;
        height: 4rem;
        background-color: #1C213E;
        .logo{
            width: 4rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        ul{
            list-style: none;
            display: flex;
            justify-content: end;
            align-items: center;
            li{
                cursor: pointer;
                padding: 0 .75rem;
                &:last-of-type{
                    cursor: default;
                    pointer-events: none;
                }
                img{
                    width: 2.5rem;
                    height: 2.4rem;
                    border-radius: 50%;
                }
            }
        }
    }
</style>