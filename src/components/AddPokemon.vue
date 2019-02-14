<template>
  <div class="addPokemon">
    <h1>Add Pokemon</h1>
    <form @submit.prevent="addPokemon">
      <div class="form-control">
        <label for="pokename">Pokemon Name</label>
        <input type="text" v-model="pokemon.name">
      </div>
      <div class="form-control">
        <label for="pokename">Pokemon Trainer</label>
        <input type="text" v-model="pokemon.trainer">
      </div>
      <div class="form-control">
        <label for="pokename">Pokemon Image</label>
        <input type="text" v-model="pokemon.url">
      </div>
      <img 
        v-if="pokemon.url.length > 1" 
        :src="pokemon.url" 
        :alt="pokemon.name">
      <button>Add Pokemon</button>
    </form>
  </div>
</template>

<script>
import { ALL_POKEMONS, ADD_POKEMON } from "../constants";
export default {
  data() {
    return {
      pokemon: {
        name: "",
        trainer: "",
        url: ""
      }
    };
  },
  methods: {
    addPokemon() {
      if (!this.pokemon.name && !this.pokemon.trainer && !this.pokemon.url)
        return;
      this.$apollo
        .mutate({
          mutation: ADD_POKEMON,
          variables: {
            name: this.pokemon.name,
            trainer: this.pokemon.trainer,
            url: this.pokemon.url
          },
          update: (store, { data: { name, trainer, url } }) => {
            const data = store.readQuery({ query: ALL_POKEMONS });
            const pokemon = { name, trainer, url };
            data.allPokemons.push({ pokemon });
            store.writeQuery({ query: ALL_POKEMONS, data });
          }
        })
        .then(data => {
          this.$router.push({ name: "Pokemons" });
        });
    }
  }
};
</script>
