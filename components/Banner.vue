<template>
	<div class="mbc-banner">
		<div class="mbc-wrapper py-8 relative">
			<div class="mbc-banner__title--pre">{{ preTitle }}</div>
			<div class="mbc-banner__title relative z-10">{{ title }}</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		preTitle: {
			type: String,
			required: true,
			default: '',
		},
		title: {
			type: String,
			required: true,
			default: '',
		},
	}
}
</script>
<style lang="postcss">
.mbc-banner {
	background-color: var(--secondary-color-9);
	&__title {
		color: var(--secondary-color);
		&--pre {
			color: var(--secondary-color);
			font-size: 24px;
		}
		font-size: 32px;
	}

	.mbc-wrapper::before {
		@apply absolute top-0 w-full h-full opacity-70;
		content: '';
		left: 50%;
		background-color: var(--secondary-color-8);
		display: block;
		@media(--xs) {
			display: none;
		}
	}
}
</style>