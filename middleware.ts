import { NextRequest, NextResponse } from 'next/server';

const HIGH_GDP = new Set(['US','CA','GB','DE','FR','NL','BE','SE','NO','DK','FI','IE','IT','ES','PT','AT','CH','LU','LI','IS','AU','NZ','SG','HK','JP','KR','AE','QA','SA','KW']);
const CCY_BY_COUNTRY: Record<string,string> = {
  US:'USD', CA:'CAD', GB:'GBP', DE:'EUR', FR:'EUR', NL:'EUR', BE:'EUR', SE:'SEK', NO:'NOK', DK:'DKK', FI:'EUR',
  IE:'EUR', IT:'EUR', ES:'EUR', PT:'EUR', AT:'EUR', CH:'CHF', LU:'EUR', LI:'CHF', IS:'ISK', AU:'AUD', NZ:'NZD',
  SG:'SGD', HK:'HKD', JP:'JPY', KR:'KRW', AE:'AED', QA:'QAR', SA:'SAR', KW:'KWD'
};

export function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const country = req.geo?.country?.toUpperCase() ?? 'NG';

  if (!req.cookies.get('roothaus.currency')) {
    const currency = CCY_BY_COUNTRY[country] ?? 'NGN';
    const multiplier = HIGH_GDP.has(country) ? '2' : '1';
    res.cookies.set('roothaus.currency', currency, { path: '/', maxAge: 60 * 60 * 24 * 7 });
    res.cookies.set('roothaus.multiplier', multiplier, { path: '/', maxAge: 60 * 60 * 24 * 7 });
  }
  return res;
}

export const config = {
  matcher: ['/((?!_next|.*\\.(?:png|jpg|jpeg|svg|gif|webp|ico|css|js|txt)).*)'],
};
