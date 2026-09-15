// ========================================
// TEMA ESCURO
// ========================================

const btnTemaEscuro = document.querySelector(".btn-tema-escuro");

btnTemaEscuro.addEventListener("click", mudaTema);

function mudaTema() {

    const corpoPagina = document.body;

    if (corpoPagina.classList.contains("tema-escuro")) {

        corpoPagina.classList.remove("tema-escuro");

    } else {

        corpoPagina.classList.add("tema-escuro");

    }
}


// ========================================
// VOLTAR AO TOPO
// ========================================

const btnVoltarTopo = document.querySelector(".btn-voltar-topo");

btnVoltarTopo.addEventListener("click", function() {

    window.scrollTo(0, 0);

});


// ========================================
// INTERAÇÕES - POST 1
// ========================================

// Gostei
const gostei1 = document.getElementById("gostei1");
const contadorGostei1 = document.getElementById("contadorGostei1");

gostei1.addEventListener("click", function() {
    contadorGostei1.textContent =
        Number(contadorGostei1.textContent) + 1;
});


// Interessante
const interessante1 = document.getElementById("interessante1");
const contadorInteressante1 =
    document.getElementById("contadorInteressante1");

interessante1.addEventListener("click", function() {
    contadorInteressante1.textContent =
        Number(contadorInteressante1.textContent) + 1;
});


// Tenho uma dúvida
const duvida1 = document.getElementById("duvida1");
const contadorDuvida1 =
    document.getElementById("contadorDuvida1");

duvida1.addEventListener("click", function() {
    contadorDuvida1.textContent =
        Number(contadorDuvida1.textContent) + 1;
});


// ========================================
// INTERAÇÕES - POST 2
// ========================================

// Gostei
const gostei2 = document.getElementById("gostei2");
const contadorGostei2 = document.getElementById("contadorGostei2");

gostei2.addEventListener("click", function() {
    contadorGostei2.textContent =
        Number(contadorGostei2.textContent) + 1;
});


// Interessante
const interessante2 = document.getElementById("interessante2");
const contadorInteressante2 =
    document.getElementById("contadorInteressante2");

interessante2.addEventListener("click", function() {
    contadorInteressante2.textContent =
        Number(contadorInteressante2.textContent) + 1;
});


// Tenho uma dúvida
const duvida2 = document.getElementById("duvida2");
const contadorDuvida2 =
    document.getElementById("contadorDuvida2");

duvida2.addEventListener("click", function() {
    contadorDuvida2.textContent =
        Number(contadorDuvida2.textContent) + 1;
});


// ========================================
// INTERAÇÕES - POST 3
// ========================================

// Gostei
const gostei3 = document.getElementById("gostei3");
const contadorGostei3 = document.getElementById("contadorGostei3");

gostei3.addEventListener("click", function() {
    contadorGostei3.textContent =
        Number(contadorGostei3.textContent) + 1;
});


// Interessante
const interessante3 = document.getElementById("interessante3");
const contadorInteressante3 =
    document.getElementById("contadorInteressante3");

interessante3.addEventListener("click", function() {
    contadorInteressante3.textContent =
        Number(contadorInteressante3.textContent) + 1;
});


// Tenho uma dúvida
const duvida3 = document.getElementById("duvida3");
const contadorDuvida3 =
    document.getElementById("contadorDuvida3");

duvida3.addEventListener("click", function() {
    contadorDuvida3.textContent =
        Number(contadorDuvida3.textContent) + 1;
});
