const fs = require('fs');
const path = './node_modules/nan/nan.h';

try {
  let content = fs.readFileSync(path, 'utf8');
  content = content.replace(
    /#include "nan_scriptorigin.h"/,
    '// #include "nan_scriptorigin.h"'
  );
  fs.writeFileSync(path, content);
  console.log('Successfully patched nan.h');
} catch (err) {
  console.error('Error patching nan.h:', err);
}
