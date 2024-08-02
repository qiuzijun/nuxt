<script setup lang="ts">
import { ref } from 'vue';
import type { Sentence } from "../types/index"
const result = ref<Sentence | null>()
const { data } = await useFetch('/api/sentence');
result.value = data.value?.data
</script>
<template>
    <div class="h-screen flex items-center justify-center relative">
        <Header />
        <div
            class="w-[600px] max-w-[600px] max-h-[400px] h-[400px rounded-lg p-4 flex flex-col items-end justify-center px-16 relative">
            <div
                class="w-32 h-32 md:w-36 md:h-36 bg-neutral-400 rounded-full blur-2xl absolute top-[-32px] right-0 z-0">
            </div>
            <div class="w-full h-full flex flex-col gap-4 relative z-10">
                <div class="text-4xl text-left self-start font-black">{{ result?.title }}</div>
                <div class="gap-2">
                    <div class="text-3xl">{{ result?.zh.after }}</div>
                    <div class="text-3xl">{{ result?.zh.before }}</div>
                </div>
                <div class="gap-2">
                    <div class="text-lg">{{ result?.en.after }}</div>
                    <div class="text-lg">{{ result?.en.after }}</div>
                </div>
                <div class="text-xl flex justify-end">——{{ result?.zh.author }}</div>
            </div>
        </div>
    </div>
</template>