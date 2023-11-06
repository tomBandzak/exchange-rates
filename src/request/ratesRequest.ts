export const getExchangeRates = async () => {
  const resp = await fetch('https://cors-proxy-node.vercel.app/api?url=https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt');
  console.log(resp);
  if(resp.ok) {
    return await resp.text();
  }

  return '';
}
