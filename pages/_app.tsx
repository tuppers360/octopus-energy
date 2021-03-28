import axios from 'axios';
import { SWRConfig } from 'swr';
import '../styles/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{ fetcher: (url: string) => axios(url).then((r) => r.data) }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;
