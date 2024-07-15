import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const { user, todo } = prisma;

// INSERT
// async function insertUser(username: string, password: string, firstName: string, lastName: string) {
//     const res = await prisma.user.create({
//         data: {
//             username,
//             password,
//             firstname: firstName,
//             lastname: lastName
//         },
//         select: {
//             id: true
//         }
//     })

//     console.log(res)
// }

// insertUser("premjit@gmail.com", "123", "pj", "bnk")


// // UPDATE
// interface UpdatedParams {
//     firstname: string,
//     lastname: string
// }
// async function updateUser(username: string, { firstname, lastname }: UpdatedParams) {
//     const res = await prisma.user.update({
//         data: {
//             firstname,
//             lastname
//         },
//         select: {
//             firstname: true,
//             lastname: true
//         },
//         where: {
//             username
//         }
//     })
//     console.log(res)
// }
// updateUser("premjit@gmail.com", { firstname: "premjit", lastname: "benake" })


// SELECT user
async function getUser(username: string) {
    const res = await prisma.user.findFirst({
        select: {
            username: true,
            firstname: true,
            lastname: true
        },
        where: {
            username
        }
    })
    console.log(res)
}
getUser("premjit@gmail.com")