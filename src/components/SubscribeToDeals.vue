<script setup lang="ts">
  const email = ref('')
  const invalidMessage = ref('')
  const validateEmail = () => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (re.test(email.value)) {
      invalidMessage.value = ''
    } else {
      invalidMessage.value = 'Enter an valid email address!'
    }
  }

  const subscribe = () => {
    if (!invalidMessage.value) {
      console.log(email.value)
    }
  }
</script>
<template>
  <div class="py-8">
    <div class="container mx-auto px-4">
      <div class="mx-auto sm:w-9/12 xl:w-8/12">
        <form>
          <div
            class="bg-white border border-gray-300 flex items-center overflow-hidden p-1 rounded-full"
          >
            <input
              v-model="email"
              class="appearance-none border-0 flex-1 ml-5 mr-2 px-5 py-2 text-gray-600 w-full"
              placeholder="Enter email..."
              type="email"
              required
              @blur="validateEmail"
            />
            <button
              type="button"
              class="bg-primary-600 disabled:bg-primary-200 hover:bg-primary-700 inline-block px-8 py-2 rounded-full text-center text-white"
              :disabled="!email"
              @click="subscribe()"
            >
              Subscribe To Deals
            </button>
          </div>
          <div class="flex justify-center pt-2 w-full">
            <span class="text-center text-red-700 text-sm">{{
              invalidMessage
            }}</span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
