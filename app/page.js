import Image from 'next/image';
import styles from './page.module.css';
/* import { createClient } from '@supabase/supabase-js'; */
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies, headers } from 'next/headers';

// if using type script add ! in the env file
export default async function Home() {
  console.log('hello');
  /*  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  ); */
  const supabase = createServerComponentClient({
    headers,
    cookies,
  });

  const { data: news } = await supabase.from('news').select();
  return (
    <main className={styles.main}>
      <h1>Dance school name</h1>
      <h2>Senaste:</h2>
      <pre>{JSON.stringify(news, null, 2)}</pre>
    </main>
  );
}
