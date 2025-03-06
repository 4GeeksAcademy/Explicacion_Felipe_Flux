export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      },
    ],
    contador: 0,
    selectedContact: {}
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "add_task":
      const { id, color } = action.payload;

      return {
        ...store,
        todos: store.todos.map((todo) =>
          todo.id === id ? { ...todo, background: color } : todo
        ),
      };

    case "sum_1":
      return {
        ...store,
        contador: store.contador + 1,
      };

    case "set_todos":
      return {
        ...store,
        todos: action.payload
      }

    case "find_contact":
      return {
        ...store,
        selectedContact: store.contact.find((contact) => contact.id === action.payload)
      }

    default:
      throw Error("Unknown action.");
  }
}
