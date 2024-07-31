<template>
    <div class="flex justify-between items-center">
        <!-- 基本信息 -->
        <div class="h-40 flex flex-col justify-between">
            <div class="flex flex-col gap-3">
                <div class="text-1xl md:text-2xl font-semibold transition-all">嘿嘿嘿</div>
                <div class="text-xs md:text-sm font-semibold transition-all">求职意向:嘿嘿嘿</div>
            </div>
            <div class="grid grid-cols-1 gap-1 gap-x-5 md:grid-cols-2">
                <div class="text-xs md:text-sm flex items-center gap-1">
                    <UIcon name="i-heroicons-light-bulb" class="w-3 h-3 md:w-4 md:h-4" />
                    <span>出生年月：2024-09-09</span>
                </div>
                <div class="text-xs md:text-sm flex items-center gap-1">
                    <UIcon name="i-heroicons-light-bulb" class="w-3 h-3 md:w-4 md:h-4" />
                    <span>年龄：43</span>
                </div>
                <div class="text-xs md:text-sm flex items-center gap-1">
                    <UIcon name="i-heroicons-light-bulb" class="w-3 h-3 md:w-4 md:h-4" />
                    <span>电话：17770329870</span>
                </div>
                <div class="text-xs md:text-sm flex items-center gap-1">
                    <UIcon name="i-heroicons-light-bulb" class="w-3 h-3 md:w-4 md:h-4" />
                    <span>邮箱：17770329870@163.com</span>
                </div>
            </div>
        </div>
        <!-- 头像 -->
        <div class="w-32 h-40 bg-primary-200 border-2 border-primary-50"></div>
    </div>
</template>