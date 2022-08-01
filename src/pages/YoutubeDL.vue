<template>
  <q-page class="flex column">
    <q-card class="q-ma-md limit-width">
      <q-toolbar class="bg-primary text-white">
        <div class="text-subtitle2">Youtube Downloader</div>
        <q-space />
        <q-tabs
          v-model="tab"
          align="left"
          class="bg-primary text-white"
          shrink
          stretch
        >
          <q-tab name="URL" label="Via URL" no-caps />
          <q-tab name="File" label="Via txt File" no-caps />
        </q-tabs>
      </q-toolbar>
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="URL">
          <q-card-section>
            <q-input outlined label="URL" />
          </q-card-section>
        </q-tab-panel>
        <q-tab-panel name="File" style="padding: 2rem">
          <fileUploader label="Select .txt file" types=".txt"></fileUploader>
        </q-tab-panel>
      </q-tab-panels>
      <q-separator />
      <q-card-actions align="right">
        <q-btn class="bg-primary text-white">download</q-btn>
      </q-card-actions>
    </q-card>
  </q-page>
</template>
<script>
import { ref } from "vue";
import fileUploader from "src/components/fileUploader.vue";
export default {
  name: "YTDLgui",
  components: {
    fileUploader,
  },
  setup() {
    return {
      tab: ref("URL"),
      label: "",
      types: "",
    };
  },
  props: {
    // Using value here allows us to be v-model compatible.
    value: File,
  },
  methods: {
    handleFileChange(e) {
      // Whenever the file changes, emit the 'input' event with the file data.
      this.$emit("input", e.target.files[0]);
    },
  },
};
</script>
<style></style>
