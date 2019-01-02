<template>
  <div class="App o-container o-container--s o-vertical-spacing o-vertical-spacing--xl">
    <h1>Building a Renderless reCAPTCHA v3 Form Component with Vue.js</h1>
  </div>
</template>

<script>
export default {
  name: `App`,
};
</script>

<style lang="scss">
@import './assets/scss/settings/**/*';
@import './assets/scss/generic/**/*';
@import '{
  .o-container,
  .o-container--s,
} from ~@avalanche/object-container';
@import '{
  .o-vertical-spacing,
  .o-vertical-spacing--xl,
} from ~@avalanche/object-vertical-spacing';

.App {
  padding-top: setting-spacing(xl);
  padding-bottom: setting-spacing(xl);

  h1 {
    text-align: center;
  }
}
</style>
