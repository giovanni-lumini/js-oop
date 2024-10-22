/* 
1-In questo esercizio, dovrai creare una classe in JavaScript chiamata "Veicolo" con alcune proprietà e metodi.     //FATTO
2-La classe "Veicolo" dovrebbe avere le seguenti caratteristiche:       //FATTO
marca
anno
colore
porte
carburante
3-Successivamente:
Creiamo una nuova istanza di veicolo che rappresenti una Fiat 2019 blu.     //FATTO
Otteniamo le informazioni della vettura utilizzando il metodo informazioni()        //FATTO
Calcoliamo l'età della vettura utilizzando il metodo calcolaEta()       //FATTO

BONUS
In questo bonus, dovrai estendere la classe "Veicolo" con una nuova classe chiamata "Automobile". La classe "Automobile" eredita tutte le proprietà e i metodi della classe "Veicolo" e ne aggiunge alcuni specifici per le automobili.
Successivamente:
Istanziamo una nuova Automobile (Opel, 2020, nera, con 4 porte, a benzina)
Stampiamo il numero di porte e il tipo di carburante.
IDEE PER PRATICA RIPASSO:
crea un array di veicoli
cicla nell'array usando un forEach
cicla nell'array usando un for
crea una nuova array che contenga solo il nome dei veicoli
crea una nuova array con solo i veicoli elettriche
*/

class Veicolo {
    marca;
    anno;
    colore;
    porte;
    carburante;

    //constructor
    constructor (marca, anno, colore, porte, carburante){
        this.marca = marca;
        this.anno = anno;
        this.colore = colore;
        this.porte = porte;
        this.carburante = carburante;
    }

    //method informations
    get_informations(){
        return `La macchina è di marca ${this.marca}, è del ${this.anno} e di colore ${this.colore}.`
    }

    //method age calculator
    age_calculator(){
        let year = new Date().getFullYear()
        console.log(year);
        let year_calculator = year - this.anno;
        return `La macchina di marca ${this.marca} del ${this.anno} di colore ${this.colore}, ha ${year_calculator} anni.`
        
    }
    
}

//function constructor
const fiat_blu = new Veicolo ("Fiat", 2019, "blu");
console.log(fiat_blu);

//method informations
console.log(fiat_blu.get_informations());

//method age calculator
console.log(fiat_blu.age_calculator());


