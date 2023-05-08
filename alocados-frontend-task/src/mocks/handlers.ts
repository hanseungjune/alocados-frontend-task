import { rest } from "msw";

// 코인 기본 상태
const initial_balances: Record<string, number> = {
  ETH: 2000,
  SOL: 0,
  BNB: 0,
};
let balances: Record<string, number> = { ...initial_balances };

// 잔액을 갱신
const update_balance = (coin: string, value: number) => {
  balances[coin] = value;
};

// 코인 환전 API
export const exchangeCoinHandler = rest.post<{
  from: string;
  to: string;
  value: number;
}>("/api/exchange", (req, res, ctx) => {
  // 환전 대상 코인과 값
  const { from, to, value } = req.body;

  // 환전 가능 여부 확인(비율 계산)
  let exchangeRate: Record<string, number> = { ETH: 0, SOL: 0, BNB: 0 };
  if (from === "ETH") {
    exchangeRate = {
      ETH: 1,
      SOL: 0.01,
      BNB: 0.02,
    };
  } else if (from === "SOL") {
    exchangeRate = {
      ETH: 100,
      SOL: 1,
      BNB: 2,
    };
  } else if (from === "BNB") {
    exchangeRate = {
      ETH: 50,
      SOL: 0.5,
      BNB: 1,
    };
  }

  // 환전해서 들어갈 금액(코인)
  const exchangeValue = (exchangeRate[from] / exchangeRate[to]) * value;
  // 보낼 코인이 적을때,
  if (balances[from] < value) {
    return res(ctx.status(400), ctx.json({ message: "잔액이 부족합니다." }));
  }

  // 잔액 업데이트
  update_balance(from, balances[from] - value);
  update_balance(to, balances[to] + exchangeValue);

  // 응답 데이터 반환
  return res(
    ctx.status(200),
    ctx.json({
      message: "환전이 완료되었습니다.",
      balances,
      timestamp: new Date().toString(),
      from,
      to,
      value,
    })
  );
});

const historyArray:any[] = [];

// 환전 이력 추가 API
export const exchangeHistoryHandler = rest.post<{
  regDt: string;
  from: string;
  fromVal: string;
  to: string;
  toVal: string;
}>("/api/history", (req, res, ctx) => {
  const { regDt, from, fromVal, to, toVal } = req.body;

  const newHistory = { regDt, from, fromVal, to, toVal }
  historyArray.push(newHistory);

  return res(ctx.status(200), ctx.json({
    regDt, from, fromVal, to, toVal
  }))
});