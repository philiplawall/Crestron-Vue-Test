<template>
    <crestron-button v-bind:id=id ><slot /></crestron-button>
</template>

<script>

import CrestronButton from '@/components/CrestronButton.vue'

export default {
  name: "DekaButton",
  components: {
    CrestronButton
  },
  props: {
    id: Number,
  },
}
</script>