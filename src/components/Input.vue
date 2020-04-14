<template>
  <div class="home__user">
    me@omargm2294:~$
    <input
      type="text"
      @keypress="$emit('input_key', $event)"
      @focusout="gain_focus($event)"
      autocomplete="off"
      autocorrect="off"
      autocapitalize="off"
      spellcheck="false"/>
  </div>
</template>

<script>
export default {
  name: 'Input',
  methods: {
    gain_focus(e) {
      e.target.focus();
    },
    set_focus() {
      this.$el.children[0].focus();
    }
  },
  mounted() {
    this.set_focus()
  }
}
</script>
