import Link from 'next/link';

const Homepage = () => {
  return (
    <div>
      <h1 className="text-7xl">Homepage </h1>
      <Link href="/about" className='text-2xl'>
        about page
      </Link>
        </div>
  );
}

export default Homepage