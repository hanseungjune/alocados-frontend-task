import { rest } from 'msw';

// 코인 기본 상태
const initial_balances: Record<string, number> = {
  eth: 2000,
  sol: 0,
  bnb: 0,
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
}>("api/exchange", (req, res, ctx) => {
  console.log(req)
  console.log(res)
  console.log(ctx)
  // 환전 대상 코인과 값
  const { from, to, value } = req.body;

  // 환전 가능 여부 확인(비율 계산)
  let exchangeRate: Record<string, number> = { eth: 0, sol: 0, bnb: 0 }
  if (from === 'eth') {
    exchangeRate = {
      eth: 1,
      sol: 0.01,
      bnb: 0.02,
    };
  } else if (from === 'sol') {
    exchangeRate = {
      eth: 100,
      sol: 1,
      bnb: 2,
    }
  } else if (from === 'bnb') {
    exchangeRate = {
      sol: 0.5,
      eth : 50,
      bnb: 1
    }
  }

  // 환전해서 들어갈 금액(코인)
  const exchangeValue = exchangeRate[to] / exchangeRate[from] * value;
  // 보낼 코인이 적을때, 
  if (balances[from] < value) {
    return res(ctx.status(400), ctx.json({ message: '잔액이 부족합니다.'}));
  }

  // 잔액 업데이트
  update_balance(from, balances[from] - value);
  update_balance(to, balances[to] + exchangeValue);

  // 응답 데이터 반환
  return res(
    ctx.status(200),
    ctx.json({
      message: '환전이 완료되었습니다.',
      balances,
      timestamp: new Date().toISOString(),
      from,
      to,
      value,
    })
  );
});

// 잔액 정보 API
export const balance_handler = rest.get('/api/balance', (req, res, ctx) => {
  return res(ctx.status(200), ctx.json({ balances }));
});

// 잔액 데이터 초기화 API
export const reset_balance_handler = rest.post('api/reset', (req, res, ctx) => {
  balances = { ...initial_balances };
  return res(ctx.status(200), ctx.json({ message: '잔액이 초기화되었습니다.'}));
});
