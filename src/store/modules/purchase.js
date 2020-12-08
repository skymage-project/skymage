import * as purchaseService from '../../service/purchase.js';

export const state = {
    invoiceList: [],
};
export const mutations = {
    INVOICE(){
        
    }
};
export const actions = {
    invoice({ commit},invoice){
        state.invoiceList.push(invoice);
        commit('INVOICE')
    }
};
export const getters = {};
