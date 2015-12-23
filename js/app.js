$(document).ready(function()
{
  var input = $("hashContent");
  var button = $( "button" );

  button.click(function()
  {
    var hash = $.base64.btoa(CryptoJS.SHA256($("#prefix").val() + $("#service").val() + $("#suffix").val()))
    $("#hashContent").val(hash);
  });
  // Générer le hash avec les valeurs du formulaire

});
