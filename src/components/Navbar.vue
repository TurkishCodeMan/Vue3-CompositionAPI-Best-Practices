<template>
  <nav class="nav">
    <!--Menu Items -->
    <div class="nav-menus">
      <router-link class="nav-link" tag="a" :to="{ name: 'Home' }"
        >Home</router-link
      >

      <router-link class="nav-link" tag="a" :to="{ name: 'Car' }"
        >Car</router-link
      >
    </div>

    <a class="nav-toggle-bar">
      <i class="fas fa-bars"></i>
    </a>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/assets/style/_colors";
@import "@/assets/style/_mixins";
.nav {
  background: linear-gradient(
    to right bottom,
    $navbar-first,
    rgba(255, 255, 255, 0.3)
  );
  box-shadow: 4px 6px 4px black 0.8;
  padding: 18px;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  @include tablet {
    display: flex;
    justify-content: space-between;
  }
  &-menus {
    display: none;

    @include tablet {
      display: flex;
    }
    .nav-link {
      text-decoration: none;
      list-style: none;
      color: white;
      font-size: 22px;
      margin: 0px 12px;
      padding: 8px 12px;
      border-radius: 10px;
      background: rebeccapurple;
      &:hover {
        background: linear-gradient(to right bottom, rebeccapurple, purple);
      }
    }
  }

  &-toggle-bar {
    display: flex;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1, 1.1);
    }
    i {
      font-size: 25px;
    }
    @include tablet {//Tablete kadar display none sonra burdan çık
      display: none;
    }
  }
}
</style>