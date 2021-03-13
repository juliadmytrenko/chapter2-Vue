import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const animalsCodes = {
  dog: '&#x1f436;',
  cat: '&#x1f638;',
  monkey: '&#x1f435;',
  unicorn: '&#x1f984;',
  tiger: '&#x1f42f;',
  mouse: '&#x1f42d;',
  rabbit: '&#x1f430;',
  cow: '&#x1f42e;',
  whale: '&#x1f433;',
  horse: '&#x1f434;',
  pig: '&#x1f437;',
  frog: '&#x1f438;',
  koala: '&#x1f43c;'
}

const animals = Object.keys(animalsCodes)
var state = {
  name: 'Mati',
  animals,
  animalsCodes,
  animalsForZoo: [],
  img1: '../../static/images/emotka1.png',
  img2: '../../static/images/emotka2.png'
}

const getters = {

}

const mutations = {
  updateName (state, newName) {
    state.name = newName
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations
})
