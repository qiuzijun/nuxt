<script setup lang="ts">
const isOpen = ref<Boolean>(false);
const colorMode = useColorMode();
const tabs = [
    {
        text: '个人简历',
        callback: () => {
            isOpen.value = true;
        }
    }
]
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
    <div class="w-full p-10 md:p-40 md:pt-10 md:pb-10 flex justify-end items-center gap-x-5 absolute top-0">
        <div class="text-sm cursor-pointer transition-all hover:text-primary-500" @click="item.callback()"
            v-for="item in tabs" :key="item.text">
            {{ item.text }}</div>
        <UButton :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'" color="gray" variant="ghost"
            aria-label="Theme" @click="isDark = !isDark" />
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