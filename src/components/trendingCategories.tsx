export default function TrendingCategories() {
  return (
    <section className="container py-8">
      <h2 className="text-4xl font-medium">Trending Categories</h2>
      <div className="w-full overflow-x-auto no-scrollbar">
        <div className="flex gap-x-16 my-4 w-full min-w-max justify-between">
          <div className="border-none flex items-center flex-col gap-y-4 cursor-pointer mix-w-max p-4 rounded-md">
            <img
              src="/img/electronic.png"
              alt="Electronic"
              width={123}
              height={160}
            />
            <h3 className="text-3xl font-medium text-center">Electronics</h3>
          </div>

          <div className="border-none flex items-center flex-col gap-y-4 cursor-pointer max-w-max p-4 rounded-md">
            <img
              src="/img/electronic.png"
              alt="Jewelery"
              width={123}
              height={160}
            />
            <h3 className="text-3xl font-medium text-center">Jewelery</h3>
          </div>
          <div className="border-none flex items-center flex-col gap-y-4 cursor-pointer max-w-max p-4 rounded-md">
            <img
              src="/img/electronic.png"
              alt="men's clothing"
              width={123}
              height={160}
            />
            <h3 className="text-3xl font-medium text-center">
              Men&lsquo;s clothing
            </h3>
          </div>
          <div className="border-none flex items-center flex-col gap-y-4 cursor-pointer max-w-max p-4 rounded-md">
            <img
              src="/img/electronic.png"
              alt="women's clothing"
              width={123}
              height={160}
            />
            <h3 className="text-3xl font-medium text-center">
              women&lsquo;s clothing
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
