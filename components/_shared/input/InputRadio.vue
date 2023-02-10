<template>
  <label class="input-radio" :class="{ isChecked }" :for="id">
    <input
      type="radio"
      :id="id"
      :checked="isChecked"
      :value="value"
      @change="updateInput"
    />
    <div v-if="label" class="input-radio__text" v-html="label" />
  </label>
</template>

<script>
export default {
  name: "InputRadio",
  model: {
    prop: "modelValue",
    event: "change",
  },
  props: {
    id: {
      type: String,
      default: () => "",
    },
    value: {
      type: [String, Number, Boolean],
      default: () => "",
    },
    modelValue: {
      type: [Boolean, String, Number],
      default: () => "",
    },
    label: {
      type: String,
      default: () => "",
    },
  },
  computed: {
    isChecked() {
      return this.modelValue == this.value;
    },
  },
  watch: {
    isChecked(newV, oldV) {
      if (newV) {
        this.$emit("changeRadio");
      }
    },
  },
  methods: {
    updateInput(e) {
      this.$emit("change", e.target.value);
    },
  },
};
</script>

<style lang="sass" scoped>
.input-radio
    cursor: pointer
    display: flex
    align-items: center
    &::before
        content: ''
        display: inline-block
        border: 1px solid $gray-500
        border-radius: 50%
        width: 16px
        height: 16px
        // @include media-breakpoint-up(md)
        //     width: 19px
        //     height: 19px
    &.isChecked
        &::before
            background: radial-gradient(circle at 50%, $primary 50%, $white 50%)
    input
        display: none
    &__text
        @include tx-body-2
        margin-left: 8px
</style>
