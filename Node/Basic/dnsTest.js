const dns = require('dns');

dns.lookup('google.in', (err, address,  family) => {
    console.log('Address: %j family: IPv%s', address, family);
});

// IPV4 Addresses
dns.resolve4('google.in', (err, addresses) => {
    if (err) throw err;

    console.log(`addresses: ${JSON.stringify(addresses)}`);

    addresses.forEach((a) => {
      dns.reverse(a, (err, hostnames) => {
        if (err) {
          throw err;
        }
        console.log(`Reverse for ${a}: ${JSON.stringify(hostnames)}`);
      });
    });
  });

  // IPV4 Addresses
dns.resolve4('einfach.in', (err, addresses) => {
  if (err) throw err;

  console.log(`addresses: ${JSON.stringify(addresses)}`);

  addresses.forEach((a) => {
    dns.reverse(a, (err, hostnames) => {
      if (err) {
        throw err;
      }
      console.log(`Reverse for ${a}: ${JSON.stringify(hostnames)}`);
    });
  });
});
