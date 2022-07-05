import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit, OnDestroy {
  panels!: NodeListOf<Element>;
  images!: NodeListOf<Element>;
  imgs!: HTMLElement | null;

  interval = setInterval(() => {
    return this.run();
  }, 2000);

  idx = 0;

  constructor() {}

  ngOnInit(): void {
    this.panels = document.querySelectorAll('.panel');
    this.images = document.querySelectorAll('#imgs img');
    this.imgs = document.querySelector('#imgs');
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  onPanelClick(event: any) {
    this.panels.forEach((panel) => {
      panel.classList.remove('active');
    });
    event.target.classList.add('active');
  }

  run() {
    this.idx++;
    this.changeImage();
  }

  changeImage() {
    if (this.idx > this.images.length - 1) {
      this.idx = 0;
    } else if (this.idx < 0) {
      this.idx = this.images.length - 1;
    }
  }

  resetInterval() {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      return this.run();
    }, 2000);
  }

  nextImage() {
    this.idx++;

    this.changeImage();
    this.resetInterval();
  }

  previousImage() {
    this.idx--;

    this.changeImage();
    this.resetInterval();
  }
}
