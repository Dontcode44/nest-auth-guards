<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app (The app run in the port 3000)

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Warning
[Docker-compose](https://docs.docker.com/compose/compose-file/compose-versioning/) make sure you have a compatible version from the file

```bash
# Bring up docker services
$ docker-compose up
```
```bash
# The use of protected routes is handled by JWTs and watchdogs that take care of maintaining a specific validation task, so please don't forget to register a user with the required fields "username", "email" and a "password"
# Please make sure you don't use invalid emails, because the guard won't let it through.

# Once you have your account, you can go to the login and generate an access token for the protected routes
```
## If u want a better experience

```bash
# Plase make sure join to the "Docs from the api" after run the project, you can found in localhost:3000/documentation
⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇
```
- Docs - [Documentation](https://localhost:3000/documentation)

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Contact me

- Author - [Héctor Andrés Ordoñez](https://www.linkedin.com/in/h%C3%A9ctor-andr%C3%A9s-ordo%C3%B1ez-/)
- Website from framework - [https://nestjs.com]()

## License

Nest is [MIT licensed](LICENSE).
