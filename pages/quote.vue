<template>
	<div class="mbc-page page--quote">
		<banner title="Let us know your needs" preTitle="Request A Quote"/>
		<div class="mbc-wrapper">
			<div class="mbc-section mbc-section--quote">
				<h1 class="text-center">One Email Away</h1>
				<p class="mbc-section__sub-title text-center">Duis aute irure dolor in reprehenderit in voluptate velit irure dolor.</p>
			</div>
			<div class="mbc-quote flex-col sm:flex-row flex pb-12">
				<div class="flex-grow flex justify-center">
					Left Graphic Image
				</div>
				<div class="flex-grow">
					<div class="mbc-quote-form p-8 bg-white flex flex-col gap-6">
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
							<input v-model="formData.emailAddress" type="text" name="email-input">
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
							<button @click="email" class="mbc-button mbc-button--full-w text-center uppercase">Submit</button>
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

const formDataFieldsMapped = {
	service: 'Service',
	fullName: 'Full name',
	emailAddress: 'Email address',
	message: 'Message',
}

const defaultFormData = {
	service: '',
	serviceOther: '',
	fullName: '',
	emailAddress: '',
	phoneNumber: '',
	message: '',
};

export default {
	asyncData({ req, params, redirect }) {
		return new Promise( async( resolve ) => {
			resolve({
				services,
			});
		})
	},
	data() {
		return {
			formData: JSON.parse(JSON.stringify(defaultFormData)),
			errors: [],
		};
	},
	mounted() {
		const { query } = this.$route;
		if ( 'service' in query ) {
			const service = services.find( s => s.title === query.service );
			this.formData.service = service !== undefined ? service.title : '';
		}
	},
	methods: {
		email() {

			// Basic field validations.
			const errors = ['service', 'fullName', 'emailAddress']
			.filter( k => this.formData[k].trim() === '' )
			.map( k => `${formDataFieldsMapped[k]} cannot be empty.`);

			// Service equals Other and phone number validations.
			if ( this.formData.service === 'Other' && this.formData.serviceOther.trim().length < 3 ) {
				errors.push('Please enter a valid value for "Other Service". Must exceed 3 characters in length.');
			}
			if ( this.formData.phoneNumber.trim() !== '' && this.formData.phoneNumber.length < 14 ) {
				errors.push('Please enter a valid phone number in the format (###)-###-####.');
			}

			// Email validation.
			if ( this.formData.emailAddress.trim() !== '' && !testEmail(this.formData.emailAddress) ) {
				errors.push('Please enter a valid email address.');
			}

			if ( errors.length ) { 
				this.errors = errors;
				return; 
			} // Don't continue.

			try {
				const response = { pass: true, data: 'test' }

				// Reset form upon success and redirect.
				if ( response.pass ) {
					this.formData = JSON.parse(JSON.stringify(defaultFormData))
					this.$router.push('/thank-you');
				} else {
					this.errors = [response.data];
				}

			} catch (e) {
				this.errors = ['Unable to communicate with servers, please try again later.'];
			}

		}
	}
}
</script>
<style lang="postcss">
.mbc {
	&-section--quote {
		padding-bottom: 60px !important;
	}
	&-quote {
		padding-bottom: 140px;
		&-form {
			border-radius: 4px;
			box-shadow: 2px 2px 2px rgb(0 0 0 / 4%);
			&__input {
				display: flex;
				flex-direction: column;
				gap: 4px;
				label {
					text-transform: uppercase;
					font-size: 14px;
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