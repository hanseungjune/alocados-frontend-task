import { setupWorker } from "msw";
import {
  exchangeCoinHandler,
  balance_handler,
  exchangeHistoryHandler,
  getRecentHistoryHandler,
} from "./handlers";

export const worker = setupWorker(
  exchangeCoinHandler,
  balance_handler,
  exchangeHistoryHandler,
  getRecentHistoryHandler,
);
