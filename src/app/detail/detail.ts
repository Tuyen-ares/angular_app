import { Component, signal } from '@angular/core';
import { ActivatedRoute , RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './detail.html',
  styleUrl: './detail.css'
})
export class Detail {
  id = '';
  constructor(private route: ActivatedRoute) {
    //this.route.params.subscribe(params => {
   //   this.id = params['id'];
   // });
   this.id = String(this.route.snapshot.paramMap.get('id'));

}
}
