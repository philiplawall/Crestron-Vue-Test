<template>
  <input
    type="range"
    min="1"
    max="65535"
    v-model="value"
    @input="onInput"
    @change="onChange"
  />
</template>

<style scoped>
</style>

<script>
export default {
  name: "CrestronSlider",
  props: {
    id: Number,
  },
  data: function () {
    return {
      //value: 0,
    };
  },
  computed: {
    value: {
      get: function () {
        return this.$store.state.aRxSignals[this.id];
      },
      set: function (newValue) {
        this.$store.dispatch("sendAnalogSignal", {
          id: this.id,
          value: Number(newValue),
        });
      },
    },
  },
  methods: {
    onChange: function () {
      //console.log("onChange");
      //console.log(this.value);
      /*this.$store.dispatch("sendAnalogSignal", {
        id: this.id,
        value: Number(this.value),
      });*/
    },
    onInput: function () {
      //console.log("onInput");
      //console.log(this.value);
      /*this.$store.dispatch("sendAnalogSignal", {
        id: this.id,
        value: Number(this.value),
      });*/
    },
  },
};
</script>