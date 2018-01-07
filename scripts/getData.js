'use strict';
// NASA API KEY: CqX6eZ06gyTrYqgzg5987kKmA6FTRDi0eKt4kHSE
let $ = require('jquery');

module.exports.getSpaceCall = (startDate, endDate) => {
    return new Promise((resolve,reject) =>{
        $.ajax({
            url:`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=CqX6eZ06gyTrYqgzg5987kKmA6FTRDi0eKt4kHSE`
        })
        .done((data) =>{

            let names = [];
            let nearEarthObjects = data.near_earth_objects;
            let dates = Object.keys(nearEarthObjects);
            dates.forEach(date => {
                nearEarthObjects[date].forEach(spaceObj => {
                    names.push(spaceObj.name);
                });
            });

            resolve(names);
        })
        .fail((error) => {
            reject(error);
        });
    });
};

