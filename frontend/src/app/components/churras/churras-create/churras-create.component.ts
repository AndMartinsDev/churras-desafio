import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Churras } from '../churras.model';
import { ChurrasService } from './../churras.service';

@Component({
  selector: 'app-churras-create',
  templateUrl: './churras-create.component.html',
  styleUrls: ['./churras-create.component.css']
})
export class ChurrasCreateComponent implements OnInit {

  participante: Churras = {
    nome: "",
    beber: "",
    acompanhante: "Não",
    nomeAcompanhante: "Sem Convidado",
    beberAcompanhante: "Não"
  }

  constructor(private churrasService: ChurrasService, private router: Router) { }

  ngOnInit(): void {
  }

  createChurras(): void {
    if(this.participante.nome == "" || this.participante.beber == "") {
      alert("Ops!!! Preencha os dados corretamente.")
    } else {
      this.churrasService.create(this.participante).subscribe(() => {
        this.churrasService.showMensage('Sucessooo !!!');
        this.router.navigate(['/churras']);
      })
    }
  }

  cancel(): void {
    this.router.navigate(['/churras']);
  }

}
