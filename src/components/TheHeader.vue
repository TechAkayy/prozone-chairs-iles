<script setup lang="ts">
	// const props = defineProps({
	// 	name: {
	// 		type: String,
	// 		default: 'TheHeader',
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
    <header class="bg-secondary-500 relative" data-pg-collapsed>
        <div class="absolute bg-primary-500 h-full right-0 top-0 lg:w-8/12"></div>
        <div class="container mx-auto relative">
            <nav class="flex flex-wrap items-center justify-between p-4">
                <a href="#" class="font-bold hover:text-opacity-75 inline-flex items-center leading-none text-white text-xl uppercase"> <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="2.4em" xml:space="preserve" fill="currentColor" viewBox="0 0 100 100" height="2.4em" class="mr-2">
                        <path d="M63.334 10H36.666C33.002 10 30 13.001 30 16.667v46.666h40V16.667C70 13.001 66.998 10 63.334 10z"/>
                        <path d="M76.666 36.667c-.568 0-1.113.098-1.666.169v31.497H25V36.836c-.553-.071-1.094-.169-1.666-.169C15.971 36.667 10 42.637 10 50c0 4.929 2.699 9.18 6.666 11.484V70h.004-.004c0 7.363 5.971 13.333 13.334 13.333V90h6.666v-6.667h26.668V90H70v-6.667c7.363 0 13.33-5.97 13.334-13.333v-8.516C87.301 59.18 90 54.929 90 50c0-7.363-5.971-13.333-13.334-13.333z"/>
                    </svg> <span>Prozone<br/>Chair</span> </a>
                <TodaysOpeningHours/>
                <button class="hover:bg-white hover:text-secondary-500 px-3 py-2 rounded text-white lg:hidden" data-name="nav-toggler" data-pg-ia='{"l":[{"name":"NabMenuToggler","trg":"click","a":{"l":[{"t":"^nav|[data-name=nav-menu]","l":[{"t":"set","p":0,"d":0,"l":{"class.remove":"hidden"}}]},{"t":"#gt# span:nth-of-type(1)","l":[{"t":"tween","p":0,"d":0.2,"l":{"rotationZ":45,"yPercent":300}}]},{"t":"#gt# span:nth-of-type(2)","l":[{"t":"tween","p":0,"d":0.2,"l":{"autoAlpha":0}}]},{"t":"#gt# span:nth-of-type(3)","l":[{"t":"tween","p":0,"d":0.2,"l":{"rotationZ":-45,"yPercent":-300}}]}]},"pdef":"true","trev":"true"}]}' data-pg-ia-apply="$nav [data-name=nav-toggler]">
                    <span class="block border-b-2 border-current my-1 w-6"></span><span class="block border-b-2 border-current my-1 w-6"></span><span class="block border-b-2 border-current my-1 w-6"></span>
                </button>
                <div class="lg:flex lg:space-x-4 lg:space-y-0 lg:w-auto space-y-2 w-full hidden lg:items-center" data-name="nav-menu">
                    <div class="flex flex-col lg:flex-row">
                        <a href="#" class="font-light hover:text-opacity-75 py-2 text-white lg:px-6 lg:py-4">Home</a>
                        <a href="#" class="font-light hover:text-opacity-75 py-2 text-white lg:px-6 lg:py-4">About</a>
                        <a href="#" class="font-light hover:text-opacity-75 py-2 text-white lg:px-6 lg:py-4">Products</a>
                        <a href="#" class="font-light hover:text-opacity-75 py-2 text-white lg:px-6 lg:py-4">Shop</a>
                        <a href="#" class="font-light hover:text-opacity-75 py-2 text-white lg:px-6 lg:py-4">Blog</a>
                        <a href="#" class="font-light hover:text-opacity-75 py-2 text-white lg:px-6 lg:py-4">Contact</a>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>
<style scoped></style>
