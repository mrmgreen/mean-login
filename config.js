var dbName = 'dbskyapps';

module.exports = {
  'port': process.env.PORT || 8040,
  'dbName': dbName,
  'database': 'localhost:27017/' + dbName,
  'secret': 'thereisnospoon'
};