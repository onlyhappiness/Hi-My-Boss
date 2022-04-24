// import React from 'react';
// import Head from 'next/head';
// import Link from 'next/link';

// function Home() {
//   return (
//     <React.Fragment>
//       <Head>
//         <title>Home - Nextron (with-javascript-tailwindcss)</title>
//       </Head>
//       <div className='grid grid-col-1 text-2xl w-full text-center'>
//         <img className='ml-auto mr-auto' src='/images/logo.png' />
//         <span>⚡ Electron ⚡</span>
//         <span>+</span>
//         <span>Next.js</span>
//         <span>+</span>
//         <span>tailwindcss</span>
//         <span>=</span>
//         <span>💕 </span>
//       </div>
//       <div className='mt-1 w-full flex-wrap flex justify-center'>
//         <Link href='/next'>
//           <a className='btn-blue'>Go to next page</a>
//         </Link>
//       </div>
//     </React.Fragment>
//   );
// }

// export default Home;

// import '../styles/home.module.css';

const Home = () => {
  return (
    <div
      className='bg-contain bg-no-repeat bg-center '
      style={{
        backgroundImage: 'url("/images/intro.jpg")',
        width: '100%',
        height: '100vh',
      }}
    >
      {/* <img className=' bg-cover bg-center' src='/images/intro.jpg' /> */}
      <div>
        <button>버튼1</button>
        <button>버튼2</button>
      </div>
    </div>
  );
};

export default Home;
