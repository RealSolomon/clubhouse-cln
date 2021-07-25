import Head from 'next/head';
import { WelcomeStep } from '../components/steps/WelcomeStep';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Clubhouse: The Social Audio App</title>
      </Head>
      <WelcomeStep />
    </div>
  );
}
