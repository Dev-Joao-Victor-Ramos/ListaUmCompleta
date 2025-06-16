// Alternador de tema
document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    const isDark = document.body.classList.contains("dark-theme");
    localStorage.setItem("darkTheme", isDark);
});

// Carregar tema salvo
if (localStorage.getItem("darkTheme") === "true") {
    document.body.classList.add("dark-theme");
}

// Mostrar status quando executar exercício
function mostrarStatus(exercicio) {
    const status = document.getElementById("status");
    status.style.display = "block";
    status.innerHTML = `✅ <strong>Exercício ${exercicio} executado com sucesso!</strong>`;

    // Esconder após 3 segundos
    setTimeout(() => {
        status.style.display = "none";
    }, 3000);
}

// Função principal para executar os exercícios
function executarExercicio(n) {
    try {
        switch (n) {
            case 1:
                // Exercício 1: Soma de dois números
                let a = Number(prompt("🔢 Digite o primeiro número:"));
                let b = Number(prompt("🔢 Digite o segundo número:"));

                if (isNaN(a) || isNaN(b)) {
                    alert("❌ Por favor, digite números válidos!");
                    return;
                }

                let soma = a + b;
                alert(`✅ Resultado: ${a} + ${b} = ${soma}`);
                mostrarStatus(1);
                break;

            case 2:
                // Exercício 2: Nome completo
                let nome = prompt("👤 Digite seu nome:");
                let sobrenome = prompt("👤 Digite seu sobrenome:");

                if (!nome || !sobrenome) {
                    alert("❌ Por favor, preencha nome e sobrenome!");
                    return;
                }

                alert(`✅ Olá, ${nome} ${sobrenome}! Prazer em conhecê-lo! 👋`);
                mostrarStatus(2);
                break;

            case 3:
                // Exercício 3: Conversão Real para Dólar
                let reais = Number(prompt("💰 Digite o valor em reais (R$):"));

                if (isNaN(reais) || reais < 0) {
                    alert("❌ Por favor, digite um valor válido!");
                    return;
                }

                let dolares = (reais / 5.25).toFixed(2);
                alert(`✅ Conversão: R$ ${reais.toFixed(2)} = US$ ${dolares} 💵`);
                mostrarStatus(3);
                break;

            case 4:
                // Exercício 4: Antecessor e sucessor
                let num = Number(prompt("🔢 Digite um número inteiro:"));

                if (isNaN(num)) {
                    alert("❌ Por favor, digite um número válido!");
                    return;
                }

                alert(`✅ Antecessor: ${num - 1} | Número: ${num} | Sucessor: ${num + 1}`);
                mostrarStatus(4);
                break;

            case 5:
                // Exercício 5: Cálculo de área e valor
                let largura = Number(prompt("📏 Digite a largura do terreno (metros):"));
                let comprimento = Number(prompt("📏 Digite o comprimento do terreno (metros):"));
                let preco = Number(prompt("💰 Digite o valor por m² (R$):"));

                if (isNaN(largura) || isNaN(comprimento) || isNaN(preco) ||
                    largura <= 0 || comprimento <= 0 || preco <= 0) {
                    alert("❌ Por favor, digite valores válidos e positivos!");
                    return;
                }

                let area = largura * comprimento;
                let valorTotal = area * preco;
                alert(`✅ Terreno: ${largura}m × ${comprimento}m\n📐 Área: ${area}m²\n💰 Valor total: R$ ${valorTotal.toFixed(2)}`);
                mostrarStatus(5);
                break;

            case 6:
                // Exercício 6: Consumo de combustível
                let km = Number(prompt("🚗 Digite a distância percorrida (km):"));
                let litros = Number(prompt("⛽ Digite a quantidade de combustível (litros):"));

                if (isNaN(km) || isNaN(litros) || km <= 0 || litros <= 0) {
                    alert("❌ Por favor, digite valores válidos e positivos!");
                    return;
                }

                let consumo = (km / litros).toFixed(2);
                let eficiencia = consumo >= 15 ? "Excelente! 🌟" :
                    consumo >= 12 ? "Bom 👍" :
                        consumo >= 8 ? "Regular 😐" : "Precisa melhorar 😬";

                alert(`✅ Consumo: ${consumo} km/l\n📊 Eficiência: ${eficiencia}`);
                mostrarStatus(6);
                break;

            case 7:
                // Exercício 7: Média de notas
                let notas = [];
                for (let i = 1; i <= 4; i++) {
                    let nota = Number(prompt(`📝 Digite a ${i}ª nota (0-10):`));
                    if (isNaN(nota) || nota < 0 || nota > 10) {
                        alert("❌ Por favor, digite uma nota válida (0-10)!");
                        return;
                    }
                    notas.push(nota);
                }

                let media = notas.reduce((soma, n) => soma + n, 0) / 4;
                let situacao = media >= 7 ? "Aprovado! 🎉" :
                    media >= 5 ? "Recuperação 📚" :
                        "Reprovado 😞";

                alert(`✅ Notas: ${notas.join(", ")}\n📊 Média: ${media.toFixed(2)}\n🎯 Situação: ${situacao}`);
                mostrarStatus(7);
                break;

            case 8:
                // Exercício 8: Conversão Fahrenheit para Celsius
                let fahrenheit = Number(prompt("🌡️ Digite a temperatura em Fahrenheit:"));

                if (isNaN(fahrenheit)) {
                    alert("❌ Por favor, digite uma temperatura válida!");
                    return;
                }

                let celsius = ((fahrenheit - 32) * 5 / 9).toFixed(2);
                let sensacao = celsius >= 35 ? "Muito quente! 🔥" :
                    celsius >= 25 ? "Quente ☀️" :
                        celsius >= 15 ? "Agradável 😊" :
                            celsius >= 5 ? "Frio 🧥" :
                                "Muito frio! ❄️";

                alert(`✅ Conversão: ${fahrenheit}°F = ${celsius}°C\n🌡️ ${sensacao}`);
                mostrarStatus(8);
                break;

            default:
                alert("❌ Exercício inválido!");
        }
    } catch (error) {
        alert("❌ Erro inesperado! Tente novamente.");
        console.error("Erro:", error);
    }
}

// Mensagem de boas-vindas
console.log("🚀 Lista de Exercícios carregada com sucesso!");
console.log("💡 Clique nos botões para executar os exercícios!");