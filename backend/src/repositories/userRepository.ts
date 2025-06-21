const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getUserById(userId: string) {
  return await prisma.user.findUnique({
    where: { id: userId },
  });
}

async function createUser(data: { name: string; email: string; password: string }) {
  return await prisma.user.create({
    data,
  });
}

async function updateUser(userId: string, data: { name?: string; email?: string; password?: string }) {
  return await prisma.user.update({
    where: { id: userId },
    data,
  });
}

async function deleteUser(userId: string) {
  return await prisma.user.delete({
    where: { id: userId },
  });
}

module.exports = {
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};