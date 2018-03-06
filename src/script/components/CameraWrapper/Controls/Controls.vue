<template>
  <div class="controls-wrapper">
    <div class="camera-options-wrapper">
      <div class="camera-option-control">
        <label for="meter_mode">Metering</label>
        <select name="meter_mode" id="meterMode" @change="changeHandler" v-bind:value="meterMode">
          <option value="average">Average</option>
          <option value="spot">Spot</option>
          <option value="backlit">Backlit</option>
          <option value="matrix">Matrix</option>
        </select>
      </div>
      <div class="camera-option-control">
        <label for="iso">ISO</label>
        <select name="iso" id="iso" @change="changeHandler" v-bind:value="iso">
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="320">320</option>
          <option value="400">400</option>
          <option value="500">500</option>
          <option value="640">640</option>
          <option value="800">800</option>
        </select>
      </div>
      <div class="camera-option-control">
        <label for="exposure_mode">Exposure</label>
        <select name="exposure_mode" @change="changeHandler" id="exposureMode" v-bind:value="exposureMode">
          <option value="off">off</option>
          <option value="auto">Auto</option>
          <option value="night">Night</option>
          <option value="nightpreview">Night preview</option>
          <option value="backlight">Backlight</option>
          <option value="spotlight">Spotlight</option>
          <option value="sports">Sports</option>
          <option value="snow">Snow</option>
          <option value="beach">Beach</option>
          <option value="verylong">Very long</option>
          <option value="fixedfps">Fixed FPS</option>
          <option value="antishake">Anti-shake</option>
          <option value="fireworks">Fireworks</option>
        </select>
      </div>
    </div>
    <button class="camera-button" @click="snapHandler">
      <span class="button-label">Take a snap</span>
      <span class="button-icon">
        <font-awesome-icon :icon="icon" size="2x" />
      </span>
    </button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import { faCamera } from '@fortawesome/fontawesome-free-solid'

import './Controls.css'

export default {
  name: 'controls',
  props: {
    iso: [String, Number],
    meterMode: String,
    exposureMode: String,
  },
  components: { FontAwesomeIcon },
  computed: {
    icon: () => faCamera
  },
  methods: {
    ...mapActions(['changeCameraSettings', 'snap']),
    changeHandler (e) {
      const { name, value } = e.target
      let payload = {}
      payload[name] = value
      this.changeCameraSettings(payload)
    },
    snapHandler () {
      this.snap()
    }
  }
}
</script>
