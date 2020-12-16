import { apolloClient } from './../services/apolloLink'
import Vue from 'vue'
import VueApollo from 'vue-apollo'

Vue.use(VueApollo)
export const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})