import '@/styles/globals.css'
import { Auth0Provider } from '@auth0/auth0-react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/router';



export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
      // <Auth0Provider
      //   domain="dev-617q62a0x1nxk4v2.us.auth0.com"
      //   clientId="4M3BruRDDFosOim7bl3YQbywge3SdCN6"
      //   redirectUri={typeof window !== 'undefined' && window.location.origin}
      // >
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      // </Auth0Provider>
  )
}
