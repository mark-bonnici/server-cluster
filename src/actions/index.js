let serverIdCounter = 16

export const addServer = () => ({
  type: "ADD_SERVER",
  id: serverIdCounter++
})

export const removeServer = () => ({
  type: "REMOVE_SERVER",
  id: serverIdCounter--
})

export const AvailableApps = {
  CHRONOS: "CHRONOS",
  SPARK: "SPARK"
}
