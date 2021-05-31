const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    success:true,
    msg:'Show all bootcamps'
  });
});

router.post('/', (req, res) => {
  res.status(200).json({
    success: true,
    msg: 'Create one bootcamp'
  });
});

router.get('/:id', (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Display 1 bootcamp, the number ${req.params.id}`
  });
});

router.put('/:id', (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Update 1 bootcamp ${req.params.id}`
  });
});

router.delete('/:delete', (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Delete 1 bootcamp ${req.params.id}`
  });
});

module.exports = router;