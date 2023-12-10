import img1 from "../assets/Images/UniImage1.png";
const NotFound404 = () => {
  return (
    <>
      <main
        className="grid min-h-full place-items-center bg-[#f8f9fa] px-6 py-24 sm:py-32 lg:px-8"
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "full",
          maxHeight: "full",
        }}
      >
        <div className="text-center px-20 py-8 rounded-xl bg-slate-900 bg-opacity-90 shadow-inner">
          <p className="text-xl font-normal text-red-500">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#8f94d3] sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-[#e0e2e7]">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-full bg-black px-3.5 py-2.5 text-sm font-semibold border border-solid border-black hover:border-slate-500 text-white shadow-sm hover:bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound404;
