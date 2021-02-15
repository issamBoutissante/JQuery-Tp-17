$(function () {
  $("input[type=text]").keyup(function (e) {
    $("#Nom").text(e.target.value);
  });
  $("select").change(function (e) {
    $("#selectedOption").text(e.target.value);
  });
});
