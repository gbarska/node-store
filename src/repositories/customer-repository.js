'use strict'
const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');
// const ValidationContract = require('../validators/fluent-validator');

// exports.get = async() => {
//     const res = await Product
//         .find({
//             active: true
//         },'title price slug');
//         return res;
// }

exports.create = async(data) => {
    var customer = new Customer(data);
    await customer.save();
}

// exports.update = async(id,data) => {
//  await Product
//     .findByIdAndUpdate(id,
//         {
//           $set: {
//               title: data.title,
//               description: data.description,
//               price: data.price,
//               slug: data.slug
//           }  
//         });
// }

// exports.delete = async(id) => {
//     await Product
//     .findByIdAndRemove(id);
// }