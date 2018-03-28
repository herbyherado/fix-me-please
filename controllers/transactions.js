const Transaction = require('../models/Transaction')

module.exports = {
  all: function(req, res) {
    Transaction.find()
      .populate('booklist')
      .exec()
      .then(transactions => {
        res.send(transactions)
      })
      .catch(err => {
        res.send(err)
      })
  },
  create: function(req, res) {
    console.log(req.body)
    var transaction = new Transaction(req.body);
    transaction.save(function (err, result) {
      if (err) {
        res.send({err: err})
      } else {
        res.send(result)
      }
      res.send(result)
    });
  },
  update: function(req, res) {
    Transaction.update({ _id: req.params.id }, {
      $set: req.body
    }, function(err, result) {
      if (err) {
        res.send({err: err})
      }
      res.send(result)
    });
  },
  deletion: function(req, res) {
    Transaction.remove({ _id: req.params.id }, function (err, result) {
      if (err) {
        res.send({err: err})
      }
      res.send(result)
    })
  }
}
