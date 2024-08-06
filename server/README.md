<h1 align="center">Access Control System Server</h1>

<p align="center">
<a href="https://www.typescriptlang.org">
<img src="https://img.shields.io/badge/TypeScript-black?style=for-the-badge&logo=typescript" />
</a>
<a href="https://nodejs.org/">
  <img src="https://img.shields.io/badge/Node.js-000000?style=for-the-badge&logo=node.js&logoColor=339933" />
</a>
<a href="https://expressjs.com/">
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" />
</a>
<a href="https://github.com/colinhacks/zod">
  <img src="https://img.shields.io/badge/Zod-black?style=for-the-badge&logo=zod"/>
</a>
<a href="https://jestjs.io/">
<img src="https://img.shields.io/badge/Jest-black?style=for-the-badge&logo=jest" />
</a>
<a href="https://swagger.io/">
<img src="https://img.shields.io/badge/Swagger-black?style=for-the-badge&logo=swagger" />
</a>
<a href="https://www.sqlite.org/">
<img src="https://img.shields.io/badge/SQLite%20Database-black?style=for-the-badge&logo=sqlite" />
</a>
<a href="https://www.prisma.io/">
<img src="https://img.shields.io/badge/Prisma%20ORM-black?style=for-the-badge&logo=prisma" />
</a>
</p>

### Introduction
This server handles all system requests, manages authentication, and processes the data to create a standardized format for the applications.  
It was built to run in a Node.js environment, using an SQLite database that is periodically backed up to an SD card or another external storage device.  
It can be deployed on Windows, Linux, and macOS operating systems, but it is ideally designed to be deployed on an Ubuntu Server, where an automation script handles the entire configuration process.  

### Concepts
- Use S.O.L.I.D methodology.
- Use Clean Code methodology.
- Make use of unit and end-to-end test.
- Use server security, authentication and authorization.

### Use Cases
- Admins can set system rules, such as allowed hours and access levels.
- Admin can register terminals.
- Admins can register users and assign an RF ID Tag.
- Terminals can send request to register access with status.
- Terminals must operate offline, so an access list should be provided and saved on the terminals.
- Admin user applications can request full accesses log list and configure system.
- User applications can request self accesses log.

### Roadmap
- [ ] Configure server and database.
- [ ] Configure admin routes to manage terminal.
- [ ] Configure admin routes to manage user level rules.
- [ ] Configure admin routes to manage users.