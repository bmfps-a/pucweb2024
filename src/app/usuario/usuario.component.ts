import { Component } from '@angular/core';
import { Form,FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  nome: FormControl = new FormControl('',
  [Validators.required]);
  idade: FormControl = new FormControl('',
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
  
  
        if (this.idade.invalid) {
          console.log('idade invalido');
          return;
        }
  
        console.log('nome  '+ this.nome.value);
        console.log('preco    '+this.idade.value);
  
        }
    }
    

