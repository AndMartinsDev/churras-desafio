import { ChurrasService } from './../churras.service';
import { Component, OnInit } from '@angular/core';
import { Churras } from '../churras.model';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-churras-delete',
  templateUrl: './churras-delete.component.html',
  styleUrls: ['./churras-delete.component.css']
})
export class ChurrasDeleteComponent implements OnInit {

  funcionario!: Churras;

  constructor(
    private churrasService: ChurrasService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.churrasService.readById(id).subscribe(funcionario => {
      this.funcionario = funcionario;
    })
  }

  deleteChurras(): void {
    this.churrasService.delete(`${this.funcionario.id}`).subscribe(() => {
      this.churrasService.showMensage('Cancelamento concluido.');
      this.router.navigate(['/churras']);
    })
  }

  cancel(): void {
    this.router.navigate(['/churras']);
  }
}
