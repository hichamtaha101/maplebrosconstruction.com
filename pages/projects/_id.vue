<template>
	<div class="mbc-page page--project-detail">
		<banner :title="project.title" preTitle="Projects"/>
		<div class="mbc-wrapper">
			<div class="mbc-section mbc-section--project-detail">
				<div>
					<button aria-label="View All Projects" class="mbc-button ml-6 mb-12 flex items-center justify-start" @click="$router.push('/projects')"><i class="fa fa-angle-left mr-2"></i>View All Projects</button>
				</div>
				<VueSlickCarousel class="block xs:hidden" v-bind="settings">
					<div class="mbc-detail__slide" v-for="(slide, i) in project.slides" :key="i">
						<div class="mbc-detail__slide__image">
							<div></div>
							<img class="mb-6" :src="require(`~/assets/images/${slide.imageName}`)" :alt="slide.imageAlt">
						</div>
						<h3 class="mbc-detail__slide__title">{{i + 1}}. <span>{{ slide.imageTitle }}</span> {{ project.title }}</h3>
						<div class="mbc-detail__slide__date pb-3">{{ project.date | formatDate }}</div>
						<p class="mbc-detail__slide__description">{{slide.imageDescription}}</p>
					</div>
				</VueSlickCarousel>
			</div>
		</div>
  	</div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel';
import { projects } from '~/assets/js/data';
export default {
	components: { 
		VueSlickCarousel,
	},
	asyncData( { req, params, redirect }) {
		return new Promise( async( resolve ) => {
			const find = projects.find( p => p._id === params.id );
			if ( !!find === false ) {
				redirect('/error');
				resolve();
			} else {
				resolve({
					project: find,
					settings: {
						dots: false,
						arrows: false,
						infinite: true,
						slidesToShow: 2,
						slidesToScroll: 1,
						autoplay: true,
						autoplaySpeed: 2000,
						swipeToSlide: true,
						draggable: true,
						responsive: [{
							breakpoint: 768,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							},
						}]
					}
				});
			}
		})
	}
};
</script>
<style lang="postcss">
.mbc {
	&-section--project-detail {}
	&-detail {
		&__slide {
			color: var(--secondary-color);
			img {
				@apply w-full h-auto;
				box-shadow: 2px 2px 2px rgb(0 0 0 / 4%);
			}
			&__title {
				span {
					@apply pr-2 mr-2;
					border-right: 1px solid var(--secondary-color);
				}
			}
			&__date {
				color: var(--secondary-color-3);
			}
			&__description {
			}
			&__image {
				@apply relative;
				/* So on desktop you don't try to copy the image over, and actually swipe through. */
				div {
					@apply absolute top-0 left-0 w-full h-full;
				}
			}
		}
	}
}
</style>
