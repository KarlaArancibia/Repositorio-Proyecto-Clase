

document.addEventListener("DOMContentLoaded", function () {
    const filterItems = document.querySelectorAll(".filtrar-item");
    const postBoxes = document.querySelectorAll(".noticia-cont");

    filterItems.forEach(item => {
        item.addEventListener("click", function () {
            const value = this.getAttribute("data-filter");

            filterItems.forEach(btn => btn.classList.remove("filtro-activo"));
            this.classList.add("filtro-activo");

            postBoxes.forEach(noticiass => {
                if (value === "todo" || noticiass.classList.contains(value)) {
                    noticiass.style.display = "block";
                } else {
                    noticiass.style.display = "none";
                }
            });
        });
    });
});


document.querySelector('.menu-hamburguesa').addEventListener('click', function () {
    document.getElementById('barra-lateral').classList.toggle('open');
    document.getElementById('overlay').classList.toggle('show');
    
    
    this.classList.toggle('hide');
});
  

document.getElementById('overlay').addEventListener('click', function () {
    document.getElementById('barra-lateral').classList.remove('open');
    document.getElementById('overlay').classList.remove('show');
    
    
    document.querySelector('.menu-hamburguesa').classList.remove('hide');
});



var faq = document.getElementsByClassName("soporte-pregunta");
    var i;
    for (i = 0; i < faq.length; i++) {
        faq[i].addEventListener("click", function () {
           
            this.classList.toggle("active");
            
            var body = this.nextElementSibling;
            if (body.style.maxHeight === "100px") {
                body.style.maxHeight = "0px";
            } else {
                body.style.maxHeight = "100px";
            }
        });
    }