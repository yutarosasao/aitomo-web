import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export function GET(request: NextRequest) {
  const userAgent = request.headers.get('user-agent')?.toLowerCase() || '';

  if (/iphone|ipad|ipod/.test(userAgent)) {
    return NextResponse.redirect('https://apps.apple.com/jp/app/%E6%B5%B7%E5%A4%96%E3%81%AE%E5%8F%8D%E5%BF%9C%E3%81%BE%E3%81%A8%E3%82%81%E3%82%B5%E3%82%A4%E3%83%88-%E5%A4%96%E5%9B%BD%E4%BA%BA%E3%81%AE%E3%82%A2%E3%83%8B%E3%83%A1%E3%81%AE%E6%84%9F%E6%83%B3%E3%81%BE%E3%81%A8%E3%82%81%E3%82%A2%E3%83%97%E3%83%AA/id6483685698');
  } else if (/android/.test(userAgent)) {
    return NextResponse.redirect('https://play.google.com/store/apps/details?id=com.aitomochatapp');
  } else {
    return NextResponse.redirect(new URL('/', request.url));
  }
}
