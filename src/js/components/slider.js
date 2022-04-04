import Swiper, { Navigation, Pagination } from 'swiper';

const createSlider = () => {
	const slider = new Swiper ('.swiper-container', {
		modules: [Navigation, Pagination],
		slideToShow: 1,
		grabCursor: true,
		loop: true,
		pagination: {
			el: '.slider__pagination-list',
			clickable: true,
			bulletClass: 'slide-link',
			bulletActiveClass: 'slide-link--current',
			renderBullet: function (index, className) {
				return `
					<div class="slider__slide-link slide-link ${className}">
						<div class="slide-link__content">
							<img class="slide-link__thumb" src="images/thumb/slider_${index+1}pre.jpg" alt="Image">
							<div class="slide-link__text">
								<p class="slide-link__period">Акция действует с 01.07.18</p>
								<p class="slide-link__title">Этот текст добавлен для демонстрации на странице</p>
							</div>
						</div>
					</div>
				`;
			},
		},
		navigation: {
			nextEl: '.slider__button--next',
			prevEl: '.slider__button--prev',
		},
	});
}

document.addEventListener('DOMContentLoaded', () => {

	const coverBlock = document.querySelector('.slider__cover');
	const startBtn = document.querySelector('.js-start-demo');

	if(startBtn) {
		startBtn.addEventListener('click', () => {
			startBtn.disabled = "true";

			createSlider();

			let counter = 5;
			startBtn.textContent = `Подождите ${counter} сек`;
			counter--;

			const timerInterval = setInterval(() => {
				startBtn.textContent = `Подождите ${counter} сек`;
				counter--;
			}, 1000);

			setTimeout(() => {
				coverBlock.classList.add('slider__cover--hide');
				clearInterval(timerInterval);
				setTimeout(() => {
					coverBlock.classList.add('slider__cover--hidden');
				}, 200)
			}, 5000);
		})
	}
})
