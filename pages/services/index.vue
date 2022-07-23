<template>
	<div class="mbc-page page--services">
		<banner title="Theres nothing we can't do" preTitle="Services"/>
		<div class="mbc-wrapper">
			<div class="mbc-section mbc-section--services flex flex-col gap-12">
				<div class="mbc-service" v-for="(service, i) in services" :key="i" :id="service.hash">
					<div class="mbc-service__image">
						<img :src="require(`~/assets/images/${service.imageName}`)" alt="blank-placeholder-image">
					</div>
					<div class="mbc-service__content">
						<div class="mbc-service__title text-xl mt-auto">{{ service.title }}</div>
						<div class="mbc-service__description">{{ service.description }}</div>
						<div class="mbc-service__button pt-5 mt-auto">
							<button class="mbc-button text-center" @click="$router.push(`/quote?service=${service.title}`)">Get A Quote</button>
						</div>
					</div>
				</div>
			</div>
		</div>
  	</div>
</template>
<script>
import { services } from '~/assets/js/data';
export default {
	asyncData({ req, params, redirect }) {
		return new Promise( async( resolve ) => {
			resolve({ services });
		})
	}
}
</script>
<style lang="postcss">
.mbc {
	&-service {
		@apply flex-col sm:flex-row flex items-center;
		@media(--sm) {
			background-color: var(--primary-color);
		}

		&__image {
			@apply relative z-10;
			@media(--min-sm) {
				max-width: 480px;
			}
			box-shadow: 2px 2px 2px rgb(0 0 0 / 4%);
			img {
				@apply w-full h-auto;
			}
		}
		&__content {
			@apply p-8 flex justify-center relative flex-col;
			height: 244px;
			background-color: var(--secondary-color-9);
			color: var(--secondary-color);
			box-shadow: 2px 2px 2px rgb(0 0 0 / 4%);
			flex-grow: 1;
			border-top-left-radius: 0px;
			border-bottom-left-radius: 0px;
			@media(--min-sm) {
				border-top-right-radius: 3px;
				border-bottom-right-radius: 3px;
			}
		}
		&__button > div {
			@media(--min-sm) {
				margin-left: auto;
				margin-right: 0;
			}
		}
		&__description {
			color: var(--secondary-color-2);
		}

		&:nth-child(even) {
			@apply flex-col sm:flex-row-reverse;
			.mbc-service__content {
				box-shadow: -3px 3px 3px rgb(0 0 0 / 10%);
				border-top-right-radius: 0px;
				border-bottom-right-radius: 0px;
				@media(--min-sm) {
					border-top-left-radius: 3px;
					border-bottom-left-radius: 3px;
				}
			}
			.mbc-service__button > div {
				margin-right: auto;
				margin-left: 0;
			}
		}
	}
}
</style>