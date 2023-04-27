function mudandoEstado(button) {
    if (button.classList.contains("aberto")) {
        button.classList.remove("aberto");
        button.classList.add("em-uso");
        button.textContent = "Em Uso";
    }
    else if (button.classList.contains("em-uso")) {
        button.classList.remove("em-uso");
        button.classList.add("manutencao");
        button.textContent = "Em Manutenção";
    }
    else {
        button.classList.remove("manutencao");
        button.classList.add("aberto");
        button.textContent = "Aberto";
    }
}