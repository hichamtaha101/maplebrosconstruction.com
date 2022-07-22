<template>
	<div class="mbc-page page--about">
		<banner title="Let our experts handle all your needs" preTitle="About" />
		<div class="mbc-wrapper">
			<div class="mbc-section mbc-section--about">
				<h1 class="text-center">Who We Are</h1>
				<p class="mbc-section__sub-title text-center">Duis aute irure dolor in reprehenderit in voluptate velit irure dolor.</p>
			</div>
			<div class="mbc-team pb-12">
				<div class="mbc-team-member" v-for="(member, i) in people" :key="i">
					<div class="mbc-team-member__image flex justify-center mb-8">
						<img class="rounded-full" :src="require(`~/assets/images/${member.photoName}`)" :alt="member.name">
					</div>
					<div class="mbc-team-member__contact bg-white p-8 flex flex-col gap-4">
						<h3 class="mbc-team-member__contact__name">
							<span>{{ member.name }}</span><span>{{ member.title }}</span>
						</h3>
						<p class="mbc-team-member__contact__bio">{{ member.bio }}</p>
						<div class="mbc-team-member__contact__email flex gap-2 items-center">
							<i class="fa fa-envelope"/><a :href="`mailto:${member.email}`" class="underline">{{ member.email }}</a>
						</div>
						<div class="mbc-team-member__contact__phone flex gap-2 items-center">
							<i class="fa fa-phone"/><a :href="`tel:${member.phone}`" class="underline">{{ member.phone }}</a>
						</div>
					</div>
				</div>
			</div>
		</div>
  	</div>
</template>
<script>
export default {
	asyncData: ({ req, params, redirect }) => {
		return new Promise( resolve => {
			resolve({
				people: [{
					photoName: 'blank-profile-pic.png',
					name: 'Youns Taha',
					title: 'Owner',
					email: 'youns@gmail.com',
					phone: '778-666-6969',
					bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
				}, {
					photoName: 'blank-profile-pic.png',
					name: 'Josh States',
					title: 'Manager',
					email: 'josh@gmail.com',
					phone: '778-666-6969',
					bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
				}, {
					photoName: 'blank-profile-pic.png',
					name: 'Dillon Shmillon',
					title: 'Employee',
					email: 'dillon@gmail.com',
					phone: '778-666-6969',
					bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
				}]
			})
		});
	}
}
</script>
<style lang="postcss">
.mbc {
	&-section--about {
		padding-bottom: 60px !important;
	}
	&-team {
		@apply inline-grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 justify-between;
		padding-bottom: 140px;
		&-member {
			&__contact {
				border-radius: 4px;
				box-shadow: 2px 2px 2px rgb(0 0 0 / 4%);
				color: var(--secondary-color-2);

				&__name {
					color: var(--secondary-color);
					span:first-child {
						border-right: 1px solid var(--secondary-color);
						margin-right: 8px;
						padding-right: 8px;
					}
				}
			}
		}
	}
}
</style>
