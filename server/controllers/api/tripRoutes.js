const router = require('express').Router();
const { Trips } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newTrips = await Trips.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newTrips);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const TripsData = await Trips.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!TripsData) {
      res.status(404).json({ message: 'No Trips found with this id!' });
      return;
    }

    res.status(200).json(TripsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
