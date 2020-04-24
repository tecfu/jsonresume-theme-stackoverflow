const moment = require('moment');

const dateHelpers = {
  MY: date => {
    let result = moment(date.toString(), ['YYYY-MM-DD']) 
    return result.isValid() ? result.format('MMM YYYY') : date
  },
  Y: date => {
    let result = moment(date.toString(), ['YYYY-MM-DD']) 
    return result.isValid() ? result.format('YYYY') : date
  },
  DMY: date => {
    let result = moment(date.toString(), ['YYYY-MM-DD'])
    return result.isValid() ? result.format('D MMM YYYY') : date
  }
};

module.exports = { dateHelpers };
