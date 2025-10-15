import User from "../models/User.js";

export const getAllUsers = async (req, res) => {
  try {
    let query = {};
    const result = await User.aggregate([
      { $match: query },
      {
        $facet: {
          users: [{ $sort: { createdAt: -1 } }],
          activeCount: [{ $match: { status: "active" } }, { $count: "count" }]
        },
      },
    ]);

    const users = result[0].users;
    const activeCount = result[0].activeCount[0]?.count || 0;

    res.status(200).json({ users, activeCount });
  } catch (error) {
    console.error(`Error when get users ${error}`);
    res.status(500).json({ message: "Something went wrong..." });
  }
};

export const createUser = async (req, res) => {
  try {
    const { title } = req.body;
    const user = new User({ title });

    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error when createUser", error);
    res.status(500).json({ message: "Something went wrong..." });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { name, status } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        name,
        status
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "Something went wrong..." });
    }

    return res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error when updateUser", error);
    return res.status(500).json({ message: "Something went wrong..." });
  }

  return null;
};

export const deleteUser = async (req, res) => {
  try {
    const delUser = await User.findByIdAndDelete(req.params.id);

    if (!delUser) {
      return res.status(404).json({ message: "Something went wrong..." });
    }

    return res.status(200).json(delUser);
  } catch (error) {
    console.error("Error when delete User", error);
    return res.status(500).json({ message: "Something went wrong..." });
  }

  return null;
};
