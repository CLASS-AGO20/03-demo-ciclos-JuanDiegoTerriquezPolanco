export default class App {
    sumarParesFor(){
        let aux=0;
        for (let i = 0; i <= 20; i++) {
            if(i%2==0){
                aux=aux+i;
            }
        }
        return aux;
    }
    contarImparesFor(inicio,fin){
        let aux=0;
        for (let i = inicio; i <= fin; i++) {
            if (i%2==0) {
                aux++;
            }    
        }
        return aux;
    }
}

let app = new App();
console.log(app.sumarParesFor());
console.log(app.contarImparesFor(10,30));