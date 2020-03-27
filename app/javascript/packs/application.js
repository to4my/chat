require("@rails/ujs").start()
require("turbolinks").start()
require("jquery")
require("@rails/activestorage").start()
require("channels")


$(document).on('turbolinks:load', function () {

    console.log('Работает!')
})