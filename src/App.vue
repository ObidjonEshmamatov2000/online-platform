<template>
  <div id="app">
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  components: {
    
  },
  data() {
    return {
      
    }
  },
  async created() {
    this.$store.state.user = 'star';
    const response = await axios.get('user');
    
    this.$store.dispatch('user', response.data);
    // this.user = response.data;
    // alert(this.user)
  }
}
</script>

<style lang="scss">
*, *:before, *:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.entrance {
      width: 100%;
      margin: 0 auto;
      /* border: 1px solid red; */
  }
.btn {
      background-color: #0085B2;
      color: white;

      &:hover {
        color: white;
        background-color: #0097b2;
      }
  }
</style>
