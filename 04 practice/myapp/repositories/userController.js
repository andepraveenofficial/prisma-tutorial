const prisma = require("../../../Rough/01-relationships/dbconfig/prisma");

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const findUser = await prisma.user.findUnique({
    where: { email: email },
  });

  if (findUser) {
    return res.json({
      status: 400,
      message: "Email Already Taken, Please try Another email.",
    });
  }

  const newUser = await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: password,
    },
  });

  return res.json({ status: 200, data: newUser, msg: "User Created" });
};

const updateUser = async (req, res) => {
  const { name, email, password } = req.body;
  const userId = req.params.id;
  await prisma.user.update({
    where: {
      id: Number(userId),
    },
    data: {
      name,
      email,
      password,
    },
  });
  return res.json({ status: 200, msg: "User Updated" });
};

const fetchUsers = async (req, res) => {
  const users = await prisma.user.findMany();
  return res.json({ status: 200, data: users, message: "Users Fetched" });
};

const showUser = async (req, res) => {
  const userId = req.params.id;
  const users = await prisma.user.findUnique({
    where: { id: Number(userId) },
  });
  return res.json({ status: 200, data: users, message: "Users Fetched" });
};

const deleteUser = async (req, res) => {
  const userId = req.params.id;
  const user = await prisma.user.delete({
    where: { id: Number(userId) },
  });
  return res.json({ status: 200, data: user, message: "Users Deleted" });
};

module.exports = { createUser, updateUser, fetchUsers, showUser, deleteUser };
