import { setupWorker } from "msw";
import {
  exchangeCoinHandler,
  balance_handler,
  exchangeHistoryHandler,
  getRecentHistoryHandler,
  getPastHistoryHandler
} from "./handlers";

export const worker = setupWorker(
  exchangeCoinHandler,
  balance_handler,
  exchangeHistoryHandler,
  getRecentHistoryHandler,
  getPastHistoryHandler
);
