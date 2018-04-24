tarcioscope
===
> A simple tool to look at the sky with a PiKon Telescope (a newtonian tube).

Disclaimer
---
This is the SPA part of the scope. For the server part [please refer to this repo](https://github.com/tarciosaraiva/tarcioscope).

What you will need
---

- [A Raspberry Pi](https://www.raspberrypi.org/)
- [A Raspberry Pi Camera](https://www.raspberrypi.org/products/camera-module-v2/)
- A microSD card with Linux installed
  - I'm using [Raspbian](https://www.raspbian.org/)
- Node JS
- Yarn

Getting started
---

Clone this repo, change to its directory and run `yarn`.

To run the tests and linting you can run `yarn test`.

To execute the app you will run `yarn start`.

In order to have it fully working reading images from a stream you are going to have to have a server streaming images. Currently that's the backend part of this project named [tarcioscope](https://github.com/tarciosaraiva/tarcioscope). But you could point to any server that streams images and be done with it.
