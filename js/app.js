function updateTitle(value){
  $('#lenght').attr("title", value)
}

$(document).ready(function(){
  $('#lenght').val(0)
  updateTitle($('#lenght').val())
  var input = $("hashContent");
  var button = $( "button" );

  button.click(function(){
    var hash = $.base64.btoa(CryptoJS.SHA256($("#prefix").val() + $("#service").val().toLowerCase() + $("#suffix").val()))
    if ($('#lenght').val() == 0) {
      $("#hashContent").val(hash);
    }else {
      $("#hashContent").val(hash.slice(0, $('#lenght').val()/2) + hash.slice(-$('#lenght').val()/2 ,hash.length));
    }
  });
});
