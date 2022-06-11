var donnees = null;
$.ajax({
  async: false,
  global: false,
  url: "js/jstree.json",
  dataType: "json",
  success: function (data) {
    donnees = data;
  },
});

$(function () {
  $("#jstree").jstree();
  $("#jstree").on("changed.jstree", function (e, data) {
    console.log(data.selected);
  });

  $("#using_json").jstree(donnees);
});
