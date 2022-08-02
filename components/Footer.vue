<template>
	<div class="mbc-footer">
		<div class="mbc-footer-contact">
			<div class="mbc-wrapper flex-col xs:flex-row flex justify-between gap-12 px-4 py-12">

				<!-- left side -->
				<div>
					<h2>Have a general inquiry?</h2>
					<p class="pt-2 pb-4">Let us know about any questions or comments regarding our services, and we'll reach out as soon as possible!</p>
					<div class="mbc-footer-contact__form relative">
						<loader v-if="isLoading"/>
						<div class="flex gap-4 pb-4">
							<input v-model="formData.fullName" placeholder="Full Name" type="text" class="w-full">
							<input v-model="formData.email" placeholder="Email" type="text" class="w-full">
						</div>
						<div class="pb-4">
							<textarea v-model="formData.message" placeholder="How can we help you?" class="w-full"></textarea>
						</div>
						<div>
							<button @click="submitEmail" class="mbc-button mbc-button--inverse mbc-button--inverse--full-w text-center"><i class="fa fa-paper-plane mr-2"></i>Submit</button>
						</div>
						<div :class="`mbc-footer-contact__form__notifications ${!nPass ? 'text-red-600' : 'text-green-600'}`" v-if="notifications.length">
							<ul>
								<li v-for="(n, ni) in notifications" :key="ni">*{{ n }}</li>
							</ul>
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
						<p class="pt-2"><i class="fa-solid fa-location-pin mr-2"></i>1269-6969 Cooney Rd, Richmond BC, V6YE09</p>
						<p class="pt-2"><i class="fa-solid fa-phone mr-2"></i>+1 (778)-789-6969</p>
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
<script>
import { testEmail } from '~/assets/js/util';
import axios from 'axios';
import { reactive, ref } from 'vue';

const formDataFieldsMapped = {
	fullName: 'Full name',
	email: 'Email address',
	message: 'Message',
}

const defaultFormData = {
	fullName: '',
	email: '',
	message: '',
};

export default {
	setup() {
		const formData = reactive(JSON.parse(JSON.stringify(defaultFormData)));
		const notifications = ref([]);
		const nPass = ref(true);
		const isLoading = ref(false);

		async function submitEmail() {
			// Basic field validations.
			const errors = Object.keys(formData)
			.filter( k => formData[k].trim() === '' )
			.map( k => `${formDataFieldsMapped[k]} cannot be empty.`);

			const fullName = formData.fullName.trim();
			const email = formData.email.trim();
			const message = formData.message.trim();

			// Email validation.
			if ( email !== '' && !testEmail(email) ) {
				errors.push('Please enter a valid email address.');
			}
			if ( fullName !== '' && fullName.length < 3 ) {
				errors.push('Full name must be more than 2 characters.');
			}
			if ( message !== '' && message.length < 11 ) {
				errors.push('Your message must be greater than 10 characters in length.');
			}

			if ( errors.length ) {
				notifications.value = errors;
				nPass.value = false;
				return;
			}

			// Communicate with lambda server.
			isLoading.value = true;
			try {
				const response = await axios.post( `https://dxnmuircbi.execute-api.us-west-2.amazonaws.com${window.location.hostname === 'localhost' ? '/dev' : ''}/email`, {
					template: 'inquiry',
					subject: 'Maple Bros Construction - Customer Inquiry.',
					toAddress: 'hichamtaha101@gmail.com',
					content: {
						title: 'A customer has made the following inquiry.',
						data: { email, message, fullName },
					},
					from: 'hicham.taha@henesysgroup.com',
					layout: 'maplebrosconstruction',
				} );
				notifications.value = [response.data];
				nPass.value = response.pass;
				if ( nPass.value ) { 
					for ( const key in defaultFormData ) { formData[key] = defaultFormData[key]; }
				}
			} catch (e) {
				console.log('error', e);
				nPass.value = false;
				notifications.value = ['Unable to communicate with servers, please try again later.'];
			}
			isLoading.value = false;
		}

		return {
			formData,
			notifications,
			nPass,
			isLoading,
			submitEmail,
		}
	},
}
</script>
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
			&__notifications {
				@apply mt-4 py-1 px-2 rounded-sm text-sm;
				background-color: var(--secondary-color-10);
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