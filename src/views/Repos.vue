<template>
  <div class="repos" :class="{ 'repos--loading': isLoading }">
    <h1 v-if="!quotaExceeded">Most popular Javascript Repositories from GitHub</h1>
    <ReposList :repos="repos" />
    <BottomLoadingBar v-show="isLoading" />
    <div v-if="quotaExceeded" class="pa-4 text--red-darken-4">
      :( GitHub API rate limit exceeded, please try again later
    </div>
  </div>
</template>

<script>
import { defineComponent, onBeforeMount, onBeforeUnmount, ref, watch } from '@vue/composition-api'
import ReposService from '@/services/ReposService'
import ReposList from '@/components/Repos/ReposList.vue'
import BottomLoadingBar from '@/components/_base/BottomLoadingBar.vue'

export default defineComponent({
  components: { ReposList, BottomLoadingBar },
  setup(_, ctx) {
    const isLoading = ref(true)
    const loadMore = ref(false)
    const repos = ref([])
    const quotaExceeded = ref(false)

    onBeforeMount(() => {
      window.addEventListener('scroll', checkLoadMore)
      getRepos()
    })
    onBeforeUnmount(() => {
      window.removeEventListener('scroll', checkLoadMore)
    })

    const checkLoadMore = () => {
      loadMore.value = isBottomVisible()
    }

    const isBottomVisible = () => {
      const scrollY = window.scrollY
      const visible = document.documentElement.clientHeight
      const pageHeight = document.documentElement.scrollHeight
      const bottomOfPage = visible + scrollY >= pageHeight
      return bottomOfPage || pageHeight < visible
    }

    watch(
      () => loadMore.value,
      val => {
        if (val && !isLoading.value) {
          getRepos()
        }
      }
    )

    const curPage = ref(-1)
    const getRepos = async () => {
      isLoading.value = true

      const service = new ReposService()
      curPage.value++
      const res = await service.getRepos(curPage.value, 10, 'stars')
      if (res) {
        if (res && res.items) {
          repos.value = repos.value.concat(res.items)
        }

        window.requestAnimationFrame(() => {
          checkLoadMore()
        })
      } else {
        quotaExceeded.value = true
      }
      isLoading.value = false
    }

    return {
      isLoading,
      repos,
      quotaExceeded
    }
  }
})
</script>

<style lang="scss" scoped>
.repos {
  padding: 16px 0;

  &--loading {
    padding: 16px 0 80px 0;
  }
}
</style>
