export default {
  auth: {
    pepper: '$eCr4tPeppe5',
    saltRounds: 10,
    tokenExpirationHours: 1,
  },
  database: {
    connectionString: 'mongodb://localhost/contacts-local',
  },
  logging: {
    stdout: {
      enabled: true,
      level: 'debug',
    },
  },
  port: process.env.PORT || 3000,
}
