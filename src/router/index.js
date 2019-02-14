import Vue from "vue";
import Router from "vue-router";

import Pokemons from "../components/Pokemons";
import AddPokemon from "../components/AddPokemon";
import Pokemon from "../components/Pokemon";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Pokemons",
      component: Pokemons
    },
    {
      path: "/new",
      name: "AddPokemon",
      component: AddPokemon
    },
    {
      path: "/details/:id",
      name: "Pokemon",
      component: Pokemon
    }
  ]
});
