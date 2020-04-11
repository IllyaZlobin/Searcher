module.exports = {
  db: {
    connections: {
      default: {
        type: 'mysql',
        host: 'localhost',  
        port: 3306,
        username: 'root',
        password: '1234',
        database: 'searcherdb',
        synchronize: false,
        logging: ["query", "error", "info", "log"]  
      }
    }  
  }  
};