<template>
  <div class="user">
    <Search
      :func="createPromise"
      :reloadFunc="cleanPromise"
      :loading="loading"
      :placeHolder="'Search By Name'"
    />
    <ul class="user-grid-container" v-if="allUser">
      <li v-for="user in allUser" :key="user.email" class="user-grid-item">
        <img :src="user.picture.large" class="user-image" />
        <h2 class="user-info">
          {{ user.name.first }}
        </h2>
        <slot name="secondRow" :user="user"></slot>
        <AppButton @click="removeUser(user)" class="btn btn-app"
          >Remove</AppButton
        >
      </li>
    </ul>
  </div>
</template>

<script>
import useUser from "@/use/home/useUser";
import useSearch from "@/use/other/useSearch";
import AppButton from "@/components/AppButton";
import Search from "@/components/Search";
import { useStore} from "vuex";
import { onMounted } from "vue";
export default {
  components: { AppButton, Search },
  async setup() {
    const { allUser, loadUser, removeUser } = useUser();
    const store = useStore();

    onMounted(async () => {
      console.log("Loadf User")
      await loadUser();
    });
    const { createPromise, cleanPromise, loading } = useSearch(
      (val) => store.commit("Users/SEARCH_USERBYNAME", val),
      () => store.dispatch("Users/getUser")
    );
    return { allUser, removeUser, createPromise, cleanPromise, loading };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/_colors";
@import "@/assets/style/_mixins";
@import "@/assets/style/_methods";
.user {
  @extend %align-center;
  justify-content: center;
  flex-direction: column;

  &-grid-container {
    width: 100%;
    display: grid;
    place-items: center;
    gap: 20px;
    grid-template-columns: repeat(1, 1fr);
    @include mobile {
      grid-template-columns: repeat(2, 1fr);
    }
    @include tablet {
      grid-template-columns: repeat(4, 1fr);
    }

    .user-grid-item {
      padding: 12px 12px;
      border-radius: 12px;
      @extend %align-center;
      flex-direction: column;
      background: $card-bg;
      width: 100%;
      transition: all 0.4s ease;
      &:hover {
        transform: scaleX(1.03);
      }

      .user-image {
        width: 120px;
        border-radius: 50%;
        object-fit: cover;
      }
    }
  }
}
</style>