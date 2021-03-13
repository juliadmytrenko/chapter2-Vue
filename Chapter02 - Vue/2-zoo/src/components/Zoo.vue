<template>
  <div v-if="animals.length > 0">
    <h2><span v-if="name">{{name}}! </span>To są zwierzęta w Twoim Zoo:</h2>
    <ol>
      <li v-for="animal in animals" v-bind:key="animal"><span class="animal"
                                                              v-html="animalsCodes[animal]"></span></li>
    </ol>
  </div>
</template>

<script>
export default {
  props: ['animals', 'animalsCodes', 'name']
}
</script>

<style>

</style>
