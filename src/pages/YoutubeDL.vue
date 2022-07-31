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
            <q-input outlined v-model="text" label="URL" />
          </q-card-section>
        </q-tab-panel>
        <q-tab-panel name="File" class="q-pa-none">
          <div class="row" style="padding: 16px">
            <q-card-section class="col">
              <q-file outlined v-model="txtFile" label="Choose .txt File" />
            </q-card-section>
            <q-card-actions align="right">
              <q-btn
                class="bg-primary text-white"
                @click="submitFile"
                label="upload"
              />
            </q-card-actions>
          </div>
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
export default {
  name: "YTDLgui",
  setup() {
    return {
      tab: ref("URL"),
    };
  },
};
</script>
<style></style>
