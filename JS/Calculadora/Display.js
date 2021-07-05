class Display{
    constructor(displayValorAnterior,displayValorActual){
        this.displayValorAnterior = displayValorActual;
        this.displayValorActual = displayValorActual;
        this.calculadora = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.symbol ={
            
            sumar: '+',
            restar: '-',
            dividir: '/',
            multiplicar: 'x'
        };
    }

    agregarNumero(numero){
        if(numero === '.' && this.valorActual.includes('.')) return
        this.valorActual += numero.toString();
        this.imprimirValores();
    }

    imprimirValores(){
        displayValorActual.textContent = this.valorActual;
        displayValorAnterior.textContent = `${this.valorAnterior} ${this.symbol[this.tipoOperacion] || ''}`;
    }
    
    borrar(){
       this.valorActual = this.valorActual.slice(0,-1);
       this.imprimirValores();
    }

    borrarTodo(){
        this.valorAnterior = '';
        this.valorActual = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

 

    computar(tipo){

        tipo === 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirValores();

    }
    calcular(){
    
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if(isNaN(valorActual) || isNaN(valorActual)) return 
       
        this.valorActual = this.calculadora[this.tipoOperacion](valorAnterior,valorActual);
       
    }
}