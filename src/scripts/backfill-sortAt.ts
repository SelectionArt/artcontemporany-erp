import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const affected = await prisma.$executeRaw`
    UPDATE "Budget"
    SET "sortAt" = "createdAt"
  `;

  console.log("Backfill completado. Filas afectadas:", affected);

  const sample = await prisma.$queryRaw<any[]>`
    SELECT "id", "createdAt", "sortAt", "acceptedAt", "closeAt"
    FROM "Budget"
    ORDER BY "createdAt" DESC
    LIMIT 10
  `;

  console.log("Muestra (10):", sample);

  const wrong = await prisma.$queryRaw<any[]>`
    SELECT COUNT(*)::int AS wrong
    FROM "Budget"
    WHERE "sortAt" <> "createdAt"
  `;

  console.log("Registros con sortAt distinto de createdAt:", wrong[0]?.wrong);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
