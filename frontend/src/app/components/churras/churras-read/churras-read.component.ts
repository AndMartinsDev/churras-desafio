import { Arrecadacao } from './../churras.model';
import { ChurrasService } from './../churras.service';
import { Component, OnInit } from '@angular/core';
import { Churras } from '../churras.model';

@Component({
  selector: 'app-churras-read',
  templateUrl: './churras-read.component.html',
  styleUrls: ['./churras-read.component.css']
})
export class ChurrasReadComponent implements OnInit {

  participantesList: Churras[] = [];
  displayedColumns = ['nome', 'beber', 'acompanhante', 'nomeAcompanhante', 'beberAcompanhante', 'action'];

  arecadacao: Arrecadacao = {
    "arrecadacaoFuncionario": 0,
    "arrecadacaoAcompanhante":0,
    "arrecadacaoTotal": 0
  }

  constructor(private churrasService: ChurrasService) { }

  ngOnInit(): void {
    this.churrasService.read().subscribe(displayedColumns => {
      this.participantesList = displayedColumns;
      this.calculo();
    })
  }

  calculo(): void {
    let arrecadacaoFuncionario = 0;
    let arrecadacaoAcompanhante = 0;
    let arrecadacaoTotal = 0;

    this.participantesList.forEach(element => {

      if (element.beber == "Sim") {
        arrecadacaoFuncionario += 20;
        arrecadacaoTotal += 20;
      } else {
        arrecadacaoFuncionario += 10;
        arrecadacaoTotal += 10;
      }
      if (element.acompanhante == "Sim" && element.beberAcompanhante == "Sim") {
        arrecadacaoAcompanhante += 20;
        arrecadacaoTotal += 20;
      } else {
        arrecadacaoAcompanhante += 10;
        arrecadacaoTotal += 10
      }

      this.arecadacao.arrecadacaoFuncionario = arrecadacaoFuncionario;
      this.arecadacao.arrecadacaoAcompanhante = arrecadacaoAcompanhante;
      this.arecadacao.arrecadacaoTotal = arrecadacaoTotal;
    });
  };
}
