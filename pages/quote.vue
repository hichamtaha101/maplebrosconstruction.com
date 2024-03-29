<template>
	<div class="mbc-page page--quote">
		<banner title="Let us know your needs" preTitle="Request A Quote"/>
		<div class="mbc-wrapper">
			<div class="mbc-section mbc-section--quote">
				<h1 class="text-center">One Email Away</h1>
				<p class="mbc-section__sub-title text-center">If you're looking for reliable and trustworthy construction services in Vancouver, look no further than our team. Contact us today to schedule a consultation and see how we can turn your dreams into reality.</p>
			</div>
			<div class="mbc-quote flex-col sm:flex-row flex pb-12 sm:gap-6">
				<div class="mbc-quote--left-graphic w-full">
					<img src="~assets/images/quote-left-graphic.png" alt="Client and construction services consultant shaking hands">
				</div>
				<div class="mbc-quote--right-content w-full">
					<div class="mbc-quote-form p-8 bg-white flex flex-col gap-6 relative">
						<loader v-if="isLoading"/>
						<div class="mbc-quote-form__input mbc-quote-form__input--select">
							<label for="service-select">Service</label>
							<select name="service-select" v-model="formData.service">
								<option value="" disabled :selected="formData.service === ''">Please select an option*</option>
								<option :value="service.title" v-for="(service, i) in services" :key="i" :selected="formData.service === service.title">{{ service.title }}</option>
								<option value="Other" :selected="formData.service === 'Other'">Other</option>
							</select>
						</div>
						<div class="mbc-quote-form__input mbc-quote-form__input--text" v-if="formData.service === 'Other'">
							<label for="other-service-input">Other Service <span class="text-red-500">*</span></label>
							<input type="text" v-model="formData.serviceOther" name="other-service-input">
						</div>
						<div class="mbc-quote-form__input mbc-quote-form__input--text">
							<label for="full-name-input">Full Name <span class="text-red-500">*</span></label>
							<input v-model="formData.fullName" type="text" name="full-name-input">
						</div>
						<div class="mbc-quote-form__input mbc-quote-form__input--text">
							<label for="email-input">Email Address <span class="text-red-500">*</span></label>
							<input v-model="formData.email" type="text" name="email-input">
						</div>
						<div class="mbc-quote-form__input mbc-quote-form__input--text">
							<label for="phone-number-input">Phone Number</label>
							<input v-model="formData.phoneNumber" v-mask="'(###)-###-####'" type="text" name="phone-number-input">
						</div>
						<div class="mbc-quote-form__input mbc-quote-form__input--text">
							<label for="message-textarea">Additional Message</label>
							<textarea v-model="formData.message" name="message-textarea"></textarea>
						</div>
						<div class="mbc-quote-form__input mbc-quote-form__input--button">
							<button aria-label="Submit Email" @click="submitEmail" class="mbc-button mbc-button--full-w text-center uppercase"><i class="fa fa-paper-plane mr-2"></i>Submit</button>
						</div>
						<div class="mbc-quote-form__errors text-red-600" v-if="errors.length">
							<ul>
								<li v-for="(e, ei) in errors" :key="ei">*{{ e }}</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
  	</div>
</template>
<script>
import { services } from '~/assets/js/data';
import { testEmail } from '~/assets/js/util';
import axios from 'axios';

const formDataFieldsMapped = {
	service: 'Service',
	fullName: 'Full name',
	email: 'Email address',
	message: 'Message',
}

const defaultFormData = {
	service: '',
	serviceOther: '',
	fullName: '',
	email: '',
	phoneNumber: '',
	message: '',
};

import {
	defineComponent,
	ref,
	reactive,
	// useAsync,
	useRoute,
	useRouter,
} from '@nuxtjs/composition-api'

export default defineComponent({
	setup() {
		const route = useRoute();
		const router = useRouter();

		const formData = reactive(JSON.parse(JSON.stringify(defaultFormData)));
		const errors = ref([]);
		const isLoading = ref(false);
		// const services = useAsync(() => [{ title: 'test' }]); // This can replace some logic in the future.

		// Grab service from url query (if provided).
		const { query } = route.value;
		if ( 'service' in query ) {
			const service = services.find( s => s.title === query.service );
			formData.service = service !== undefined ? service.title : '';
		}

		async function submitEmail() {
			// Basic field validations.
			const newErrors = ['service', 'fullName', 'email']
			.filter( k => formData[k].trim() === '' )
			.map( k => `${formDataFieldsMapped[k]} cannot be empty.`);

			// Service equals Other and phone number validations.
			if ( formData.service === 'Other' && formData.serviceOther.trim().length < 3 ) {
				newErrors.push('Please enter a valid value for "Other Service". Must exceed 3 characters in length.');
			}
			if ( formData.phoneNumber.trim() !== '' && formData.phoneNumber.length < 14 ) {
				newErrors.push('Please enter a valid phone number in the format (###)-###-####.');
			}

			// Email validation.
			if ( formData.email.trim() !== '' && !testEmail(formData.email) ) {
				newErrors.push('Please enter a valid email address.');
			}

			if ( newErrors.length ) { 
				errors.value = newErrors;
				return; 
			} // Don't continue.

			isLoading.value = true;
			try {
				const response = await axios.post( `https://dxnmuircbi.execute-api.us-west-2.amazonaws.com${window.location.hostname === 'localhost' ? '/dev' : ''}/email`, {
					template: 'quote',
					subject: 'Maple Bros Construction - Customer Quote.',
					toAddress: 'hichamtaha101@gmail.com',
					content: {
						title: 'A customer has made the following inquiry.',
						data: {
							email: formData.email,
							service: formData.service !== 'Other' ? formData.service : `${formData.serviceOther} (Others)`,
							message: formData.message || 'N/A',
							phoneNumber: formData.phoneNumber || 'N/A',
							fullName: formData.fullName,
						},
					},
					from: 'hicham.taha@henesysgroup.com',
					layout: 'maplebrosconstruction',
				} );

				// Reset form upon success and redirect.
				if ( response.pass ) {
					for ( const key in defaultFormData ) { formData[key] = defaultFormData[key]; }
					router.push('/thank-you');
				} else {
					errors.value = [response.data];
				}

			} catch (e) {
				console.log('error', e);
				errors.value = ['Unable to communicate with servers, please try again later.'];
			}
			isLoading.value = false;
		}

		return {
			formData,
			errors,
			isLoading,
			services,
			submitEmail,
		}
	},
})
</script>
<style lang="postcss">
.mbc {
	&-section--quote {
		padding-bottom: 60px !important;
	}
	&-quote {
		padding-bottom: 140px;

		&--left-graphic img {
			height: 100%;
			width: 100%;
			object-fit: cover;
			max-height: 20rem; /* 320px */

			@media(--min-sm) {
				max-height: 36.75rem; /* 588px */
			}
		}

		&-form {
			box-shadow: 2px 2px 2px rgb(0 0 0 / 4%);
			border-bottom-right-radius: 0.25rem; /* 4px */
			border-bottom-left-radius: 0.25rem; /* 4px */

			@media(--min-sm) {
				border-radius: 0.25rem; /* 4px */
			}

			&__input {
				display: flex;
				flex-direction: column;
				gap: 0.25rem;
				label {
					text-transform: uppercase;
					font-size: 0.875rem;
				}

				textarea, input, select {
					color: var(--secondary-color);
					border-radius: 3px;
					padding: 8px;
					border: 1px solid var(--secondary-color-8);
				}
				select {
					cursor: pointer;
				}
			}
		}
	}
}
</style>