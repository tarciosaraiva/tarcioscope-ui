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
          <option value="1600">1600</option>
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
    <button class="camera-button" @click="snapHandler" :disabled="loading">
      <span class="button-label">Take a snap</span>
      <span class="button-icon">
        <font-awesome-icon :icon="loadingIcon" size="2x" spin v-if="loading" />
        <font-awesome-icon :icon="icon" size="2x" v-else />
      </span>
    </button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import { faCamera, faCog } from '@fortawesome/fontawesome-free-solid'

export default {
  name: 'controls',
  props: {
    iso: [String, Number],
    meterMode: String,
    exposureMode: String,
  },
  components: { FontAwesomeIcon },
  computed: {
    ...mapState({
      loading: state => state.loading
    }),
    icon: () => faCamera,
    loadingIcon: () => faCog,
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

<style lang="postcss" scoped>

.controls-wrapper {
  align-content: center;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  max-width: 522px;
  width: 100%;
  margin: 0 auto;
}

.camera-options-wrapper {
  display: flex;
  flex: 1;
}

.camera-button {
  align-items: center;
  background: #ffb347;
  border: 0;
  border-bottom: 2px solid #e5a13f;
  border-radius: 3px;
  box-shadow: inset 0 -2px #e5a13f;

  cursor: pointer;
  display: flex;
  font-size: 1.2em;
  margin: 10px 0;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
}

.camera-button:active, .camera-button:hover {
  background: #ffd394;
  border-bottom-color: #eec282;
  box-shadow: inset 0 -2px #eec282;
}

.camera-button:active .button-icon,
.camera-button:hover .button-icon {
  background-color: #eec282;
}

.camera-button:active .button-label,
.camera-button:active .button-icon {
  color: #45250a;
}

.camera-button span {
  padding: 10px 20px;
}

.camera-button .button-label {
  flex: 1;
  letter-spacing: 1px;
  text-align: left;
}

.camera-button .button-icon {
  background-color: #e5a13f;
  text-align: right;
}

.camera-option-control {
  align-items: flex-start;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-right: 10px;
}

.camera-option-control:last-child {
  padding-right: 0;
}

.camera-option-control label {

  font-weight: bold;
  margin: 5px 0;
}

.camera-option-control select {
  -webkit-appearance: none;
  background: #ffb347;
  border: 0;
  border-bottom: 2px solid #e5a13f;
  border-radius: 3px;
  box-shadow: inset 0 -2px #e5a13f;

  font-size: 1.2em;
  padding: 10px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
  width: 100%;
}
</style>
