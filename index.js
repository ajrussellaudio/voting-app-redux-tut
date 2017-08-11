import makeStore from './src/store';
import startServer from './src/server';

export const store = makeStore();
startServer(store);

var action = [
  {type: "SET_ENTRIES", entries: require("./entries.json")},
  {type: "NEXT"}
]

actions.forEach(action => {
  store.dispatch(action);
})
