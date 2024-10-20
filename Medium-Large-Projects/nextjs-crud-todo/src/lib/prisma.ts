import {PrismaClient} from '@prisma/client'

//This function returns a new instance of PrismaClient. It's designed to ensure that only one instance of PrismaClient is created.
const prismaClientSingleton = ()=>{
    return new PrismaClient()
}

//This line declares a global variable prismaGlobal to store the singleton instance of PrismaClient. The ReturnType utility type is used to infer the return type of the prismaClientSingleton function.
declare const globalThis: {
    prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton(); //This line checks if prismaGlobal already exists on globalThis. If it does, it reuses the existing instance. If not, it creates a new instance using prismaClientSingleton.

export default prisma;

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma; //This ensures that in development mode, prismaGlobal is set on globalThis, so the same PrismaClient instance is reused across different modules, preventing multiple instances in development.