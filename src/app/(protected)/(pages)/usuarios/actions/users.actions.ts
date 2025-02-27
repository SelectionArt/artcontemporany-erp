"use server";
// Libs
import { prisma } from "@/lib/prisma";
// Schemas
import { userSchema } from "../schemas/user.schema";
// Types
import type {
  CreateUserProps,
  CreateUserReturn,
  DeleteUserProps,
  DeleteUserReturn,
  DeleteMultipleUsersProps,
  DeleteMultipleUsersReturn,
  FetchUsersReturn,
  UpdateUserProps,
  UpdateUserReturn,
} from "./types/users.actions.types";
import { UserRole } from "@prisma/client";

const createUser = async ({
  values,
}: CreateUserProps): Promise<CreateUserReturn> => {
  const validatedFields = userSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    const newUser = await prisma.user.create({
      data: {
        ...validatedFields.data,
        role: validatedFields.data.role as UserRole,
      },
      select: {
        id: true,
        name: true,
        email: true,
        isAuthorized: true,
        role: true,
      },
    });

    return {
      success: "Usuario creado con éxito",
      user: {
        ...newUser,
        name: newUser.name ?? "",
      },
    };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al crear el usuario. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteUser = async ({
  id,
}: DeleteUserProps): Promise<DeleteUserReturn> => {
  try {
    await prisma.user.delete({
      where: { id },
    });
    return { success: "Usuario eliminado con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar el usuario. Por favor, inténtalo de nuevo",
    };
  }
};

const deleteMultipleUsers = async ({
  ids,
}: DeleteMultipleUsersProps): Promise<DeleteMultipleUsersReturn> => {
  try {
    await prisma.user.deleteMany({
      where: { id: { in: ids } },
    });
    return { success: "Usuarios eliminados con éxito" };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al eliminar los usuarios. Por favor, inténtalo de nuevo",
    };
  }
};

const fetchUsers = async (): Promise<FetchUsersReturn> => {
  try {
    const users = await prisma.user.findMany({
      orderBy: { name: "asc" },
      select: {
        id: true,
        name: true,
        email: true,
        isAuthorized: true,
        role: true,
      },
    });
    return users.map((user) => ({
      ...user,
      name: user.name ?? "",
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
};

const updateUser = async ({
  id,
  values,
}: UpdateUserProps): Promise<UpdateUserReturn> => {
  const validatedFields = userSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Campos inválidos. Por favor, revisa los datos" };
  }

  try {
    const updatedUser = await prisma.user.update({
      where: { id },
      data: {
        ...validatedFields.data,
        role: validatedFields.data.role as UserRole,
      },
      select: {
        id: true,
        name: true,
        email: true,
        isAuthorized: true,
        role: true,
      },
    });

    return {
      success: "Usuario actualizado con éxito",
      user: {
        ...updatedUser,
        name: updatedUser.name ?? "",
      },
    };
  } catch (error) {
    console.error(error);
    return {
      error: "Error al actualizar el usuario. Por favor, inténtalo de nuevo",
    };
  }
};

export { createUser, deleteUser, deleteMultipleUsers, fetchUsers, updateUser };
