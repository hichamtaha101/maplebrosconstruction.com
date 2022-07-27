<template>
<div class="mbc-progress absolute w-full h-full flex justify-center items-center top-0 left-0">
	<div class="mbc-progress-bar relative w-8 h-8">
		<div class="mbc-progress-bar__circle border" />
	</div>
</div>
</template>
<style lang="postcss" scoped>
.mbc-progress {
	background: #ffffff69;
	&-bar{
		&__circle {
			@apply absolute h-full w-full right-0;
			border: solid 4px var(--secondary-color-8);
			border-top-color:  var(--secondary-color-2);
			border-radius: 50%;

			/* border. */
			transform: rotate(135deg);  
			animation: spin 1s steps(2) .2s infinite;
			-webkit-animation: spin 1s linear infinite;
		}
	}
}

@-webkit-keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
