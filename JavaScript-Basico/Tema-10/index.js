import { suma, multiplica } from "./controller.js";
import chalk from 'chalk';

const log = console.log;

console.log(multiplica(suma(1,2),suma(4,5)));
const result = multiplica(suma(1,2),suma(4,5))
log(chalk.green(`Resultado: ${result}`));
