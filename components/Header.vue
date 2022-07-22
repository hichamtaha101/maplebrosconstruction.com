<template>
	<div class="mbc-header header">
		<div class="mbc-wrapper pt-4 pb-0 xs:pb-4 xs:pt-4 justify-center xs:justify-between flex-col xs:flex-row items-center gap-2 xs:gap-0">
			<div class="logo text-2xl uppercase">
				<NuxtLink to="/">
					MBC Services
				</NuxtLink>
			</div>
			<div class="nav-items-wrap">
				<div class="w-full nav-items flex flex-nowrap xs:flex-wrap gap-2 xs:gap-4">
					<div :class="`p-3 cursor-pointer text-center xs:text-left w-full xs:w-auto hover:opacity-80 transition-opacity`">
						<NuxtLink to="/services">
							Services
						</NuxtLink>
					</div>
					<div :class="`p-3 cursor-pointer text-center xs:text-left w-full xs:w-auto hover:opacity-80 transition-opacity`">
						<NuxtLink to="/projects">
							Projects
						</NuxtLink>
					</div>
					<div :class="`p-3 cursor-pointer text-center xs:text-left w-full xs:w-auto hover:opacity-80 transition-opacity`">
						<NuxtLink to="/about">
							About
						</NuxtLink>
					</div>
					<div :class="`p-3 cursor-pointer text-center xs:text-left w-full xs:w-auto hover:opacity-80 transition-opacity`">
						<NuxtLink to="/quote">
							Quote
						</NuxtLink>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="postcss">
.header {
	background-color: var(--primary-color);
	color: var(--secondary-color-10);
	box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
	@media (--xs) {
		height: auto;
		.mbc-wrapper { padding-left: 0px; padding-right: 0px;}
	}
	>div:first-child {
		display: flex;
	}
	.nav-items {
		&-wrap {
			@media (--xs) {
				width: 100%;
				display: flex;
				flex-grow: 1;
				border-top: 1px solid var(--primary-color-9);
			}
		}
		@media (--xs) {
			>div:not(:last-child) {
				border-right: 1px solid var(--primary-color-9);
			}
		}
		.nuxt-link-active { position: relative; }
		.nuxt-link-active::before {
			content: "";
			position: absolute;
			border-bottom: 3px solid var(--primary-color-5);
			bottom: -14px;
			height: 3px;
			width: 100%;
		}
	}
}
</style>