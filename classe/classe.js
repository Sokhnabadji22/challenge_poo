//classe :c'est une maquette pour créer des objects
class Personne {
 //constructeur : c'est une fonction qui implemente les proprietés d'un object
    constructor(nom, age) {
      this.nom = nom;
      this.age = age;
    }
  
    description() {
      console.log(`Nom: ${this.nom}, Âge: ${this.age}`);
    }
  }
  
  // Exemple d'utilisation de la classe Personne
  const personne1 = new Personne("Arame Badji", 26);
  personne1.description();
  
  const personne2 = new Personne("Mata Djiba", 3);
  personne2.description();

  