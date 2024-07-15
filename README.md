 # Prisma database (ORM - Object Relational Mappping)
ORMs let you easily interact with your database without worrying too much about the underlying syntax (SQL language for eg)


 ## Setup
 1. ### Initialize an empty Node.js project
    `npm init -y`
    
 3. ### Add dependencies
    `npm install prisma --save-dev`
  
4. ### Initialize typescript
   `npx tsc --init`
   Change `rootDit` to `src`
   Change `outDir` to `dist`
  
 5. ### Initialize a fresh prisma project
    `npx prisma init`

------------------------------------------------------------------------------------

  ### Once the required dependencies added run below , which will create - prisma.schema file.
  ### This file contains the db config auxiliary(helper) functions.
  `npx prisma migrate dev --name <any comment here>`


  ### Then create table like below - in prisma these are called as model's

    model User {
      id         Int      @id @default(autoincrement())
      username   String   @unique
      password   String
      firstName  String
      lastName   String
    }

  ### Then we need to generate clients ( Ex.  User JS class for accessing the User model)
  `npc prisma generate`   
