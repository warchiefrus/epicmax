<template>
  <div class="repo">
    <div>
      <a class="repo__user" :href="repo.owner.html_url" target="_blank">
        <i class="icon-test-user mr-5"></i>
        <span>{{ repo.owner.login }}</span>
      </a>
    </div>

    <div>
      <a class="repo__name" :href="repo.html_url" target="_blank">
        <i class="icon-test-arrow-right  mr-5"></i>
        <span class="">
          <strong>{{ repo.name }}</strong>
        </span>
      </a>
    </div>

    <div class="repo__values">
      <div v-for="(item, index) of repoValues" :key="index" class="repo__value">
        <i :class="[item.icon, item.color]" class="mr-2"></i>
        {{ item.value }}
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'
import ReposService from '@/services/ReposService'

export default defineComponent({
  props: {
    repo: {
      type: Object,
      requered: true
    }
  },
  setup(props, ctx) {
    const repoValues = [
      {
        icon: 'icon-test-star',
        value:
          `${props.repo.stargazers_count}`.length > 3
            ? `${`${props.repo.stargazers_count}`.substring(0, 3)}k`
            : props.repo.stargazers_count,
        color: 'text--yellow-1'
      },
      {
        icon: 'icon-test-issue',
        value:
          `${props.repo.open_issues}`.length > 3
            ? `${`${props.repo.open_issues}`.substring(0, 3)}k`
            : props.repo.open_issues,
        color: 'text--blue-darken-1'
      },
      {
        icon: 'icon-test-fork',
        value:
          `${props.repo.forks}`.length > 3
            ? `${`${props.repo.forks}`.substring(0, 3)}k`
            : props.repo.forks,
        color: ''
      }
    ]

    return {
      repoValues
    }
  }
})
</script>

<style lang="scss" scoped>
.repo {
  padding: 16px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15.2199px;
  margin: 8px 0;
  font-size: 22px;
  text-align: left;

  &__user,
  &__name {
    padding: 2px 0;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    &:hover {
      color: blue;
    }
  }
  &__name {
    margin-left: 12px;
  }

  &__values {
    font-size: 18px;
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    padding: 2px 0;

    @media (max-width: 400px) {
      justify-content: flex-start;
      flex-direction: column;
    }
  }
  &__value {
    &:not(:first-child) {
      margin-left: 20px;
    }

    @media (max-width: 400px) {
      margin-left: 0 !important;
    }
  }
}
</style>
