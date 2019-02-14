<template>
  <div class="pokemons">

    <Loader :loading="this.$apollo.loading" />
    
    <ul>
      <li class="create">
        <router-link to="/new">+</router-link>
      </li>

      <li v-for="pokemon in allPokemons" :key="pokemon.id">
        <router-link :to="`details/${pokemon.id}`">
          <div class="pokemon">
            <img :src="pokemon.url" :alt="pokemon.name">
            <h3>{{ pokemon.name }}</h3>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { ALL_POKEMONS } from "../constants";
import Loader from "./Loader";

export default {
  data() {
    return {
      allPokemons: []
    };
  },
  components: { Loader },
  apollo: {
    allPokemons() {
      return {
        query: ALL_POKEMONS
      };
    }
  }
};
</script>
