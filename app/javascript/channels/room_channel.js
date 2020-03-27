import consumer from "./consumer"

consumer.subscriptions.create("RoomChannel", {
  connected() {
    console.log('соединяем!')
  },

  disconnected() {

  },

  received(data) {
    $('#msg').append('<div class="message">' + data.content + '</div>')
    console.log(data)
    // console.log(data.console)
  }
});

var submit_messages;

$(document).on('turbolinks:load', function () {
  submit_messages()
})

submit_messages = function () {
  $('#message_content').on('keydown', function (event) {
    if (event.keyCode === 13) {
      $('input').click()
      event.target.value = ''
      event.preventDefault()
      console.log('--Ok--')
    }
  })
}