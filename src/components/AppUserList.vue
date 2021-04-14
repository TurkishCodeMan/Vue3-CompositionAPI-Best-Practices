<template>
  <div class="w-full user-list">
    <Search
      :func="createPromise"
      :reloadFunc="cleanPromise"
      :loading="loading"
      :placeHolder="'Search By Name'"
    />
    <ul class="grid grid-cols-2 md:grid-cols-4 gap-4" v-if="allUser">
      <li
        v-for="user in allUser"
        :key="user.email"
        class="bg-gray-200 rounded-md p-4 grid place-items-center"
      >
        <img :src="user.picture.large" class="rounded-full w-32" />
        <h2 class="p-2 bg-gray-100 rounded-lg my-2 text-lg">
          {{ user.name.first }}
        </h2>
        <slot name="secondRow" :user="user"></slot>
        <AppButton @click="removeUser(user)" class="bg-red-300"
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
import { useStore } from "vuex";
import { onMounted } from "vue";
export default {
  components: { AppButton, Search },
  async setup() {
    const { allUser, loadUser, removeUser } = useUser();
    const store = useStore();
    onMounted(async () => {
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

<style>
</style>