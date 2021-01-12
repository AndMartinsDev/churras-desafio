import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Churras } from './../churras.model';
import { ChurrasService } from './../churras.service';

@Component({
  selector: 'app-churras-update',
  templateUrl: './churras-update.component.html',
  styleUrls: ['./churras-update.component.css']
})
export class ChurrasUpdateComponent implements OnInit {

  funcionario!: Churras;

  constructor(
    private churrasService: ChurrasService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.churrasService.readById(id).subscribe(funcionario => {
      this.funcionario = funcionario
    });
  }

  updateChurras(): void {
    if(this.funcionario.nome != "") {
      this.churrasService.update(this.funcionario).subscribe(() => {
        this.churrasService.showMensage('Participação atualizada com Sucesso!')
        this.router.navigate(['/churras'])
      })
    } else {
      alert("Ops!!! Preencha os campos corretamente.")
    }
  }

  cancel(): void {
    this.router.navigate(['/churras'])
  }
}
