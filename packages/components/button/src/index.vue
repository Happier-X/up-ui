<template>
    <button :class="buttonClass" :disabled="disabled || loading" @click="handleClick">
        <span v-if="loading" class="u-button__loading">
            加载中...
        </span>
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

defineOptions({
    name: 'u-button',
})

export interface ButtonProps {
    color?: 'default' | 'primary' | 'success' | 'warning' | 'error'
    variant?: 'solid' | 'outline' | 'soft' | 'subtle' | 'ghost' | 'link'
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    disabled?: boolean
    loading?: boolean
    round?: boolean
    circle?: boolean
    square?: boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {
    color: 'default',
    variant: 'solid',
    size: 'md',
    disabled: false,
    loading: false,
    round: false,
    circle: false,
    square: false,
})

const emit = defineEmits<{
    click: [event: MouseEvent]
}>()

const buttonClass = computed(() => {
    return [
        'u-button',
        `u-button--${props.color}`,
        `u-button--${props.variant}`,
        `u-button--${props.size}`,
        {
            'is-disabled': props.disabled,
            'is-loading': props.loading,
            'is-round': props.round,
            'is-circle': props.circle,
            'is-square': props.square,
        },
    ]
})

const handleClick = (event: MouseEvent) => {
    if (props.disabled || props.loading) {
        return
    }
    emit('click', event)
}
</script>