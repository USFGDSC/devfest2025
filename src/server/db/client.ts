// Prisma client singleton
// This will be implemented when Prisma is added to the project

interface GlobalThis {
  prisma?: unknown;
}

declare const global: GlobalThis;

let prisma: unknown;

if (process.env.NODE_ENV === 'production') {
  // prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    // global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export { prisma };
