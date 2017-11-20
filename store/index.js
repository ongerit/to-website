export const state = () => ({
  message: []
})

export const mutations = {
  SEND_MESSAGE (state, obj) {
    state.message.push({
      obj,
      date: new Date().toJSON()
    })
  }
}
