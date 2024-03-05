import { Component } from '@angular/core';
import { Form,FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {
  nome: FormControl = new FormControl('',
    [Validators.required]);
  preco: FormControl = new FormControl('',
    [Validators.required, Validators.min(5.1)])
  

    constructor() {}
    ngOnInit() {}
    salvar(): void 
      {

      console.log('salvar produto');

      if (this.nome.invalid) {
        console.log('Nome invalido');
        return;
      }


      if (this.preco.invalid) {
        console.log('preço invalido');
        return;
      }

      console.log('nome  '+ this.nome.value);
      console.log('preco    '+this.preco.value);

      }
    



    
} 
