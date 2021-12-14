const redis = require("redis");
              
var client = redis.createClient ({
  host : 'eu1-generous-cub-33977.upstash.io',
  port : '33977',
  password: '19bc002897f942dc819b0d7afaeac8c2'
});

client.on("error", function(err) {
  throw err;
});

client.set('foo','bar');