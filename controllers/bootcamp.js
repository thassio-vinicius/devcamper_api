
//get all bootcamps - /api/v1/bootcamps/ - public
exports.getBootcamps = (req, res, next) => {    res.status(200).send({success: true});
};

//get one bootcamp - /api/v1/bootcamps/:id - public
exports.getBootcamp = (req, res, next) => {res.status(200).send({success: true})};

//create a new bootcamp - /api/v1/bootcamps/ - private
exports.createBootcamp = (req, res, next) => {res.status(200).send({success: true})};

//update a bootcamp - /api/v1/bootcamps/:id - private
exports.updateBootcamp = (req, res, next) => {res.status(200).send({success: true})};

//update specific fields of a bootcamp - /api/v1/bootcamps/:id - private
exports.patchBootcamp = (req, res, next) => {res.status(200).send({success: true})};

//delete a bootcamp - /api/v1/bootcamps/:id - private
exports.deleteBootcamp = (req, res, next) => {res.status(204).send({success: true})};