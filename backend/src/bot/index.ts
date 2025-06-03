import { assignGroup } from "./handler/assign.handler.js";
import { keyVerify } from "./handler/key.handler.js";
import { sendMessage } from "./handler/message.handler.js";
import { rulesHandler } from "./handler/rules.handler.js";
import { startHandler } from "./handler/start.handler.js";

export const initBot = () => {
  // Register Handlers
  startHandler();
  sendMessage();
  rulesHandler();
  assignGroup();
  keyVerify();
};
