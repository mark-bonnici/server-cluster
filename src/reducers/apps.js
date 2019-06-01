const initialState = [
  {
    initials: "Hd",
    appName: "Hadoop",
    color: "magenta"
  },
  {
    initials: "Ch",
    appName: "Chronos",
    color: "blue"
  },
  {
    initials: "Sp",
    appName: "Spark",
    color: "Green"
  },
  {
    initials: "St",
    appName: "Storm",
    color: "Cyan"
  },
  {
    initials: "Rl",
    appName: "Rails",
    color: "Purple"
  }
]

const apps = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_APP":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case "REMOVE_APP":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
    default:
      return state
  }
}

export default apps
