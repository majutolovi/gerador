function gerarDígito(base) {
    let soma = 0;
    let multiplicador = base.length + 1;

    for (let num of base) {
        soma += parseInt(num) * multiplicador;
        multiplicador--;
    }

    const resto = soma % 11;
    return resto < 2 ? "0" : (11 - resto).toString();
}

function gerarNovoCpf() {
    // Gera 9 números aleatórios
    let noveNumeros = "";
    for (let i = 0; i < 9; i++) {
        noveNumeros += Math.floor(Math.random() * 10).toString();
    }

    // Calcula o 1º dígito verificador
    const digito1 = gerarDígito(noveNumeros);
    
    // Calcula o 2º dígito verificador
    const digito2 = gerarDígito(noveNumeros + digito1);

    const cpfFinal = noveNumeros + digito1 + digito2;
    
    // Máscara de formatação: 000.000.000-00
    document.getElementById('cpf-result').value = 
        cpfFinal.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

// Gera um ao carregar a página
window.onload = gerarNovoCpf;