import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient();

// Tipos específicos do Prisma para entrada de dados
type CreateUserInput = Prisma.UserCreateInput;
type UpdateUserInput = Prisma.UserUpdateInput;

async function getUserById(userId: string) {
  return await prisma.user.findUnique({
    where: { id: userId },
  });
}

async function createUser(data: CreateUserInput) {
  return await prisma.user.create({
    data,
  });
}

async function updateUser(userId: string, data: UpdateUserInput) {
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