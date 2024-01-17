// contact start

$(document).ready(function(){
    var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }	
});
// contact end

//index start
function showGallery(category) {
    // Tıklanan bağlantının varsayılan davranışını engelle
    event.preventDefault();
  
    // Tüm galeri sayfalarını gizle
    var galleryPages = document.querySelectorAll('.tm-gallery-page');
    galleryPages.forEach(function (page) {
      page.classList.add('hidden');
    });
  
    // İlgili kategoriye ait galeri sayfasını göster
    var selectedGallery = document.getElementById(category);
    selectedGallery.classList.remove('hidden');
  }
  //index end