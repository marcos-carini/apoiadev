"use server"

import { prisma } from "@/lib/prisma";
import { z } from "zod";

const getInfoUserSchema = z.object({
  username: z.string().min(1, "Username is required"),
});

type GetInfoUserSchema = z.infer<typeof getInfoUserSchema>;

export async function getInfoUser(data: GetInfoUserSchema) {

  const schema = getInfoUserSchema.safeParse(data);

  if (!schema.success) {
    return null;
  }
  
  try {
    const user = await prisma.user.findUnique({
      where: {
        username: data.username
      }
    });

    return user;

  } catch (error) {
    return null;
  }
}