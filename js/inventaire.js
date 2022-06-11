$(document).ready(function () {
  $("#inventaire").DataTable({
    processing: true,
    ajax: "js/inventaire.json",
    columns: [{ data: "categorie" }, { data: "produit/service" }],
  });
});
