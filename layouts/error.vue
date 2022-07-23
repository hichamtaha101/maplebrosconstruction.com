<template>
  <div class="mbc-page page--not-found flex items-center flex-col justify-center">
    <div class="mb-12 flex items-center flex-col justify-center">
		<!-- <img src="~/assets/images/common/error.svg" alt="Error Cog"> -->
		<h1 class="mt-6 text-4xl text-center">Oops, something went wrong!</h1>
      	<h3 class="mt-4 text-2xl font-light">Error Code 404 Page Not Found</h3>
		<button class="mbc-button mt-6 text-center" @click="$router.push('/')">Return Home</button>
    </div>
  </div>
</template>