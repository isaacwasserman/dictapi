var gettext = function() {
  
  var pdfUrl = "https://e.edim.co/17242771/vocab_list_15_8th_grade.pdf?Expires=1424706503&Signature=mcUavedRIKH4WVPivsMy2l0eG1IQog6YT7HhmjFA8YCFAetGg6nV5wgks7a2KCgT-VedGhodxK8MQOMLILKjW6s4DcWb6EJrbx~s~BhqZrOv6X~ZCULJRvEM1u5NBT-EAHh~n9yyTnb4z37ZeF5sRiS2suK4EFt3vK7dE3-sWngl07qh-xposT-ff2RjMHEiNJoKdLAvDhHtuHUa9Z3m8Do6rvq~fU1j7WNrO36sCKB3HmVQ3Njl6DzI4vUcvkFhMXAvGd75gwO7-oKdFeBw4iaEEHXjZQ0p61ggkwYDK5TgQONPGNfidGeesiMUVBRpCJFhAwXZcatLJlkwQhmuHA__&Key-Pair-Id=APKAIJNVNRBLLSTGN23Q"
  var pdf = PDFJS.getDocument(pdfUrl);

  pdf.then(function(pdf) {
      var maxPages = pdf.pdfInfo.numPages;
      for (var j = 1; j <= maxPages; j++) {
          var page = pdf.getPage(j);

          page.then(function(page) {
              var textContent = page.getTextContent();

          })
      }
  });
  
}