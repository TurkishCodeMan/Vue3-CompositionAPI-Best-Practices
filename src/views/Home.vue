<template>
  <Wrapper>
    <AppUserList>
      <template #secondRow="{ user }">
        <p class="text-md">{{ user.email }}</p>
      </template>
    </AppUserList>
  </Wrapper>
</template>

<script>
// @ is an alias to /src
import Wrapper from "@/components/ui/Wrapper";
import AppUserList from "@/components/AppUserList";
export default {
  name: "Home",
  components: { Wrapper, AppUserList },
};
</script>
