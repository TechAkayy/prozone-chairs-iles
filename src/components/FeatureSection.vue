<script setup lang="ts">
	// const props = defineProps({
	// 	name: {
	// 		type: String,
	// 		default: 'FeatureSection',
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
    <section class="bg-gray-50 py-24 text-gray-500" data-pg-collapsed>
        <div class="container mx-auto px-4">
            <div class="-mx-4 flex flex-wrap justify-center">
                <div class="p-4 w-full md:w-6/12 lg:w-4/12">
                    <h2 class="flex font-bold font-serif items-center leading-7 mb-4 text-2xl text-gray-900"> <span class="mr-2 text-6xl text-secondary-500">1.</span>
                Approved Premium Materials </h2>
                    <p class="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                vitae congue tortor. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. </p><a href="#" class="hover:text-secondary-600 hover:underline inline-block text-secondary-500">Learn More</a>
                </div>
                <div class="p-4 w-full md:w-6/12 lg:w-4/12">
                    <h2 class="flex font-bold font-serif items-center leading-7 mb-4 text-2xl text-gray-900"> <span class="mr-2 text-6xl text-secondary-500">2.</span>
                Engineered Design </h2>
                    <p class="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                vitae congue tortor. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. </p><a href="#" class="hover:text-secondary-600 hover:underline inline-block text-secondary-500">Learn More</a>
                </div>
                <div class="p-4 w-full md:w-6/12 lg:w-4/12">
                    <h2 class="flex font-bold font-serif items-center leading-7 mb-4 text-2xl text-gray-900"> <span class="mr-2 text-6xl text-secondary-500">3.</span>
                Customizable and Reusuable </h2>
                    <p class="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                vitae congue tortor. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. </p><a href="#" class="hover:text-secondary-600 hover:underline inline-block text-secondary-500">Learn More</a>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped></style>
