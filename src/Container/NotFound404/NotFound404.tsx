const NotFound404 = () => {
  return (
    <>
      <main className="grid min-h-full place-items-center px-6 pt-36">
        <div className="text-center pt-1 rounded-t-xl rounded-b-2xl bg-gradient-to-r from-[#EC0063] to-[#19B7FB]">
          <div className="px-20 py-8 rounded-t-md rounded-b-xl bg-[#EFE7CD] ">
            <p className="text-xl font-semibold text-red-500">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#8f94d3] sm:text-5xl">
              Page not found
            </h1>
            <p className="mt-6 text-base leading-7 text-[#545454]">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-full bg-black px-3.5 py-2.5 text-sm font-semibold border border-black hover:border-slate-500 text-white hover:text-black shadow-sm hover:bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Go back home
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound404;
