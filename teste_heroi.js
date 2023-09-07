// Definindo a classe Heroi
class Heroi {
    // Construtor da classe com as propriedades nome, idade e tipo
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método para realizar um ataque
    atacar() {
      let ataque;
      // Definindo o ataque com base no tipo do herói
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'não tem um ataque definido';
      }
  
      // Exibindo a mensagem de ataque
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Criando uma instância da classe Heroi
  const meuHeroi = new Heroi('Herói Nome', 25, 'mago');
  
  // Chamando o método atacar
  meuHeroi.atacar(); // Saída: O mago atacou usando magia
  