<template v-model>
  <div class="row">
    <div class="col-10">
      <q-file outlined :label="label" :accept="types" />
    </div>
    <q-btn label="upload" flat class="text-grey-7 col-2" />
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
<style scoped></style>
