
// @desc      Get all bootcamps
// @route     GET api/v1/bootcamps
// @access    Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({
    success:true,
    msg:'Show all bootcamps'
  });
}

// @desc      Get a single bootcamp
// @route     GET api/v1/bootcamps/:id
// @access    Public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Display 1 bootcamp, the number ${req.params.id}`
  });
}

// @desc      Create new bootcamp
// @route     POST api/v1/bootcamps/:id
// @access    Private
exports.createBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({
      success: true,
      msg: 'Create one bootcamp'
    });
}

// @desc      Update bootcamp
// @route     PUT api/v1/bootcamps/:id
// @access    Private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({
      success: true,
      msg: `Update 1 bootcamp ${req.params.id}`
    });
}

// @desc      Delete bootcamp
// @route     DELETE api/v1/bootcamps/:id
// @access    Private
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({
      success: true,
      msg: `Delete 1 bootcamp ${req.params.id}`
    });
}