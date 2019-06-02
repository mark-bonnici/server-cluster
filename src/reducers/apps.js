const initialState = [
  {
    initials: "Hd",
    appName: "Hadoop",
    color: "pink"
  },
  {
    initials: "Ch",
    appName: "Chronos",
    color: "blue"
  },
  {
    initials: "Sp",
    appName: "Spark",
    color: "green"
  },
  {
    initials: "St",
    appName: "Storm",
    color: "cyan"
  },
  {
    initials: "Rl",
    appName: "Rails",
    color: "purple"
  }
]

const apps = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default apps
