<template>
  <q-page class="flex column">
    <q-card class="q-ma-md limit-width">
      <q-toolbar class="bg-primary text-white">
        <div class="text-subtitle2">Youtube Downloader</div>
        <q-space />
        <q-btn
          stretch
          flat
          label="Documentation"
          no-caps
          target="_blank"
          href="https://github.com/yt-dlp/yt-dlp"
        />
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
      <q-tab-panels v-model="tab">
        <q-tab-panel name="URL">
          <q-card-section>
            <q-input
              outlined
              v-model="URLs"
              label="URL(s)"
              type="textarea"
              hint="one URL per line, no characters after the URL"
              :shadow-text="urlShadowText"
              @keydown="processTextareaFill($event, 'urlShadowText')"
            />
          </q-card-section>
        </q-tab-panel>
        <q-tab-panel name="File" style="padding: 2rem">
          <fileUploader label="Select .txt file" types=".txt"></fileUploader>
        </q-tab-panel>
      </q-tab-panels>
      <q-separator />
      <div class="q-ml-md q-mt-sm text-bold text-grey">Advanced Options</div>
      <div class="fit row q-px-lg q-pt-sm q-pb-md">
        <q-select
          square
          outlined
          v-model="downloader"
          :options="downloaderOptions"
          label="Downloader"
          class="col q-mx-xs"
        />
        <q-select
          square
          outlined
          v-model="quality"
          :options="qualityOptions"
          label="Quality"
          class="col q-mx-xs"
        />
        <div class="col-12">
          <div class="row">
            <q-input
              square
              outlined
              v-model="exportfileType"
              label="Output File Extension"
              class="col-shrink q-mx-xs q-my-sm"
              :shadow-text="convertShadowText"
              :disable="!convertFile"
              @keydown="processTextareaFill($event, 'convertShadowText')"
            />
            <q-checkbox v-model="convertFile" label="Convert Output file" />
            <q-checkbox v-model="customOptions" label="Add Custom Params" />
          </div>
        </div>
        <div class="col-12">
          <div class="row">
            <q-input
              v-if="customOptions"
              square
              outlined
              v-model="dlCustomOptions"
              label="Custom Options"
              class="col-grow q-mx-xs q-my-sm"
              hint="any additional yt-dlp options, type them as you would in the command line, i.e. --[option1][SPACE]--[option2][SPACE]-[abbreviatedOption]"
            />
          </div>
        </div>
      </div>
      <q-separator />
      <q-card-actions class="q-ma-sm justify-between">
        <q-checkbox v-model="audioOnly" label="Audio Only" />
        <q-btn class="bg-primary text-white" @click="downloadVideos"
          >download</q-btn
        >
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
      URLs: ref(""),
      tab: ref("URL"),
      downloader: ref("default"),
      audioOnly: ref(false),
      quality: ref("Best"),
      exportfileType: ref(""),
      convertFile: ref(false),
      customOptions: ref(false),
      downloaderOptions: [
        "default",
        "aria2c",
        "avconv",
        "axel",
        "curl",
        "ffmpeg",
        "httpie",
        "wget",
      ],
      dlCustomOptions: "",
      qualityOptions: ["Best"],
      urlShadowText: `ex: \n url1 \n url2`,
      convertShadowText: `Ex: .mp4`,
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
    processTextareaFill(e, shadowTextName) {
      if (e === void 0) {
        return;
      }
      if (e.target.value.length > 0) {
        this[shadowTextName] = "";
      }
    },
    downloadVideos() {
      console.log(
        "URLs: " + this.URLS,
        "downloader: " + this.downloader,
        "audioOnly: " + this.audioOnly,
        "Quality: " + this.quality,
        "convertFile: " + this.convertFile,
        "exportFileType: " + this.exportfileType
      );
    },
  },
};
</script>
<style></style>
