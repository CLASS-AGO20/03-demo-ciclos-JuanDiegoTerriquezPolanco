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
    sumarParesWhile(){
        let i=0,aux=0;
        while (i<=20) {
            if(i%2==0){
                aux=aux+i;
            }
            i++;
        }
        return aux;
    }
    contarImparesWhile(inicio, fin){
        let i=0,aux=0;
        for (let i = inicio; i <= fin; i++) {
            if (i%2==0) {
                aux++;
            }
            i++;
        }
        return aux;
    }
    sumarParesDo(){
        do {
        let i=0,aux=0;
        while (i<=20) {
            if(i%2==0){
                aux=aux+i;
            }
            i++;
        }
        return aux;
        } while (i<=20);    
    }
}

let app = new App();
console.log(app.sumarParesFor());
console.log(app.contarImparesFor(10,30));
console.log(app.sumarParesWhile());
console.log(app.contarImparesWhile(10,30));
console.log(app.sumarParesDo());