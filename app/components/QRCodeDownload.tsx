'use client';

import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

const QRCodeDownload: React.FC = () => {
  const appUrl = 'https://voicevox-chat.com/app-redirect';

  return (
    <div className='flex flex-col items-center'>
      <div className='bg-white p-4 rounded-lg shadow-lg'>
        <QRCodeSVG value={appUrl} size={200} bgColor={'#ffffff'} fgColor={'#000000'} level={'L'} includeMargin={false} />
      </div>
      <p className='mt-4 text-sm text-white'>QRコードをスキャンしてダウンロード</p>
    </div>
  );
};

export default QRCodeDownload;
