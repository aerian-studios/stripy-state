import { connect, createStore, withLogger } from "undux";

const store = withLogger(
    createStore({
        online: false
    })
);

export const withStore = connect(store);
