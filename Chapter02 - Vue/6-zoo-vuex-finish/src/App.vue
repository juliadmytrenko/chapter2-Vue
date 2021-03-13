<template>
  <div id="app" class="jumbotron">
    <div class="row">
      <div class="col-9"><h1><span v-if="name">Witaj, <strong>{{name}}</strong>! </span><span>Nauczmy się Vue.js</span></h1></div>
      <div class="col-3"><img width="50%" :src="name ? img1 : img2"></div>
    </div>
    <hr />
    <introduction @nameChanged="onNameChanged" :initialName="name"></introduction>
    <hr />
    <h2><span v-if="name">{{name}}! </span>Wybierz zwierzę </h2>
    <div class="row">
      <select v-model="animalsForZoo" class="col-12" multiple="multiple" name="animals" id="animals">
        <option v-for="animal in animals" v-bind:key="animal" :value="animal">{{animal}}</option>
      </select>
    </div>
    <hr />
    <zoo :animals="animalsForZoo" :animalsCodes="animalsCodes" :name="name"></zoo>
  </div>
</template>

<script>
import Zoo from './components/Zoo'
import Introduction from './components/Introduction'

export default {
  name: 'app',
  components: {
    Zoo,
    Introduction
  },
  data () {
    return {
      animalsForZoo: []
    }
  },
  computed: {
    name () {
      return this.$store.state.name
    },
    animals () {
      return this.$store.state.animals
    },
    animalsCodes () {
      return this.$store.state.animalsCodes
    },
    img1 () {
      return this.$store.state.img1
    },
    img2 () {
      return this.$store.state.img2
    }
  },
  methods: {
    onNameChanged (newName) {
      this.name = newName
    }
  }
}
</script>

<style>
#app {
  width: 60%;
  margin: 20px auto auto auto;
}

input {
  padding-left: 10px;
}

.animal {
  font-size: 4em;
}

.red {
  color: red;
}

.green {
  color: green;
}
</style>
