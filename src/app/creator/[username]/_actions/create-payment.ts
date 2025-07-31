"use server"

import { prisma } from "@/lib/prisma";
import { z } from "zod";

const createPaymentSchema = z.object({
  slug: z.string().min(1,"Slug do criador é obrigatório"),
  name: z.string().min(1, "O nome é obrigatório").max(50),
  message: z.string().min(5, "A mensagem precisa ter pelo menos 5 caracteres")
  .max(300, "A mensagem deve ter no máximo 300 caracteres"),
  price: z.number().min(1500,"Selecione um valor válido"),
  creatorId: z.string()
})

type CreatePaymentSchema = z.infer<typeof createPaymentSchema>

export async function createPayment(data: CreatePaymentSchema) {

  const schema = createPaymentSchema.safeParse(data);

  if (!schema.success) {
    return {
      data: null,
      error: schema.error.issues[0].message,
    };
  }

  try {
    
    const creator = await prisma.user.findUnique({
      where: {
        id: data.creatorId
      }
    })

  } catch (error) {
    return {
      data: null,
      error: "Falha ao criar o pagamento. Tente novamente mais tarde.",
    };
  }
}