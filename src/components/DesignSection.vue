<script setup lang="ts">
	// const props = defineProps({
	// 	name: {
	// 		type: String,
	// 		default: 'DesignSection',
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
    <section class="py-24" data-pg-collapsed>
        <div class="container mx-auto px-4 relative">
            <div class="-mx-4 flex flex-wrap items-center">
                <div class="px-4 py-6 w-full lg:mx-auto lg:pb-12 lg:w-5/12">
                    <h2 class="font-medium leading-tight mb-1 text-gray-500 uppercase">
                Crafted with hands </h2>
                    <h3 class="font-medium leading-tight mb-2 text-4xl text-gray-800">
                Experience the feel of quality </h3>
                    <p class="mb-6 text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                vitae congue tortor. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Curabitur ac sagittis neque, vel egestas est. </p><a href="#" class="hover:text-secondary-600 hover:underline inline-block text-secondary-500">Learn More</a>
                </div>
                <div class="px-4 w-full lg:-mb-6 lg:order-first lg:pr-6 lg:w-6/12">
                    <img src="https://images.unsplash.com/photo-1599697686548-d39f7c80174c?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDEyM3x8ZnVybml0dXJlfGVufDB8fHx8MTYyNzQyNjgxNg&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=1000&h=900&fit=crop"/>
                </div>
                <div class="px-4 py-6 w-full lg:mx-auto lg:pt-12 lg:w-5/12">
                    <h2 class="font-medium leading-tight mb-1 text-gray-500 uppercase">
                Custom Design </h2>
                    <h3 class="font-medium leading-tight mb-2 text-4xl text-gray-800">
                Customize to your likes </h3>
                    <p class="mb-6 text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                vitae congue tortor. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Curabitur ac sagittis neque, vel egestas est. </p><a href="#" class="hover:text-secondary-600 hover:underline inline-block text-secondary-500">Learn More</a>
                </div>
                <div class="px-4 w-full lg:-mt-6 lg:pl-6 lg:w-6/12">
                    <img src="https://images.unsplash.com/photo-1567016432779-094069958ea5?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDE4fHxmdXJuaXR1cmV8ZW58MHx8fHwxNjI3NDI2NTEz&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=1000&h=900&fit=crop"/>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped></style>
