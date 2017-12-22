var moment = require('moment');

console.log(moment().format());


// Unix Timestamp
// January 1st 1970 @ 12:00am -> 0
// January 1st 1970 @ 12:01am -> 60
// December 31st 1970 @ 11:59pm -> -60 

var now = moment();

console.log('Current Timestamp', now.unix());

var timestamp = 1513940725;
var currentMoment = moment.unix(timestamp);
console.log('current moment',  currentMoment.format());
console.log('current moment',  currentMoment.format('MMM D, YY @ h:mm a'));

// January 31st, 2017 @ 12:15 AM
console.log('current moment',  currentMoment.format('MMMM Do, YYYY @ h:mm A'));