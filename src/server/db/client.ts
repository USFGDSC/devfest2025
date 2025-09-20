// Prisma client singleton
// This will be implemented when Prisma is added to the project

let prisma: any;

if (process.env.NODE_ENV === 'production') {
  // prisma = new PrismaClient();
} else {
  if (!(global as any).prisma) {
    // (global as any).prisma = new PrismaClient();
  }
  prisma = (global as any).prisma;
}

export { prisma };
