'use strict';
// NASA API KEY: CqX6eZ06gyTrYqgzg5987kKmA6FTRDi0eKt4kHSE
let $ = require('jquery');
let dataCall = require('./getData');
let startDate = $('#beginDate');
let endDate = $('#endDate');
// let spaceCalled = dataCall.getSpaceCall();


$('#submit').click(() =>{

    dataCall.getSpaceCall(startDate[0].value, endDate[0].value)
    .then(data => {
        let objects = [];
        let nearEarthObjects = data.near_earth_objects;
        let dates = Object.keys(nearEarthObjects);
        dates.forEach(date => {
            nearEarthObjects[date].forEach(spaceObj => {
                objects.push(spaceObj);
            });
        });

        let dangerousObjects = objects.filter(obj => {
            return obj.is_potentially_hazardous_asteroid;
        });

        dangerousObjects.slice(0, 3).forEach(dangerousObject => {
            dataCall.fuckOff(dangerousObject.name ,'Craig').then(html =>{
                // // not sure what the jquery is for these HTML elements
                // let htmlEl = document.createElement('html');
                // htmlEl.innerHTML = html;
                // let div = htmlEl.getElementsByClassName('hero-unit')[0];
                // Can you have nested heads and multiple html docs on one page?
                $('#container').append(html);
            });
        });
    });
});



// let getCall = $.ajax({
//     url:'https://api.nasa.gov/neo/rest/v1/feed?start_date=2018-01-01&end_date=2018-01-06&api_key=CqX6eZ06gyTrYqgzg5987kKmA6FTRDi0eKt4kHSE'
//     }).then((data) =>{
//         console.log(data.near_earth_objects);
        
//     });

//     console.log('call',  getCall);
    