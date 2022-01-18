<template>
  <div class="form-control w-full">
    <label class="label" v-if="label">
      <span class="label-text">{{ label }}</span>
    </label>
    <input
      :type="type"
      :placeholder="placeholder"
      class="input input-bordered"
      v-bind="$attrs"
      v-model="value"
    />
  </div>
</template>

<script>
export default {
  name: "FormInput",
  props: {
    modelValue: {
      type: [String, Number],
      required: true,
    },
    label: {
      type: String,
      default: () => undefined,
    },
    placeholder: {
      type: String,
      default: () => undefined,
    },
    type: {
      type: String,
      default: () => undefined,
    },
  },
  emits: ["update:modelValue"],
  computed: {
    value: {
      get(){
        return this.modelValue
      },
      set(val){
        this.$emit("update:modelValue", val)
      }
    }
  }
};
</script>

<style></style>
