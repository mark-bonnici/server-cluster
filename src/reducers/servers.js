const initialState = [
  {
    id: 1,
    initials: "Hd",
    appName: "Hadoop",
    color: "pink",
    timeAdded: "Added 32min ago"
  },
  {
    id: 2,
    initials: "Ch",
    appName: "Chronos",
    color: "blue",
    timeAdded: "Added 2h ago"
  },
  {
    id: 3,
    initials: "Ch",
    appName: "Chronos",
    color: "blue",
    timeAdded: "Added 2h ago"
  },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
  {
    id: 11,
    initials: "Sp",
    appName: "Spark",
    color: "green",
    timeAdded: "Added 21min ago"
  },
  { id: 12 },
  { id: 13 },
  { id: 14 },
  { id: 15 }
]

const servers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SERVER":
      return [
        ...state,
        {
          id: action.id
        }
      ]
    case "REMOVE_SERVER":
      return [...state.filter((_, i) => i !== state.length - 1)]
    default:
      return state
  }
}

export default servers
