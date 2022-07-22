<template>
  <div class="mbc-page page--home">
		<div class="mbc-section--hero">
			<div class="mbc-wrapper flex-col sm:flex-row flex gap-8">
				<div class="w-full">
					<h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
					<p class="mt-4 leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					<div class="flex flex-wrap sm:flex-nowrap gap-8 mt-8">
						<div class="mbc-button text-center" @click="$router.push('/about')">
							About Us
						</div>
						<div class="mbc-button text-center" @click="$router.push('/quote')">
							Request A Quote
						</div>
					</div>
				</div>
				<div class="w-full"></div>
			</div>
		</div>
		<div class="mbc-section mbc-section--services">
			<div class="mbc-wrapper">
				<h1 class="text-center">Our Services</h1>
				<p class="text-center mbc-section__sub-title">As Vancouver's top notch contractor, we offer a wide range of services.</p>
				<div class="mbc-our-services grid-cols-1 xs:grid-cols-2 md:grid-cols-4 grid gap-12 mt-16">
					<div class="mbc-service-card flex-grow flex flex-col gap-6 text-center" v-for="(service, i) in services" :key="i">
						<div class="mbc-service-card__title text-xl">{{service.title }}</div>
						<div class="mbc-service-card__icon"><i :class="`${service.icon} text-6xl`"></i></div>
						<div class="mbc-service-card__description">{{ service.description }}</div>
						<div class="mbc-button mbc-button--full-w" @click="$router.push(`${service.link}#${service.hash}`)">Learn More</div>
					</div>
				</div>
			</div>
		</div>
		<div class="mbc-section mbc-section--work">
			<div class="mbc-wrapper">
				<h1 class="text-center">Our Latest Work</h1>
				<p class="text-center mbc-section__sub-title">Check out our latest exterior and interior renovations.</p>
				<div class="mbc-our-work flex-col sm:flex-row flex gap-6 mt-16">
					<div class="mbc-featured-work flex-grow"></div>
					<div class="mbc-work-wrap grid gird-cols-1 xs:grid-cols-2 gap-6 flex-grow">
						<div class="mbc-work" v-for="(w, i ) in work" :key="i">
						</div>
					</div>
				</div>
				<div class="flex justify-center mt-16">
					<div class="mbc-button text-center" @click="$router.push('/projects')">View All Projects</div>
				</div>
			</div>
		</div>
		<div class="mbc-section mbc-section--testimonials">
			<div class="mbc-wrapper">
				<h1 class="text-center">Testimonials</h1>
				<p class="text-center mbc-section__sub-title">See what our clients have to say about MBC Services.</p>
				<VueSlickCarousel class="mt-16" v-bind="sliderSettings">
					<div v-for="(review, i) in testimonials" :key="i" class="mbc-review-card">
						<div :class="`mbc-review-card__image ${review.imageUrl ? '' : 'mbc-review-card__image--no-image'}`">
							<i class="fas fa-quote-right" />
						</div>
						<div class="mbc-review-card__comment text-lg text-center">{{ review.comment }}</div>
						<div class="mbc-review-card__stars">
							<i class="fa-solid fa-star" v-for="(star, si) in review.stars" :key="si" />
						</div>
						<div class="mbc-review-card__author text-xl text-center">{{ review.author }}</div>
					</div>
				</VueSlickCarousel>
			</div>
		</div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import { services } from '~/assets/js/data';

export default {
	components: {
		VueSlickCarousel,
	},
	asyncData() {
		return new Promise( ( resolve ) => {
			resolve({
				sliderSettings: {
					dots: false,
					arrows: false,
					infinite: true,
					slidesToShow: 3,
					slidesToScroll: 1,
					autoplay: true,
					autoplaySpeed: 5000,
					swipeToSlide: true,
					draggable: true,
					responsive: [
						{
							breakpoint: 1240,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
							},
						},
						{
							breakpoint: 600,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							},
						},
					],
				},
				services,
				testimonials: [
					{
						author: 'John Smith',
						comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
						imageUrl: '',
						stars: 5,
					},
					{
						author: 'Larry Lobster',
						comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
						imageUrl: '',
						stars: 5,
					},
					{
						author: 'Bat Mane',
						comment: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
						imageUrl: '',
						stars: 5,
					},
					{
						author: 'Scooter Mans',
						comment: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						imageUrl: '',
						stars: 5,
					}
				],
				featuredWork: {
					title: '',
					category: '',
					date: '',
					imageUrl: ''
				},
				work: [
					{
						title: '',
						category: '',
						date: '',
						imageUrl: ''
					},
					{
						title: '',
						category: '',
						date: '',
						imageUrl: ''
					},
					{
						title: '',
						category: '',
						date: '',
						imageUrl: ''
					},
					{
						title: '',
						category: '',
						date: '',
						imageUrl: ''
					}
				]
			});
		})
	},
	data() {
		return {}
	}
}
</script>

<style lang="postcss">
.mbc-section {
	padding-top: 140px;
	padding-bottom: 172px;
	&--work {
		background-color: var(--secondary-color-9);
	}
	&--hero {
		@apply py-8 flex flex-row justify-center;
		min-height: 992px;
		background-color: var(--secondary-color-9);
	}
	h1 {
		@apply relative mb-8 pb-4 text-4xl;
		color: var(--secondary-color);
		&::after {
			content: '';
			border-bottom: 4px solid var(--secondary-color-3);
			margin: 0 auto;
			@apply left-0 right-0 absolute w-12 bottom-0;
		}
	}
	&__sub-title {
		font-size: 18px;
		color: var(--secondary-color-2);
	}
}

.slick-list {
	@apply pb-2 !important;
}
.slick-track {
	@apply gap-6 flex !important;
}

.mbc-review-card {
	background-color: var(--secondary-color-3);
	color: var(--secondary-color-10);
	box-shadow: -3px 3px 3px 3px #0000000f;
	border: 1px solid var(--secondary-color-2);
	border-radius: 4px;
	@apply flex justify-center items-center p-6 flex-col gap-5 !important;

	&__image {
		width: 160px;
		height: 160px;
		border-radius: 50%;
		background: var(--color_light_grey_2);
		@apply relative mb-4;

		&--no-image {
			background-image: url(~assets/images/blank-profile-pic.png);
			background-size: cover;
			background-position: center center;
		}

		i {
			border-radius: 50%;
			width: 38px;
			height: 38px;
			font-size: 24px;
			background-color: var(--secondary-color-2);
			color: var(--secondary-color-9);
			@apply absolute top-0 right-0 inline-flex justify-center items-center;
		}
	}

	&__stars {
		@apply flex gap-1;
		i {
			color: #F7C948;
			font-size: 16px;
		}
	}
}

.mbc-service-card {
	i {
		color: var(--secondary-color);
		background-color: var(--secondary-color-9);
		padding: 28px;
		border-radius: 50%;
	}
	&__title {
		color: var(--secondary-color);
	}
	&__description {
		color: var(--secondary-color-3);
	}
}

.mbc-featured-work, .mbc-work {
	background-color: var(--secondary-color-10);
	border-radius: 4px;
	transition: all 0.2s;
	min-height: 265px;
	box-shadow: 0px 4px 7px #00000026;
	&:hover {
		box-shadow: 0px 8px 14px #00000026;
		cursor: pointer;
	}
}
.mbc-work {
	min-height: 265px;
	&-wrap {
	}
}
</style>
