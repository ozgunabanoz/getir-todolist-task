const _ = require('lodash');
const { ObjectID } = require('mongodb');

let { Todos } = require('./../models/todos');

module.exports = app => {
  app.post('/api/post/todos', async (req, res) => {
    try {
      let body = _.pick(req.body, ['title', 'description', 'writer']);
      let todo = new Todos(body);

      await todo.save();
      res.send().status(200);
    } catch (err) {
      console.log(err);
    }
  });

  app.delete('/api/delete/todos', async (req, res) => {
    try {
      let id = req.body._id;

      if (!ObjectID.isValid(id)) {
        return res.status(404).send();
      }

      await Todos.findOneAndDelete({
        _id: id
      });

      res.send().status(200);
    } catch (err) {
      console.log(err);
    }
  });

  app.get('/api/get/todos', async (req, res) => {
    try {
      let todos = await Todos.find({}).sort({ _id: -1 });

      res.send(todos).status(200);
    } catch (err) {
      console.log(err);
    }
  });

  app.patch('/api/change_status/todos', async (req, res) => {
    try {
      let id = req.body._id;
      let newStat = !req.body.status;

      if (!ObjectID.isValid(id)) {
        return res.status(404).send();
      }

      await Todos.findOneAndUpdate(
        { _id: id },
        { $set: { status: newStat } }
      );

      res.send().status(200);
    } catch (err) {
      console.log(err);
    }
  });

  app.patch('/api/edit/todos', async (req, res) => {
    try {
      let elems = _.pick(req.body, [
        'title',
        'description',
        'writer'
      ]);
      let id = req.body._id;

      if (!ObjectID.isValid(id)) {
        return res.status(404).send();
      }

      await Todos.findOneAndUpdate({ _id: id }, { $set: elems });

      res.status(200).send();
    } catch (err) {
      console.log(err);
    }
  });
};
