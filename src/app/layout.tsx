import { ColorSchemeScript, MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { NavigationProgress } from '@mantine/nprogress'
import clsx from 'clsx'
import type { Metadata } from 'next'
import { Lora, Work_Sans } from 'next/font/google'
import { ReactNode } from 'react'

import Structure from '@components/layout/main'
import { theme } from '@config/theme'
import '@mantine/charts/styles.css'
import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import '@mantine/notifications/styles.css'
import '@mantine/nprogress/styles.css'
import './globals.css'

const work_sans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  display: 'swap'
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://utility-next.sbacbank.com'),
  title: {
    default: 'SBAC UtilityNext - Utility Next Version',
    template: '%s - SBAC UtilityNext'
  },
  description:
    "Simplify your utility bill collection process with SBAC UtilityNext. This user-friendly application serves as a centralized platform for managing utility bill payments. From electricity to water and other services, track, manage, and process payments efficiently, ensuring seamless operations for both customers and service providers.",
  authors: [{ name: 'Md.Rabiul Hasan', url: 'https://github.com/md-rabiul-hasan' }],
  publisher: 'SBAC Bank PLC'
};

type Props = {
  children: ReactNode
}

const RootLayout = ({ children }: Props) => (
  <html lang="en" className={clsx(work_sans.variable, lora.variable)} suppressHydrationWarning>
    <head>
      <ColorSchemeScript defaultColorScheme="auto" />
    </head>

    <body>
      <MantineProvider theme={theme} defaultColorScheme="auto" classNamesPrefix="sbac">
        <NavigationProgress />
        <Notifications />

        <Structure>{children}</Structure>
      </MantineProvider>
    </body>
  </html>
)

export default RootLayout
