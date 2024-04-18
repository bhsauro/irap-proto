import { Inter, Lusitana, Open_Sans, Roboto_Mono } from 'next/font/google';

export const roboto_mono = Roboto_Mono({
    subsets: ['latin'],
    variable: '--font-roboto-mono',
    display: 'swap',
  })

export const open_sans = Open_Sans({ subsets: ['latin'] });

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({ 
    subsets: ['latin'], 
    weight: ["400", "700"]
}); 