import { connect, createStore } from "undux";

const store = createStore({
    online: false
});

store
    .on("online")
    .subscribe(online => console.log("onlineness changed", online));

export const withStore = connect(store);
