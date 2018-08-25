'use strict'

function toCronTime (interval) {
  let [ unit, time ] = interval.split(' ')
  let cron = {
    'seconds': `*/${unit} * * * * *`,
    'minutes': `0 */${unit} * * * *`,
    'hours': `0 0 */${unit} * * *`,
    'days': `0 0 0 */${unit} * *`,
    'months': `0 0 0 1 */${unit} *`,
    'weeks': `0 0 0 1 1 */${unit}`,
    'years': `0 0 0 1 1 *`
  }

  return cron[time]
}

module.exports = { toCronTime }
