// components/product-section.tsx

const steps = [
    {
      eyebrow: "Open Pulse",
      title: "See what’s alive nearby.",
      body: "The first screen shows live signals around you. Moments, places, and people currently active, not yesterday’s leftovers dressed up as content.",
      image: "/product/open-pulse.jpg",
    },
    {
      eyebrow: "Discover",
      title: "Find the move before it becomes obvious.",
      body: "Coffee runs, sunsets, late football, house parties, study sessions, live music. Pulse is built around real things people are doing.",
      image: "/product/discover.jpg",
    },
    {
      eyebrow: "Tap In",
      title: "Show intent without making it weird.",
      body: "Tap into a moment to say you’re interested, heading over, or already there. Simple presence, not a desperate group chat archaeology dig.",
      image: "/product/tap-in.jpg",
    },
    {
      eyebrow: "Move",
      title: "Close the app. Go outside.",
      body: "Pulse has done its job when your phone goes away and your night starts. Shocking concept for a social app, naturally.",
      image: "/product/move.jpg",
    },
  ];
  
  export function ProductSection() {
    return (
      <section id="product" className="bg-[#f7f4ee] px-5 py-24 text-black sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-black/45">
              Product
            </p>
  
            <h2 className="mt-4 text-[44px] font-semibold leading-[0.95] tracking-[-0.06em] sm:text-[64px] md:text-[76px]">
              Designed for what’s happening now.
            </h2>
          </div>
  
          <div className="mt-20 space-y-24">
            {steps.map((step, index) => {
              const isReversed = index % 2 === 1;
  
              return (
                <article
                  key={step.eyebrow}
                  className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                    isReversed ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div>
                    <div className="mx-auto w-full max-w-[360px] rounded-[46px] border border-black/10 bg-black p-3 shadow-[0_28px_90px_rgba(0,0,0,0.22)]">
                      <div className="relative overflow-hidden rounded-[34px] bg-neutral-950">
                        <div className="absolute left-1/2 top-3 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
  
                        <img
                          src={step.image}
                          alt=""
                          className="h-[610px] w-full object-cover"
                        />
  
                        <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
                      </div>
                    </div>
                  </div>
  
                  <div className="mx-auto max-w-xl lg:mx-0">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-black/40">
                      {step.eyebrow}
                    </p>
  
                    <h3 className="mt-4 text-[36px] font-semibold leading-[1] tracking-[-0.055em] sm:text-[52px]">
                      {step.title}
                    </h3>
  
                    <p className="mt-6 max-w-md text-[17px] font-medium leading-8 text-black/60">
                      {step.body}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    );
  }