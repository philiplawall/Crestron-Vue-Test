<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <crestron-button v-bind:id="1" class="testbutton">Press me 1</crestron-button>
    <crestron-button v-bind:id="2" class="testbutton2">Press me 2</crestron-button>
    <deka-button v-bind:id="3" class="testbutton3">Press me 3</deka-button>
    <div class="slidecontainer">
      <crestron-slider v-bind:id="1" class="slider"></crestron-slider>
    </div>
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

.slidecontainer {
  width: 100%; /* Width of the outside container */
}

/* The slider itself */
.slider {
  -webkit-appearance: none;  /* Override default CSS styles */
  appearance: none;
  width: 100%; /* Full-width */
  height: 25px; /* Specified height */
  background: #d3d3d3; /* Grey background */
  outline: none; /* Remove outline */
  opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
  -webkit-transition: .2s; /* 0.2 seconds transition on hover */
  transition: opacity .2s;
}

/* Mouse-over effects */
.slider:hover {
  opacity: 1; /* Fully shown on mouse-over */
}

/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
.slider::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  width: 25px; /* Set a specific slider handle width */
  height: 25px; /* Slider handle height */
  background: #04AA6D; /* Green background */
  cursor: pointer; /* Cursor on hover */
}

.slider::-moz-range-thumb {
  width: 25px; /* Set a specific slider handle width */
  height: 25px; /* Slider handle height */
  background: #04AA6D; /* Green background */
  cursor: pointer; /* Cursor on hover */
}
</style>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import CrestronButton from '@/components/CrestronButton.vue'
import DekaButton from '@/components/DekaButton.vue'

import CrestronSlider from '@/components/CrestronSlider.vue'

export default {
  name: "Home",
  components: {
    //HelloWorld
    CrestronButton,
    DekaButton,
    CrestronSlider
  },
  computed: {
    wsConnected: function () {
      return this.$store.state.connected;
    },
  }
};
</script>
