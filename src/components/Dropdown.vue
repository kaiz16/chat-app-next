<template>
  <div class="dropdown" :class="modelValue ? 'dropdown-open' : ''">
    <ul
      tabindex="0"
      class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
    >
      <li
        v-for="(option, index) in options"
        :key="index"
        @click.prevent="$emit('select', option.value)"
      >
        <a>{{ option.label }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
    options: {
      type: Array,
      default: () => [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
    },
  },
  emits: ["update:modelValue", "select"],
};
</script>

<style></style>
