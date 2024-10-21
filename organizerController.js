// Controller logic for organizers
const Organizer = require('../models/organizerModel');

// Register a new organizer
exports.registerOrganizer = async (req, res) => {
    const { name, email, password, services } = req.body;

    try {
        const existingOrganizer = await Organizer.findOne({ email });
        if (existingOrganizer) {
            return res.status(400).json({ success: false, message: "Organizer already exists." });
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const newOrganizer = await Organizer.create({ name, email, password: hashedPassword, services });

        res.status(201).json({ success: true, organizer: newOrganizer });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error registering organizer. Please try again later." });
    }
};

// Get all organizers
exports.getAllOrganizers = async (req, res) => {
    try {
        const organizers = await Organizer.find().select('-password');
        res.json({ success: true, organizers });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching organizers. Please try again later." });
    }
};
