export const WalletMutation = {
    ['UPDATE_WALLET_LIST'](state,data){
        state.walletList = data;
    },
    ['UPDATE_WALLET_TYPE'](state,type){
        state.walletType = type;
    },
}
