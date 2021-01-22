<template>
  <div>
    <ReposListItem v-for="(repo, index) of repos" :key="index" :repo="repo" />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import ReposListItem from '@/components/Repos/ReposListItem.vue'

export default defineComponent({
  components: {
    ReposListItem
  },
  props: {
    repos: {
      type: Array,
      default: () => []
    }
  },
  setup(props, ctx) {}
})
</script>

<style lang="scss" scoped></style>
