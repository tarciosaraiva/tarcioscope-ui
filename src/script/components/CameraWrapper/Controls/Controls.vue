<template>
  <div class="controls-wrapper">
    <div class="camera-options-wrapper">
      <div class="camera-option-control select">
        <label for="meter_mode">Metering</label>
        <select name="meter_mode" id="meterMode" @change="changeHandler" v-bind:value="meterMode">
          <option value="average">Average</option>
          <option value="spot">Spot</option>
          <option value="backlit">Backlit</option>
          <option value="matrix">Matrix</option>
        </select>
      </div>
      <div class="camera-option-control select">
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
    <div class="camera-options-wrapper">
      <div class="camera-option-control select">
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
        <button class="camera-button" @click="snapHandler" :disabled="loading">
          <span class="button-label">Take a snap</span>
          <span class="button-icon">
            <font-awesome-icon :icon="icon" />
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'controls',
  props: {
    iso: [String, Number],
    meterMode: String,
    exposureMode: String,
  },
  computed: {
    ...mapState({
      loading: state => state.loading
    }),
    icon: function () {
      return this.loading ? 'cog' : 'camera'
    }
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
  max-width: 36rem;
  margin: 1rem auto;
}

.camera-options-wrapper {
  align-items: flex-end;
  display: flex;
}

.camera-option-control {
  align-items: flex-start;
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  margin: 0 1rem;
}

.camera-button {
  align-items: center;
  background: #d0d6b3;
  border: 0;
  border-bottom: 2px solid #aaae7f;
  border-radius: 3px;
  box-shadow: inset 0 -2px #aaae7f;

  cursor: pointer;
  display: flex;
  font-size: 1.2em;
  margin: 0;
  padding: 1rem;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  width: 100%;
}

.camera-button:active, .camera-button:hover {
  background: #ffd394;
  border-bottom-color: #eec282;
  box-shadow: inset 0 -2px #eec282;
}

.camera-button:active .button-label,
.camera-button:active .button-icon {
  color: #45250a;
}

.camera-button span {
  padding: 0;
}

.camera-button .button-label {
  flex: 1;
  letter-spacing: 1px;
  text-align: left;
}

.camera-button .button-icon {
  text-align: right;
}

.camera-option-control:last-child {
  padding-right: 0;
}

.camera-option-control label {
  font-weight: bold;
  margin: 1rem 0;
}

.camera-option-control.select {
  position: relative;
}

.camera-option-control.select select {
  -webkit-appearance: none;
  background: #d0d6b3;
  border: 0;
  border-bottom: 2px solid #aaae7f;
  border-radius: 3px;
  box-shadow: inset 0 -2px #aaae7f;

  font-size: 1.2em;
  padding: 1rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
  width: 100%;
}

.camera-option-control.select:after {
  color: #333;
  content: '\f078';
  font: normal normal normal 17px/1 FontAwesome;
  position: absolute;
  pointer-events: none;
  bottom: 1rem;
  right: 1rem;
}

.camera-option-control select:hover {
  background: #ffd394;
  border-bottom-color: #eec282;
  box-shadow: inset 0 -2px #eec282;
}

select::-ms-expand {
  display: none;
}
</style>
