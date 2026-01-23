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
    name: 'h-button',
})

export interface ButtonProps {
    color?: 'default' | 'primary' | 'success' | 'warning' | 'error'
    variant?: 'solid' | 'outline' | 'ghost'
    size?: 'small' | 'medium' | 'large'
    disabled?: boolean
    loading?: boolean
    round?: boolean
    circle?: boolean
    square?: boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {
    color: 'default',
    variant: 'solid',
    size: 'medium',
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
        'h-button',
        `h-button--${props.color}`,
        `h-button--${props.variant}`,
        `h-button--${props.size}`,
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