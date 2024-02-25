//modules: import / export
// import logger from './logger/logger.js';
import { logger2 } from './logger/index.js';
// import {
//     TYPE_LOG,
//     TYPE_WARN,
//     TYPE_ERROR
// } from './constant.js';
// import constant from './constant.js'; //lỗi
import * as constant from './constant.js'; //lỗi


console.log(constant);
logger("Test message...", TYPE_WARN);

