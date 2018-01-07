
'use strict';
// NASA API KEY: CqX6eZ06gyTrYqgzg5987kKmA6FTRDi0eKt4kHSE
let $ = require('jquery');

module.exports.getSpaceCall = (startDate, endDate) => {
    return new Promise((resolve,reject) =>{
        $.ajax({
            url:`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=CqX6eZ06gyTrYqgzg5987kKmA6FTRDi0eKt4kHSE`
        })
        .done((data) =>{
            resolve(data);
        })
        .fail((error) => {
            reject(error);
        });
    });
};

module.exports.fuckOff = (toName, fromName) => {
    return new Promise((resolve,reject) =>{
        $.ajax({
            url:`http://www.foaas.com/ing/${toName}/${fromName}`
        }).done((data)=>{
            resolve(data);
        }).fail((error)=>{
            reject(error);
        });
    });
};
