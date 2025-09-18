<script setup lang="ts">

import {SelectButton as PvSelectButton} from "primevue";
</script>

<template>
  <pv-select-button v-model="$i18n.locale" :options="[{label:'English', value: 'en'}, {label: 'Español', value: 'es'}]" /> 
</template>

<style scoped>

</style>