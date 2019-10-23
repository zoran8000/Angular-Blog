import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  posts = [
    {
      title: 'Premier post',
      content: 'Pep hini en deus gwir da gaout digoll gwirion dirak lezioù-barn broadel kenveliek evit oberoù o.',
      loveIts: 3,
      createdAt: '2019-10-01 10:00:25'
    },
    {
      title: 'Second post',
      content: 'Pep hini en deus gwir da gaout digoll gwirion dirak lezioù-barn broadel kenveliek evit oberoù o.',
      loveIts: -5,
      createdAt: '2019-10-10 17:25:25'
    },
    {
      title: 'Dernier post',
      content: 'Pep hini en deus gwir da gaout digoll gwirion dirak lezioù-barn broadel kenveliek evit oberoù o.',
      loveIts: 0,
      createdAt: '2019-09-07 08:10:25'
    }
  ];
}
