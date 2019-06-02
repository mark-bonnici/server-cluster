const initialState = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]

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

    case "ADD_APP": {
      const newState = [...state]
      for (let cluster of state) {
        if (cluster.initials === undefined) {
          newState[cluster.id - 1] = {
            id: cluster.id,
            initials: action.initials,
            appName: action.appName,
            color: action.color,
            timeAdded: Date.now()
          }
          break
        }
      }
      return newState
    }

    case "REMOVE_APP": {
      const newState = [...state]
      const appsSortedByDate = newState
        .filter(cluster => cluster.initials === action.initials)
        .sort(function(a, b) {
          return a.timeAdded - b.timeAdded
        })

      var invertedArray = appsSortedByDate.slice(0).reverse()
      for (let cluster of invertedArray) {
        if (cluster.initials === action.initials) {
          newState[cluster.id - 1] = {
            id: cluster.id
          }
          break
        }
      }
      return newState
    }
    default:
      return state
  }
}

export default servers
