<template>
	<div class="mbc-footer">
		<div class="mbc-footer-contact">
			<div class="mbc-wrapper flex-col xs:flex-row flex justify-between gap-12 px-4 py-12">

				<!-- left side -->
				<div>
					<h2>Have a general inquiry?</h2>
					<p class="pt-2 pb-4">Let us know about any questions or comments regarding our services, and we'll reach out as soon as possible!</p>
					<div class="mbc-footer-contact__form">
						<div class="flex gap-4 pb-4">
							<input placeholder="Full Name" type="text" class="w-full">
							<input placeholder="Email" type="text" class="w-full">
						</div>
						<div class="pb-4">
							<textarea placeholder="How can we help you?" class="w-full"></textarea>
						</div>
						<div>
							<div class="mbc-button mbc-button--inverse mbc-button--inverse--full-w text-center">Submit</div>
						</div>
					</div>
				</div>

				<!-- right side -->
				<div>
					<div class="mbc-footer-contact__icons">
						<h2>Connect with us</h2>
						<p class="pt-2 pb-4">Get involved and stay updated with us on our other social media platforms.</p>
						<div class="text-xl flex gap-4">
							<i class="fa-brands fa-facebook"></i>
							<i class="fa-brands fa-instagram"></i>
							<i class="fa-brands fa-twitter"></i>
							<i class="fa-brands fa-linkedin"></i>
						</div>
					</div>
					<div class="mbc-footer-contact__location pt-8">
						<h2>Visit our office</h2>
						<p class="pt-2"><i class="fa-solid fa-location-pin mr-2"></i>1208-6888 Cooney Rd, Richmond BC, V6YE01</p>
						<p class="pt-2"><i class="fa-solid fa-phone mr-2"></i>+1 (778)-789-1002</p>
					</div>
				</div>
			</div>
		</div>

		<!-- disclaimer -->
		<div class="mbc-footer-location">
			<div class="mbc-wrapper flex flex-wrap justify-between gap-4 p-4 text-sm">
				<div>Logo</div>
				<div>Copyright © {{ new Date().getFullYear() }} MBC Services Ltd. • <a href="https://henesysgroup.com" target="_blank">Powered by Henesys Group</a></div>
			</div>
		</div>
	</div>
</template>

<style lang="postcss">
.mbc-footer {
	color: var(--secondary-color-10);
	&-contact {
		background-color: var(--primary-color);
		&__form {
			input, textarea {
				color: var(--secondary-color);
				border-radius: 2px;
				padding: 8px;
				&::placeholder {
					color: var(--secondary-color);
					opacity: 0.75;
				}
			}
		}
		&__icons {
			i {
				cursor: pointer;
				transition: all 0.2s;
				&:hover {
					opacity: 0.8;
				}
			}
		}
	}
	&-location {
		background-color: var(--primary-color-2);
	}
}
</style>