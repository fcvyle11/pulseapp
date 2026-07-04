// components/real-moments-section.tsx

const moments = [
  {
    status: "LIVE",
    meta: "Now",
    image: "/moment1.png",
  },
  {
    status: "LIVE",
    meta: "Now",
    image: "/moment2.png",
  },
  {
    status: "LIVE",
    meta: "Now",
    image: "/moment3.png",
  },
];

export function RealMomentsSection() {
  return (
    <section
      id="moments"
      className="bg-white px-5 py-24 text-black sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mx-auto max-w-3xl text-center text-[44px] font-semibold leading-[0.95] tracking-[-0.06em] sm:text-[64px] md:text-[76px]">
          Real moments,
          <br />
          while they're still real.
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {moments.map((moment) => (
            <article
              key={moment.image}
              className="mx-auto w-full max-w-[350px] overflow-hidden rounded-[34px] bg-black shadow-[0_24px_70px_rgba(0,0,0,0.16)]"
            >
              <div className="relative h-[620px] overflow-hidden">
                <img
                  src={moment.image}
                  alt=""
                  className="h-full w-full object-cover"
                  draggable={false}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/20" />

                <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                  <span className="rounded-full bg-black/45 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                    {moment.status}
                  </span>

                  <span className="rounded-full bg-black/45 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur-md">
                    {moment.meta}
                  </span>
                </div>

                <button
                  type="button"
                  className="absolute bottom-5 right-5 flex h-14 w-14 items-center justify-center rounded-full bg-white text-center text-[12px] font-bold leading-none text-black shadow-xl transition-transform duration-200 hover:scale-105"
                >
                  Tap
                  <br />
                  In
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}