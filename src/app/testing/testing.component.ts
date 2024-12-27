import { Component, AfterViewInit } from '@angular/core';
import Swiper, { Pagination, Autoplay, Navigation } from 'swiper';
 
// Register Swiper modules
Swiper.use([Pagination, Autoplay, Navigation]);
 
@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css'],
})
export class TestingComponent implements AfterViewInit {
  ngAfterViewInit() {
    new Swiper('.mySwiper', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true, // Make bullets clickable
      },
      autoplay: {
        delay: 3000, // Delay between transitions (in milliseconds)
        disableOnInteraction: false, // Continue autoplay after user interactions
      },
      navigation: {
        nextEl: '.swiper-button-next', // Selector for the next button
        prevEl: '.swiper-button-prev', // Selector for the previous button
      },
      slidesPerView: 1,
      spaceBetween: 20,
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 4,
        },
      },
    });
  }
}