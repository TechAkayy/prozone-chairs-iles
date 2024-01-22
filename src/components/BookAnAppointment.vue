<!-- <script client:load>
  function loadjscssfile(filename, filetype) {
    let cssNode
    if (filetype == 'js') {
      cssNode = document.createElement('script')
      cssNode.setAttribute('type', 'text/javascript')
      cssNode.setAttribute('src', filename)
    } else if (filetype == 'css') {
      cssNode = document.createElement('link')
      cssNode.setAttribute('rel', 'stylesheet')
      cssNode.setAttribute('type', 'text/css')
      cssNode.setAttribute('href', filename)
    }
    if (typeof cssNode != 'undefined')
      document.getElementsByTagName('head')[0].appendChild(cssNode)
  }
  loadjscssfile('https://cdn.jsdelivr.net/npm/pikaday/pikaday.js', 'js')
  loadjscssfile('https://cdn.jsdelivr.net/npm/pikaday/css/pikaday.css', 'css')
</script> -->

<!-- <script client:visible>
export async function onLoad() {
  const Pikaday = (await import("https://unpkg.com/pikaday@latest")).default;
  let picker = new Pikaday({
    field: document.getElementById("datepicker"),
    format: "D MMM YYYY",
    onSelect: function () {
      console.log(this.getMoment().format("Do MMMM YYYY"));
    },
  });
}
</script> -->

<script setup lang="ts">
  const date = ref('')
  const datePicker = ref(null)
  const addPikaday = ($el) => {
    datePicker.value = new Pikaday({
      field: $el,
      theme: 'dark-theme',
    })
  }
  const removePikaday = () => {
    datePicker.value = null
  }
  const bookAppointment = () => {
    console.log(datePicker.value.getDate())
  }

  const datepicker = ref()
  onMounted(() => {
    addPikaday(datepicker.value)
  })
  onUnmounted(() => {
    removePikaday()
  })

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const vDatePicker = {
  //   mounted: (el) => addPikaday(el),
  //   unmounted: removePikaday(),
  // }
</script>
<template>
  <div id="appointment" class="p-6">
    <!-- <Head>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.jsdelivr.net/npm/pikaday/css/pikaday.css"
      />
      <component
        :is="'script'"
        src="https://cdn.jsdelivr.net/npm/pikaday/pikaday.js"
      ></component>
    </Head> -->
    <form>
      <div class="flex items-center justify-center">
        <div class="p-1">
          <input
            ref="datepicker"
            v-model="date"
            class="appearance-none border px-4 py-2 rounded-full text-gray-600 w-full"
            type="text"
            placeholder="Click to select a date"
          />
        </div>
        <div class="p-1">
          <button
            href="#"
            class="bg-primary-600 hover:bg-primary-700 inline-block px-6 py-2 rounded-full text-center text-white"
            type="button"
            @click="bookAppointment"
          >
            <span class="align-middle">Book An Appointment</span>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
