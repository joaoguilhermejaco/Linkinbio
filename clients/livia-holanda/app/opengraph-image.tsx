import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import { join } from 'path';

export const alt = 'Lívia Holanda · Advocacia e Consultoria Jurídica';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const logoBuffer = await readFile(join(process.cwd(), 'public/logo-lockup.png'));
  const logoBase64 = `data:image/png;base64,${logoBuffer.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background:
            'radial-gradient(ellipse at 50% 18%, #4A1F1C 0%, #2B0D14 70%, #1E120D 100%)',
        }}
      >
        {/* Vinheta externa pra dar profundidade */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.55) 100%)',
          }}
        />
        {/* Lockup centralizado — renderizado depois da vinheta = naturalmente em cima */}
        <img
          src={logoBase64}
          alt=""
          width={720}
          height={480}
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
    ),
    { ...size },
  );
}
