import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit, OnDestroy, AfterViewInit {
  panels!: NodeListOf<Element>;
  images!: NodeListOf<Element>;
  imgs!: HTMLElement | null;

  interval: any;

  idx = 0;

  imgsArray: { src: string; naziv: string }[] = [
    {
      src: 'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      naziv: 'Redovan servis',
    },
    {
      src: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      naziv: 'Popravak',
    },
    {
      src: 'https://images.unsplash.com/photo-1599474151975-1f978922fa02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      naziv: 'Termolakiranje',
    },
    {
      src: 'https://images.unsplash.com/photo-1504222490345-c075b6008014?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      naziv: 'Održavanje',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.panels = document.querySelectorAll('.panel');
    this.images = document.querySelectorAll('#imgs img');
    this.imgs = document.querySelector('#imgs');
    this.interval = setInterval(() => {
      return this.run();
    }, 2000);
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
