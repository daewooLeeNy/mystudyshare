<template>
  <ins
    :class="adClass"
    :style="adStyle"
    :data-ad-unit="adUnit"
    :data-ad-width="adWidth"
    :data-ad-height="adHeight"
  ></ins>
</template>

<script>
import loadScript from "./load-script";
import uid from "./unique-id";

function adFitLoader() {
  if (typeof window["adfit"] === "function") {
    return Promise.resolve();
  } else {
    return loadScript("https://t1.daumcdn.net/kas/static/ba.min.js");
  }
}
export default {
  props: {
    adUnit: {
      type: String,
      required: false
    },
    adWidth: {
      type: String,
      required: false
    },
    adHeight: {
      type: String,
      required: false
    },
    adStyle: {
      type: String,
      required: false,
      default: "display: none"
    },
    adClass: {
      type: String,
      required: false,
      default: "kakao_ad_area"
    }
  },
  mounted() {
    let vm = this;
    adFitLoader().then(function() {
      const instanceId = uid();
      //
      // bind ad load  callback to `ad-loaded` event
      //
      window[`adfit-${instanceId}-onload`] = function(el) {
        vm.$emit("ad-loaded", el);
        window[`adfit-${instanceId}-onload`] = null;
      };
      vm.$el.setAttribute("data-ad-onload", `adfit-${instanceId}-onload`);
      //
      // bind ad fail callback to `ad-loaded` event
      //
      window[`adfit-${instanceId}-onfail`] = function(el) {
        vm.$emit("ad-failed", el);
        window[`adfit-${instanceId}-onfail`] = null;
      };
      vm.$el.setAttribute("data-ad-onfail", `adfit-${instanceId}-onfail`);
      // eslint-disable-next-line no-useless-catch
      try {
        window["adfit"].render(vm.$el);
      } catch (ex) {
        throw ex;
      }
    });
  },
  beforeDestroy() {
    // eslint-disable-next-line no-useless-catch
    try {
      window["adfit"].destroy(this.adUnit);
    } catch (ex) {
      throw ex;
    }
  }
};
</script>
