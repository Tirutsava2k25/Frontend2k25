
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="h-screen flex flex-col space-y-4 items-center justify-center ">
      <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
      <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something's missing.</p>
        <p className="mb-6 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
      <button className="w-40 h-16 flex justify-center items-center text-sky-200 border-2 rounded-lg border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]" >
        <Link href="/">Go back home</Link>
      </button>
    </div>
  );
};

export default NotFoundPage;