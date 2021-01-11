import { productsQuery } from './../../../graphql/queries/products'
import {GetterTree, ActionTree, MutationTree} from 'vuex'
import {apolloClient} from '@/services/apolloLink'
import {State} from '@/store/modules/product/interfaces'
import ProductType from '@/store/modules/product/types'
import gql from 'graphql-tag'
const namespaced = true

const state: State = {
  products: []
}

const getters: GetterTree<State, any> = {
  [ProductType.getters.GETPRODUCT]: (state) => {
    return state.products
  }
}

const mutations: MutationTree<State> = {
  [ProductType.mutation.SETPRODUCTS]: (state, products) => {
    state.products = products
  }
}

const actions: ActionTree<State, any> = {
  [ProductType.actions.PRODUCTSDATA]: async ({commit}) => {
    try {
      const result = await apolloClient.query({
        query:  gql`${productsQuery}`
      })
      commit(ProductType.mutation.SETPRODUCTS, result.data.getProducts)
    } catch (err) {
      console.log(err)
    }
  }
}

export default {
  namespaced,
  state,
  getters,
  mutations,
  actions
}