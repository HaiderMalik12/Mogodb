var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/users', function (err, db) {

    if (err) {
        console.log('Unable to connect with db' + err);
    }
    else {
        console.log('Connection Established');
        var catalog = db.collection('catalog');

        //find the products those reviews given by fred
        //You must write in double Quotation
        catalog.find({"reviews.user": "fred"}).toArray(function (err, products) {

            if (err) {
                console.log('Unable to find the Products');
            }
            else {
                if (products.length) {
                    console.log(products);
                }
                else {
                    console.log('No Product Found !');
                }
            }
        });

        //DO Quiz
        //Write a query that finds all products that cost more than 10,000 and that have rating of
        //5 or better


    }

});