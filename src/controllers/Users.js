const User = require('../models/Users');

getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

validateUser = async (req, res) => {
  try {
    const user = await User.findOne({ name: req.body.name });
    if (user && !user.isDeleted) {
      if (user.password === req.body.password) {
        res.status(200).json({ message: "OK" });
      } else {
        res.status(401).json({ message: "Error de password" });
      }
    } else {
      res.status(404).json({ message: "Usuario eliminado o no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

createUser = async (req, res) => {
  const user = new User(req.body);
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

updateUser = async (req, res) => {
    try {
        User.updateOne({ _id: req.params.id }, req.body, (err, result) => {
            if (err) {
                res.status(500).json({ message: err.message });
            } else if (result.matchedCount === 0) {
                res.status(404).json({ message: "Usuario no encontrado" });
            } else {
                res.status(200).json({ message: "Usuario actualizado" });
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      user.isDeleted = true;
      await user.save();
      res.status(200).json({message: "Usuario eliminado"});
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

activateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      user.isDeleted = false;
      await user.save();
      res.status(200).json({message: "Usuario activado"});
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getUsers, validateUser, createUser, updateUser, deleteUser, activateUser };