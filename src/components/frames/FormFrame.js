import { post } from '../../utils/api';

export default {
  props: {
    data: {
      required: true,
      type: Object,
    },
    endpoint: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      error: null,
      loading: false,
      success: false,
    };
  },
  methods: {
    async submit() {
      try {
        this.error = null;
        this.loading = true;

        await post({
          data: this.data,
          endpoint: this.endpoint,
        });

        this.loading = false;
        this.success = true;
      } catch (error) {
        this.error = error;
        this.loading = false;
        this.success = false;
      }
    },
  },
  render() {
    return this.$scopedSlots.default({
      // Data
      error: this.error,
      loading: this.loading,
      success: this.success,
      // Methods
      submit: this.submit,
    });
  },
};
