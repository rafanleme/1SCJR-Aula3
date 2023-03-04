function operacao1() {
    setTimeout(function teste() {
        console.log("Chamou operacao1");
    }, 2000);
}

function operacao2() {
    operacao1();
    console.log("Chamou operacao2");
}

operacao2();

// non-block io não bloqueia a thread principal
// para operações de input/output (temporizadores)

// console.log("Chamou operacao2");
// console.log("Chamou operacao1");
// setTimeout 2s
// operacao1();
// operacao2();