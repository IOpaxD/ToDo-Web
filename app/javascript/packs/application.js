// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

// app/assets/index.js

require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")
require('jquery')




$(document).ready(function(){
  $(".background").hide();
    $("#create_todo").click(function () {
            $(".background").show();
    });
    $(".cansel").click(function () {
            $(".background").hide();

});
});

// $ (document) .ready (function () {
//   $ ('.icheckbox_square-blue'). iCheck ({
//     checkboxClass: 'icheckbox_flat',
//     radioClass: 'iradio_flat'
//   });
// });

// $(document).ready(function(){
//   $("#ok").on('click', function(){
//    $(".form").submit();
// });
// });
// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
