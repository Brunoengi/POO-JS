class Npc{
    static alerta = false
    constructor(energia) {
        this.energia = energia
        
    }
    info = function(){
        console.log(`Energia: ${this.energia}`)
        console.log(`Alerta: ${Npc.alerta?"Sim":"Não"}`)
        console.log("------------------------")

    }
    static alertar = function(){
        Npc.alerta = true
    } 
}

const npc1 = new Npc(100)
const npc2 = new Npc(80)
const npc3 = new Npc(30)

Npc.alerta = true

console.log(npc1.info())
console.log(npc2.info())
console.log(npc3.info())

// npc1.alertar() não vai funcionar pois a função não é da instância e sim da classe