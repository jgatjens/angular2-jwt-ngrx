var mongoose = require('mongoose');

var jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  header: { type: String },
  post_by: { type: String },
  about: { type: String },
  skills: { type: String },
  aditional_info: { type: String },
  contract: { type: String, default: 'not-specified' },
  location: { type: String },
  date: { type: String, default: new Date() },
  active: { type: Boolean, default: false },
  category: { type: String },
  duration: { type: Number },
  requirement: { type: String },
  responsability: { type: String },
  shareTitle: { type: String },
  shareAbout: { type: String },
  attachImageLink: { type: String },
  attachImageName: { type: String },
  applicants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Applicant'
  }]
});

// the schema is useless so far
// we need to create a model using it
module.exports = mongoose.model('Job', jobSchema);

