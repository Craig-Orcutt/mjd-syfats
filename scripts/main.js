'use strict';
// NASA API KEY: CqX6eZ06gyTrYqgzg5987kKmA6FTRDi0eKt4kHSE
let $ = require('jquery');
let dataCall = require('./getData');
let startDate = $('#beginDate');
let endDate = $('#endDate');
// let spaceCalled = dataCall.getSpaceCall();


$('#submit').click(() =>{
    dataCall.getSpaceCall(startDate[0].value, endDate[0].value).then(data => {
        console.log(data);
    });
});



// let getCall = $.ajax({
//     url:'https://api.nasa.gov/neo/rest/v1/feed?start_date=2018-01-01&end_date=2018-01-06&api_key=CqX6eZ06gyTrYqgzg5987kKmA6FTRDi0eKt4kHSE'
//     }).then((data) =>{
//         console.log(data.near_earth_objects);
        
//     });

//     console.log('call',  getCall);
    