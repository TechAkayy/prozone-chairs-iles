<script setup lang="ts">
	// const props = defineProps({
	// 	name: {
	// 		type: String,
	// 		default: 'ShowNow',
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
    <section class="bg-gray-50 py-12" data-pg-collapsed>
        <div class="container mx-auto px-4 relative">
            <div class="-mx-4 flex flex-wrap items-center space-y-6 lg:space-y-0">
                <div class="lg:mr-auto lg:w-6/12 px-4 w-full">
                    <h2 class="font-medium leading-tight mb-1 text-gray-500 uppercase">
                Make it yours </h2>
                    <h3 class="font-bold leading-tight mb-2 text-3xl text-secondary-500">
                Upto 40% off on selected products </h3>
                    <p class="mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                vitae congue tortor. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Curabitur ac sagittis neque, vel egestas est. </p><a href="#" class="border border-secondary-500 font-normal hover:bg-secondary-500 hover:text-white inline-block px-6 py-2 text-secondary-500">Shop Now</a>
                </div>
                <div class="px-4 w-full lg:w-5/12">
                    <img src="https://images.unsplash.com/photo-1618220179428-22790b461013?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDk5fHxmdXJuaXR1cmV8ZW58MHx8fHwxNjI3NDI2NjAy&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=1000&h=800&fit=crop"/>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped></style>
