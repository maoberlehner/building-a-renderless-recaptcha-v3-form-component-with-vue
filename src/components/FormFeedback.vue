<template>
  <FormFrame
    :data="formData"
    endpoint=".netlify/functions/feedback"
  >
    <div
      slot-scope="{ error, loading, success, submit }"
      class="FormFeedback"
    >
      <p
        v-if="success"
        class="FormFeedback__success"
      >
        Thank you!
      </p>
      <form
        v-else
        class="o-vertical-spacing"
        @submit.prevent="submit"
      >
        <label class="FormFeedback__label">
          Name
          <input
            v-model="formData.name"
            class="FormFeedback__field"
          >
        </label>
        <label class="FormFeedback__label">
          Message
          <textarea
            v-model="formData.message"
            class="FormFeedback__field"
          />
        </label>
        <p
          v-if="error"
          class="FormFeedback__error"
        >
          An error has occurred, please try again.
        </p>
        <button :disabled="loading">
          <template v-if="loading">
            Sending ...
          </template>
          <template v-else>
            Submit
          </template>
        </button>
      </form>
    </div>
  </FormFrame>
</template>

<script>
import FormFrame from './frames/FormFrame';

export default {
  name: `FormFeedback`,
  components: {
    FormFrame,
  },
  data() {
    return {
      formData: {
        message: ``,
        name: ``,
      },
    };
  },
};
</script>

<style lang="scss">
@import '../assets/scss/settings/**/*';

.FormFeedback__field {
  width: 100%;
  padding: setting-spacing(m);
  border: 1px solid #c5c5c5;
  border-radius: 0.25em;
}

.FormFeedback__label {
  display: block;
}

.FormFeedback__success {
  text-align: center;
  color: green;
}

.FormFeedback__error {
  color: red;
}
</style>
