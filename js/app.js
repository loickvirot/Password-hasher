$(document).ready(function(){
  $('#lenght').val(16)
  var input = $("#hashContent");
  var button = $( "button" );

  footerDate();

  button.click(function(){
    var hash = $.base64.btoa(CryptoJS.SHA256($("#prefix").val() + $("#service").val().toLowerCase() + $("#suffix").val()))
    if ($('#lenght').val() == 0) {
      input.val(hash);
    } else {
      $("#hashContent").val(hash.slice(0, $('#lenght').val()/2) + hash.slice(-$('#lenght').val()/2 ,hash.length));
    }
  });
});

function footerDate() {
  var date = new Date()
  $('#currentYear').html(' - '  + date.getFullYear())
}