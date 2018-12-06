module.exports = {
  development: {
    client: 'pg',
    connection: 'postgresql://localhost/movies'
  }, 

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
