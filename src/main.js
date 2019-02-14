import Vue from "vue";
import VueApollo from "vue-apollo";
import ApolloClient from "apollo-boost";

import router from "./router";
import App from "./App";
import "./assets/style.css";

const client = new ApolloClient({
  uri: "https://api.graph.cool/simple/v1/cjfw7nz9l3jhr0120lgjjun04"
});

Vue.use(VueApollo);

const ApolloProvider = new VueApollo({
  defaultClient: client
});

new Vue({
  el: "#app",
  router,
  provide: ApolloProvider.provide(),
  components: { App },
  template: "<App/>"
});
