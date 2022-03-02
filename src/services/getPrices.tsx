export default async function getList(code?: string) {
  code =
    code ||
    'BTC,ETH,XRP,DOGE,BNB,LTC,ADA,BUSD,BCH,VET,DOT,EOS,SOL,SRM,USDT,BTT,TRX,FIL,LINK,MATIC,UNI,NEO,CHZ,ETC,THETA,XLM,BSV,LUNA,WIN,SXP';
  const prices = `USD,EUR,JPY,BTC,ETH`;
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${code}&tsyms=${prices}`;

  const response = await fetch(url);
  const { RAW } = await response.json();

  let formattedData: any[] = [];

  Object.keys(RAW).map((crypto) => {
    formattedData.push({
      key: crypto,
      price: RAW[crypto]['USD']['PRICE'],
      market_cap: RAW[crypto]['USD'].MKTCAP,
      circulatingSupply: RAW[crypto]['USD'].SUPPLY,
      name: RAW[crypto]['USD']['FROMSYMBOL'],
      priceEUR: RAW[crypto]['EUR']['PRICE'],
      priceJPY: RAW[crypto]['JPY']['PRICE'],
      priceBTC: RAW[crypto]['BTC']['PRICE'],
      priceETH: RAW[crypto]['ETH']['PRICE'],
    });
  });
  return formattedData;
}
