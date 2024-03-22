import { CommonModule, DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'meetings',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './meetings.component.html',
  styleUrl: './meetings.component.css'
})

export class MeetingsComponent {

}
