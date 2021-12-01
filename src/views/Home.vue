<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <crestron-button v-bind:id="10" class="testbutton">Press me 1</crestron-button>
    <crestron-button v-bind:id="20" class="testbutton2">Press me 2</crestron-button>
    <deka-button v-bind:id="30" class="testbutton3">Press me 3</deka-button>
    <p>WebSocket Connection: {{ wsConnected }}</p>
  </div>
</template>

<style>
.testbutton {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 20px;
}

.testbutton2 {
  background-color: #0000ff; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 20px;
}

.testbutton3 {
  background-color: #ff00ff; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 20px;
}

.testbutton.active, .testbutton2.active, .testbutton3.active {
  background-color: red;
}
</style>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import CrestronButton from '@/components/CrestronButton.vue'
import DekaButton from '@/components/DekaButton.vue'

export default {
  name: "Home",
  components: {
    //HelloWorld
    CrestronButton,
    DekaButton
  },
  computed: {
    wsConnected: function () {
      return this.$store.state.connected;
    },
  }
};
</script>
