class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }
     //Metodos de instância
    aumentarVolume(){
        this.volume += 2;
    }
    dimuinuirVolume(){
        this.volume -= 2;
    }

    //Metodo estático
    static soma(x, y){
        return x + y;
    }
}

const controle1 = new ControleRemoto('LG');
console.log(ControleRemoto.soma(2, 4));