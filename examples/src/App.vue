<template>
  <div class="w-screen min-h-screen bg-background p-8">
    <div class="max-w-6xl mx-auto space-y-8">
      <h1 class="text-3xl font-bold mb-8">Button 按钮组件</h1>

      <!-- 基础按钮 -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold">基础按钮</h2>
        <div class="flex gap-4 flex-wrap">
          <h-button>默认按钮</h-button>
          <h-button color="primary">主要按钮</h-button>
          <h-button color="success">成功按钮</h-button>
          <h-button color="warning">警告按钮</h-button>
          <h-button color="error">错误按钮</h-button>
        </div>
      </section>

      <!-- 变体 -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold">变体按钮</h2>
        <div class="flex gap-4 flex-wrap">
          <h-button variant="outline">默认按钮</h-button>
          <h-button color="primary" variant="outline">主要按钮</h-button>
          <h-button color="success" variant="outline">成功按钮</h-button>
          <h-button color="warning" variant="outline">警告按钮</h-button>
          <h-button color="error" variant="outline">错误按钮</h-button>
        </div>
        <div class="flex gap-4 flex-wrap">
          <h-button variant="ghost">默认按钮</h-button>
          <h-button color="primary" variant="ghost">主要按钮</h-button>
          <h-button color="success" variant="ghost">成功按钮</h-button>
          <h-button color="warning" variant="ghost">警告按钮</h-button>
          <h-button color="error" variant="ghost">错误按钮</h-button>
        </div>
      </section>

      <!-- 圆角按钮 -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold">圆角按钮</h2>
        <div class="flex gap-4 flex-wrap">
          <h-button round>默认按钮</h-button>
          <h-button color="primary" round>主要按钮</h-button>
          <h-button color="success" round>成功按钮</h-button>
          <h-button color="warning" round>警告按钮</h-button>
          <h-button color="error" round>错误按钮</h-button>
        </div>
      </section>

      <!-- 禁用状态 -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold">禁用状态</h2>
        <div class="flex gap-4 flex-wrap">
          <h-button disabled>默认按钮</h-button>
          <h-button color="primary" disabled>主要按钮</h-button>
          <h-button color="success" disabled>成功按钮</h-button>
          <h-button color="warning" disabled>警告按钮</h-button>
          <h-button color="error" disabled>错误按钮</h-button>
        </div>
      </section>

      <!-- 加载状态 -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold">加载状态</h2>
        <div class="flex gap-4 flex-wrap">
          <h-button loading>默认按钮</h-button>
          <h-button color="primary" loading>主要按钮</h-button>
          <h-button color="success" loading>成功按钮</h-button>
          <h-button color="warning" loading>警告按钮</h-button>
          <h-button color="error" loading>错误按钮</h-button>
        </div>
      </section>

      <!-- 不同尺寸 -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold">不同尺寸</h2>
        <div class="flex gap-4 items-center flex-wrap">
          <h-button size="small">小型按钮</h-button>
          <h-button size="medium">中等按钮</h-button>
          <h-button size="large">大型按钮</h-button>
        </div>
      </section>

      <!-- 圆形按钮 -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold">圆形按钮</h2>
        <div class="flex gap-4 items-center flex-wrap">
          <h-button circle size="small">+</h-button>
          <h-button color="primary" circle>+</h-button>
          <h-button color="success" circle size="large">✓</h-button>
        </div>
      </section>

      <!-- 点击事件 -->
      <section class="space-y-4">
        <h2 class="text-xl font-semibold">点击事件</h2>
        <div class="flex gap-4 flex-wrap">
          <h-button color="primary" @click="handleClick">点击我</h-button>
          <h-button color="success" @click="handleClick">触发事件</h-button>
        </div>
        <p v-if="clickCount > 0" class="text-gray-600">
          按钮被点击了 {{ clickCount }} 次
        </p>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const clickCount = ref(0)

const handleClick = () => {
  clickCount.value++
  console.log('按钮被点击了！', clickCount.value)
}
</script>