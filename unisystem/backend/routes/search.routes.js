import express from 'express'
import searchController from '../controller/controller.search.js'

function searchRoute(pool) {
  const router = express.Router();

  router.post('/', (req, res) => {
    searchController.handleSearch(req, res, pool);
  });

  return router;
};

export default searchRoute