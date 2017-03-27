<template>
    <div>
        <h1 @click="clickEventsProcessor">这是来自于simpleDemo的 {{haha}}</h1>
        <h2>当前组件的值是{{value}}</h2>
    </div>
</template>

<script>
    export default {
        props:["haha"],
        mounted: () => {
            console.log(11111)
//            debugger
        },
        name: 'test',
        data() {


            return {
                msg: ' huhai Welcome to Your Vue.js App',
                testInfo: "hhhhhhh",
                value:"defaultValue",
                "yes": true,
                xxStyles: {
                    color: "red",
                    fontSize: "30px"
                }

            }


        },

        methods: {
            clickEventsProcessor(){
                this.$store.commit("increment",{huhai:123})
                debugger
                console.log("trigger");
                this.value="clickedValue";
                this.$emit("input","clickedValue")
            },
            showmsg(){
//          debugger
                this.msg = "changed"
            }
        },
        filters: {
            showBIG(arg){
//          debugger
                return arg.toUpperCase()
            }
        },
        computed: {
            reverse(){
                return this.msg.split('').reverse().join('')
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
