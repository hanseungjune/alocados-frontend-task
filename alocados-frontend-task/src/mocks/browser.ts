import { setupWorker } from "msw";
import {
  exchangeCoinHandler,
  exchangeHistoryHandler,
} from "./handlers";

export const worker = setupWorker(
  exchangeCoinHandler,
  exchangeHistoryHandler,
);
