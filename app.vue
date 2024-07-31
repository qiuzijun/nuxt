<script setup lang="ts">
const isOpen = ref(false);
const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})

</script>
<template>
  <div class="h-screen flex items-center justify-center relative">
    <div class="w-full p-10 md:p-40 pt-10 pb-10 flex justify-end items-center gap-x-5 absolute top-0">
      <div class="text-sm cursor-pointer transition-all hover:text-primary-500" @click="isOpen = true">
        个人简历</div>
      <UButton :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'" color="gray" variant="ghost"
        aria-label="Theme" @click="isDark = !isDark" />
    </div>
    <div
      class="w-[600px] max-w-[600px] max-h-[400px] h-[400px rounded-lg p-4 flex flex-col items-end justify-center px-16">
      <div class="w-32 h-32 md:w-36 md:h-36 bg-neutral-400 rounded-full blur-2xl"></div>
      <div class="w-full h-full flex flex-col gap-4">
        <div class="text-4xl text-left self-start font-black">学习</div>
        <div class="gap-2">
          <div class="text-3xl">人生得一知己足矣，</div>
          <div class="text-3xl">斯世当以同怀视之。</div>
        </div>
        <div class="gap-2">
          <div class="text-lg">Having a confidant in life is enough,</div>
          <div class="text-lg">Si Shi should view it with the same heart.</div>
        </div>
        <div class="text-xl flex justify-end">——鲁迅</div>
      </div>
    </div>
  </div>
  <UModal v-model="isOpen" fullscreen>
    <UCard :ui="{
        base: 'h-full flex flex-col',
        rounded: '',
        divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        body: {
          base: 'flex-1 overflow-y-scroll'
        }
      }">
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
            个人简历
          </h3>
          <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
            @click="isOpen = false" />
        </div>
      </template>
      <div class="h-max flex justify-center items-center ">
        <div class="w-full md:w-2/3 min-h-full">
          <Resume />
        </div>
      </div>
    </UCard>
  </UModal>
</template>
