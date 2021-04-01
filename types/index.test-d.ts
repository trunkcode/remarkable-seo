import trimPhp from './index';

const str = '\n    Hello World!     \n';

new trimPhp().lTrim(str);
new trimPhp().rTrim(str);
new trimPhp().trim(str);
