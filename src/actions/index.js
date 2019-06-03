let serverIdCounter = 5

export const addServer = () => ({
  type: "ADD_SERVER",
  id: serverIdCounter++
})

export const removeServer = () => ({
  type: "REMOVE_SERVER",
  id: serverIdCounter--
})

export const addApp = (initials, appName, color) => ({
  type: "ADD_APP",
  initials: initials,
  appName: appName,
  color: color
})

export const removeApp = (initials, appName, color) => ({
  type: "REMOVE_APP",
  initials: initials,
  appName: appName,
  color: color
})
