import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-churrasco',
  templateUrl: './churrasco.component.html',
  styleUrls: ['./churrasco.component.css']
})
export class ChurrascoComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  navegarParaParticiparDoChurras(): void {
    this.router.navigate(['/churras/create']);    
  }

}
