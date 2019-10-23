import { Component, Input, OnInit } from '@angular/core';
import { post } from 'selenium-webdriver/http';
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreatedAt: Date = new Date();
  faHeart = faHeart;
  faHeartBroken = faHeartBroken;

  constructor() { }

  ngOnInit() {
  }

  setLove(nb: number) {
    this.postLoveIts = this.postLoveIts + nb;
  }

}
