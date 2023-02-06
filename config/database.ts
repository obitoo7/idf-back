export default ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('MYSQLHOST', '127.0.0.1'),
      port: env.int('MYSQLPORT', 5432),
      database: env('MYSQLDATABASE', 'strapi'),
      user: env('MYSQLUSER', 'strapi'),
      password: env('MYSQLPASSWORD', 'password'),
      ssl: env.bool(true),
    },
  },
});