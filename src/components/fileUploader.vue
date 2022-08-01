<template v-model>
  <div class="row">
    <div class="col-grow">
      <q-file outlined :label="label" :accept="types" />
    </div>
    <q-btn outline label="upload" color="primary" class="q-ml-sm col-auto" />
  </div>
</template>
<script>
export default {
  name: "fileUploader",
  props: {
    label: String,
    types: String,
  },
};
</script>
<style></style>
