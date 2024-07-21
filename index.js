const { v4: uuidv4 } = require("uuid");
const VALID_UUID_REGEX = /^b00b5.*69.*/;

const numberOfUUIDs = 1;
const validUUIDs = [];
let iterations = 0;

let performanceMonitor = {
  start: performance.now(),
  getDuration() {
    return performance.now() - this.start;
  },
};

while (validUUIDs.length < numberOfUUIDs) {
  const uuid = uuidv4();
  if (VALID_UUID_REGEX.test(uuid)) {
    validUUIDs.push(uuid);
  }
  iterations++;
}
const duration = performanceMonitor.getDuration();
console.log(
  `Generated a total of ${iterations} UUIDs in ${duration.toFixed(2)}ms and found ${
    validUUIDs.length
  } valid UUIDs:\n`,
  validUUIDs
);
