<template>
	<div class="mbc-page page--thank-you">
		<banner title="We will reach out shortly" preTitle="Thank You" />
		<div class="mbc-wrapper text-center flex flex-col justify-center items-center">
			<!-- <img src="~/assets/images/common/error.svg" alt="Error Cog"> -->
			<h1 class="text-2xl text-center">We appreciate your feedback and our experts will receive your email soon</h1>
			<button class="mbc-button mt-4 text-center" @click="$router.push('/')">Return Home</button>
		</div>
  	</div>
</template>
<style lang="postcss" scoped>
.page--thank-you .mbc-wrapper {
	min-height: 480px;
}
</style>
