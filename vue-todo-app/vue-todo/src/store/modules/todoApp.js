const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          if (localStorage.key(i) !== "csCursors") {
            arr.push(
              JSON.parse(localStorage.getItem(localStorage.key(i)))
            );
          }
        }
      }
    }
    return arr;
  },
};

const state = {
  todoItems: storage.fetch()
};

const getters = {
  storedTodoItems(state) {
    return state.todoItems;
  }
}

const mutations = {
  addOneItem(state, todoItem) {
    console.log(this);
    const obj = {
      completed: false,
      item: todoItem
    };
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
  },
  toggleOneItem(state, payload) {
    console.log("mutations - 토글 원 아이템");
    const todoItems = state.todoItems[payload.index];
    todoItems.completed = !todoItems.completed;
    localStorage.setItem(todoItems.item, JSON.stringify(todoItems));
  },
  removeOneItem(state, payload) {
    console.log("mutations - 리무브 원 아이템");
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.index, 1);
  },
  clearAllItems(state) {
    if (state.todoItems.length >= 1) {
      localStorage.clear();
      state.todoItems = [];
    }
  }

}

export default {
  state, getters, mutations
}
