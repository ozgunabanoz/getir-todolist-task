const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('/api/post/todos', { target: 'http://localhost:5000' })
  );
  app.use(
    proxy('/api/get/todos', { target: 'http://localhost:5000' })
  );
  app.use(
    proxy('/api/change_status/todos', {
      target: 'http://localhost:5000'
    })
  );
  app.use(
    proxy('/api/edit/todos', { target: 'http://localhost:5000' })
  );
  app.use(
    proxy('/api/delete/todos', { target: 'http://localhost:5000' })
  );
};
