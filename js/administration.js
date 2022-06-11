var fomations = {
  ReactJS: "Los Angeles",
  VueJS: "New York",
  AngularJS: "Miami",
};

$(document).ready(function () {
  $("#menu-formation").click(function () {
    var fomation = $("#menu-formation").find(":selected").text();
    if (fomation == "Nouvelle Formation") {
      $("#nomFormation").val("");
      $("#lieuFormation").val("");
    } else {
      $("#nomFormation").val(fomation);
      $("#lieuFormation").val(fomations[fomation]);
    }
  });

  $("#modif-formation").submit(function (event) {
    var formation = $("#menu-formation").find(":selected").text();
    if (formation == "Nouvelle Formation") {
      var newformation = $("#nomFormation").val();
      if (newformation in fomations) {
        alert("Ce nom de formation existe deja");
      } else {
        var lieu = $("#lieuFormation").val();
        var ajouter =
          '<option value="' + newformation + '">' + newformation + "</option>";
        $("#menu-formation").append(ajouter);
        fomations[newformation] = lieu;
        $("#menu-formation").val(newformation);
      }
    } else {
      var modifFormation = $("#nomFormation").val();
      var modifLieu = $("#lieuFormation").val();
      if (modifFormation in fomations) {
        alert("Ce nom de formation existe deja");
      } else {
        $(`[value='${formation}']`)
          .text(modifFormation)
          .attr("value", modifFormation);
        delete fomations[formation];
        fomations[modifFormation] = modifLieu;
      }
    }
    event.preventDefault();
  });
});
