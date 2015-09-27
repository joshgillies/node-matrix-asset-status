var STATUSES = {
  'Archived': 1,
  'Under Construction': 2,
  'Pending Approval': 4,
  'Approved': 8,
  'Live': 16,
  'Live Approval': 32,
  'Editing': 64,
  'Editing Approval': 128,
  'Editing Approved': 256
}

var statuses = {}

for (var status in STATUSES) {
  statuses[status] = STATUSES[status]
  statuses[status.toLowerCase()] = STATUSES[status]
  statuses[STATUSES[status]] = status
}

module.exports = function assetStatus (status) {
  return statuses[status]
}
