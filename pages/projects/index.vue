<template>
	<div class="mbc-page page--projects">
		<banner title="Some of our satisfied client work" preTitle="Projects"/>
		<div class="mbc-wrapper flex flex-col items-center">
			<div class="mbc-section mbc-section--projects">
				<div class="mbc-project" v-for="(p, i) in projects" :key="i">
					<div class="mbc-project__thumbnail cursor-pointer">
						<button>View More</button>
						<div class="mbc-project__thumbnail__overlay" @click="$router.push('/projects/' + p._id)" />
						<img :src="require(`~/assets/images/${p.thumbnail}`)" :alt="p.thumbnailAlt">
					</div>
					<div class="mbc-project__content">
						<div class="mbc-project__content__title mb-2">{{ p.title }}</div>
						<div class="text-sm flex justify-between pb-4">
							<div class="mbc-project__content__category">{{ p.category }}</div>
							<div class="mbc-project__content__date">{{ p.date | formatDate }}</div>
						</div>
						<div class="mbc-project__line" />
					</div>
					<div class="mbc-project__summary">
						{{ p.summary }}
					</div>
				</div>
			</div>
		</div>
  	</div>
</template>
<script>
import { projects } from '~/assets/js/data';
export default {
	setup() {
		return {
			projects
		}
	},
}
</script>
<style lang="postcss">
.mbc {
	&-section--projects {
		@apply inline-grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 justify-between;
	}
	&-project {
		box-shadow: 2px 2px 2px rgb(0 0 0 / 4%);
		&__thumbnail {
			@apply relative overflow-hidden;
			button {
				@apply opacity-0 absolute left-0 right-0 z-20 m-auto p-2 text-sm;
				top: 50%;
				transform: translateY(-50%);
				transition: all 0.3s ease-in-out;
				color: white;
				background-color: var(--secondary-color);
				z-index: 1;
				max-width: 180px;
				width: 100%;
				border-radius: 3px;
			}
			&:hover {
				button { opacity: 1; }
				img { transform: scale(1.05); }
			}
			img { 
				transition: all 0.3s ease-in-out;
				width: 100%;
			}
			&__overlay {
				@add-mixin dark-overlay;
			}
		}
		&__content {
			@apply p-4 pb-0 bg-white;
			color: var(--secondary-color-3);
			img {
				width: 100%;
				height: auto;
			}
			&__title {
				color: var(--secondary-color);
			}
			&__date {}
			&__category {}
		}
		&__line {
			border-bottom: 1px solid var(--secondary-color-9);
		}
		&__summary {
			color: var(--secondary-color-3);
			@apply p-4 bg-white;
		}
	}
}
</style>
