const { v4: uuidv4 } = require("uuid");
require("colors");

// Change these Variables
const UUID_REGEX = /^(42069|42021)/; // Regex of memefied UUIDs to find
const NUMBER_OF_UUIDS = 5; // Number of UUIDs to generate

const validUUIDs = [];
let iterations = 0;
let performanceMonitor = {
  start: performance.now(),
  getDuration() {
    return performance.now() - this.start;
  },
};

while (validUUIDs.length < NUMBER_OF_UUIDS) {
  const uuid = uuidv4();
  if (UUID_REGEX.test(uuid)) {
    validUUIDs.push(uuid);
    if (NUMBER_OF_UUIDS > 1) console.log(`Found valid UUID: ${uuid}`);
  }
  iterations++;
}
const duration = performanceMonitor.getDuration();
console.log(
  `Generated a total of ${iterations} UUIDs in ${duration.toFixed(2)}ms and found ${
    validUUIDs.length
  } valid UUID${validUUIDs.length > 1 ? "s" : ""}:\n${validUUIDs.join("\n").cyan}`
);
