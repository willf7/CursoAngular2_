import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrl: './meu-form.component.css'
})
export class MeuFormComponent {
  nome = 'abc'

  pessoa = {
    nome : "William",
    idade : 19,
    sobrenome: "Felipe",
    end : {
      cidade: "Vitoria",
      bairro: "Redencao",
      Rua: "I"
    }
  }
}
