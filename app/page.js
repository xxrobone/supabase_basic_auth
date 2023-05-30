import Image from 'next/image';
import styles from './page.module.css';
import { createClient } from '@supabase/supabase-js';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies, headers } from 'next/headers';

// if using type script add ! in the env file
export default async function Home() {
  const supabase = createServerComponentClient({
    headers,
    cookies,
  });

  const { data: characters } = await supabase.from('characters').select();


  return (
    <main className={styles.main}>
      <h1>Data from supabase</h1>
      <h2>data:</h2>
      <pre>{JSON.stringify(characters, null, 2)}</pre>
      
    </main>
  );
}
