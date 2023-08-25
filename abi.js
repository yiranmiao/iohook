const nodeAbi = require('node-abi')
console.log('ELECTRON 26.0.0: ', nodeAbi.getAbi('26.0.0', 'electron'))
console.log('ELECTRON 23.0.0: ', nodeAbi.getAbi('23.0.0', 'electron'))
console.log('ELECTRON 22.0.0: ', nodeAbi.getAbi('22.0.0', 'electron'))
console.log('NODE 18.0.0: ', nodeAbi.getAbi('18.0.0', 'node')) //108
console.log('NODE 16.0.0: ', nodeAbi.getAbi('16.0.0', 'node')) //93
console.log('NODE 19.0.0: ', nodeAbi.getAbi('19.0.0', 'node'))
console.log('NODE 20.0.0: ', nodeAbi.getAbi('20.0.0', 'node'))