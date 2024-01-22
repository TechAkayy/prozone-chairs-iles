<script setup lang="ts">
	// const props = defineProps({
	// 	name: {
	// 		type: String,
	// 		default: 'HeroSection',
	// 	},
	// })

	// const emit = defineEmits(['addToCart'])

	// // Use the addToCart function like this:
	// // Eg-1: addToCart('pizza', 10)
	// // Eg-2: (event) => addToCart('pizza', 10, event)
	// const addToCart = (item, quantity /*, event*/) => {
	// 	emit('addToCart', { item, quantity })
	// }
</script>
<template>
    <section class="bg-secondary-500 relative text-white" data-pg-collapsed>
        <div class="absolute bg-primary-500 h-full right-0 top-0 lg:w-8/12"></div>
        <div class="container mx-auto pb-24 pt-24 px-4 relative">
            <div class="-mx-4 flex flex-wrap items-center space-y-6 lg:space-y-0">
                <div class="px-4 w-full lg:w-6/12">
                    <h1 class="font-bold mb-4 text-5xl uppercase sm:text-6xl lg:text-7xl">
                A chair for your ultimate comfort </h1>
                    <p class="mb-6 text-opacity-50 text-white text-xl sm:pr-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus pulvinar faucibus neque, nec rhoncus nunc ultrices sit
                amet. </p><a href="#" class="border border-white font-normal hover:bg-white hover:text-secondary-500 inline-block px-6 py-2 text-white">Buy Now</a>
                </div>
                <div class="px-4 w-full lg:w-6/12">
                    <div class="poster relative" style="height: 50vh"></div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped></style>
