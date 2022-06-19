Additional Technologies added:

- Prisma (ORM)
- Typescript
- Axios



**NOTES FOR SETUP**

- ```npm i```

- create a ```.env``` file inside the ```/server``` folder
- copy line below and replace with appropriate values ```DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"```

- the ```/migrations``` folder => ```/server/prisma/migrations``` may need to be deleted when connecting to a new DB.
- running the script ```npx prisma migrate dev --name init``` runs the initial migration and will create the tables in the DB

[Prisma Docs](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-node-postgres)

## STARTING
- ```npm run start``` in root dir will start the client 

- ```npm run start``` in the ```/server``` dir will start the server