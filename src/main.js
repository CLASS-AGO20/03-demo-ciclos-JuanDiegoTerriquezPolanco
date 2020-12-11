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
}

let app = new App();
console.log(app.sumarParesFor());