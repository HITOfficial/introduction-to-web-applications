import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {
  actorsArray: string[] = []
  videosArray: string[] = []

  constructor() {

  }

  ngOnInit(): void {
  }

  addNewActor(actor: string) {
    if (actor.length) {
      this.actorsArray.push(actor);
    }
  }

  addNewVideo(video: string) {
    if (video.length) {
      this.videosArray.push(video);
    }
  }

}
