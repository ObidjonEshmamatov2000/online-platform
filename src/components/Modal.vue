<template>
    <div id="modal" v-if="showModal">
        <div id="content">
            {{ item.date }}
        <div id="exit" @click="$emit('closemodal', $event)">
            <i class="fas fa-times"></i>
        </div>
            <input-component :disabled="true" :value="item.teacher" label="O'qituvchi"/>
            <input-component :disabled="true" :value="item.subject" label="Fan"/>
            <input-component :disabled="true" :value="item.group" label="Guruh"/>
        </div>
    </div>
</template>

<script>
import Input from './Input.vue'
export default {
    components: { "input-component": Input },
    props: {
        showModal: {
            type: Boolean,
            default: false
        },
        item: {
            type: Object,
            default: null
        }
    },
    data () {
        return {
            //   list: [
        //       {
        //           value: 'Matematike',
        //           label: 'Fan nomi'
        //       },
        //       {
        //           value: 'Fayziyev Alisher',
        //           label: 'Oqituvchi'
        //       },
        //       {
        //           value: '211-12',
        //           label: 'Guruh'
        //       },
                
            //   ]
        }
    }
    
}
</script>

<style scoped>
    #modal {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1222;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
    }
    #content {
        position: fixed;
        border-radius: 7px;
        padding: 2rem;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 300px;
        z-index: 9003;
        height: 250px;
        background-color: white;
    }
    #exit {
        width: 30px;
        height: 30px;
        border-radius: 5px;
        display: flex;
        position: absolute;
        top: -15px;
        right: -15px;
        cursor: pointer;
        background-color: white;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 5px #0085B2;
    }
</style>