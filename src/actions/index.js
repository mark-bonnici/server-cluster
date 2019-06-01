let nextServerId = 0
export const addServer = text => ({
  type: "ADD_SERVER",
  id: nextServerId++,
  text
})

export const AvailableApps = {
  CHRONOS: "CHRONOS",
  SPARK: "SPARK"
}
