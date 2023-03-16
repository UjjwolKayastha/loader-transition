import Link from 'next/link';

export default function Home() {
  return (
    <div>
      THIS IS HOME PAGE{' '}
      <div>
        <Link href="/abc">GO TO ABC</Link>
      </div>
    </div>
  );
}
