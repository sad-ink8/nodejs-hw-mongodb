import { initMongoDB } from './db/initMongoDB.js';
import { startServer } from './server.js';
import { createDirIfNotExists } from './utils/createDirIfNotExists.js';
import { TEMPLATES_DIR } from './constants/index.js';

const bootstrap = async () => {
  await initMongoDB();
  await createDirIfNotExists(TEMPLATES_DIR);
  //await createDirIfNotExists(TEMP_UPLOAD_DIR);
  // await createDirIfNotExists(UPLOAD_DIR);
  startServer();
};

void bootstrap();
