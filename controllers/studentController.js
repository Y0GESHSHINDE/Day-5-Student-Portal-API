const Student = require('../models/Student');

// Add student
exports.addStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    const saved = await student.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Filter students
exports.getStudents = async (req, res) => {
  try {
    const { branch, year } = req.query;
    const filter = {};
    if (branch) filter.branch = branch;
    if (year) filter.year = year;

    const students = await Student.find(filter);
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
