"use client";

import { FormEvent, useState } from "react";
import {
  Clock3,
  Lock,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

type MomentStatus = "LIVE" | "SOON" | "QUIET" | "ENDING";

type Moment = {
  id: number;
  title: string;
  status: MomentStatus;
  distance: string;
  area: string;
  detail: string;
  time: string;
  action: string;
  countLabel: string;
  friends?: string;
  comments: number;
  tone: "red" | "orange" | "slate";
  visual: "mill" | "street" | "park" | "fire" | "football";
};

const moments: Moment[] = [
  {
    id: 1,
    title: "Pre-drinks at The Mill",
    status: "LIVE",
    distance: "0.4 mi",
    area: "Uplands",
    detail: "Table outside, good tunes",
    time: "38m left",
    action: "Tap in",
    countLabel: "12 tapped in",
    friends: "4 friends",
    comments: 3,
    tone: "red",
    visual: "mill",
  },
  {
    id: 2,
    title: "Walking to Wind St",
    status: "SOON",
    distance: "0.8 mi",
    area: "City Centre",
    detail: "Leaving in 20 mins",
    time: "20m",
    action: "Keep me posted",
    countLabel: "7 watching",
    friends: "2 friends likely",
    comments: 1,
    tone: "orange",
    visual: "street",
  },
  {
    id: 3,
    title: "Singleton Park",
    status: "QUIET",
    distance: "1.3 mi",
    area: "Sketty",
    detail: "Quiet spot, open space",
    time: "Low activity",
    action: "Start something",
    countLabel: "2 familiar nearby",
    comments: 0,
    tone: "slate",
    visual: "park",
  },
  {
    id: 4,
    title: "Beach fire near the steps",
    status: "ENDING",
    distance: "1.2 mi",
    area: "Mumbles",
    detail: "Fire dying down",
    time: "6m left",
    action: "Catch it",
    countLabel: "9 left",
    comments: 2,
    tone: "red",
    visual: "fire",
  },
  {
    id: 5,
    title: "5-a-side needs two",
    status: "LIVE",
    distance: "2.1 mi",
    area: "SA1",
    detail: "All levels welcome",
    time: "45m left",
    action: "Tap in",
    countLabel: "6 tapped in",
    comments: 1,
    tone: "red",
    visual: "football",
  },
];

const filters = [
  { label: "All", count: 18 },
  { label: "Live", count: 12 },
  { label: "Soon", count: 4 },
  { label: "Quiet", count: 2 },
  { label: "Ending", count: 3 },
];

const avatarSeeds = ["jess", "cam", "maya"];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Visual({ type }: { type: Moment["visual"] }) {
  const styles = {
    mill: "bg-[radial-gradient(circle_at_22%_28%,rgba(255,176,80,.55),transparent_18%),radial-gradient(circle_at_70%_34%,rgba(210,38,32,.34),transparent_18%),linear-gradient(135deg,#3a2117,#17110d_45%,#080808)]",
    street:
      "bg-[linear-gradient(110deg,transparent_0_30%,rgba(255,255,255,.13)_31%,transparent_33%_58%,rgba(255,255,255,.08)_59%,transparent_62%),radial-gradient(circle_at_57%_23%,rgba(255,199,118,.38),transparent_18%),linear-gradient(135deg,#1c1b19,#111113_48%,#060606)]",
    park: "bg-[radial-gradient(circle_at_72%_31%,rgba(234,220,168,.46),transparent_17%),linear-gradient(145deg,#233420,#111711_52%,#070707)]",
    fire: "bg-[radial-gradient(circle_at_48%_55%,rgba(255,178,57,.85),transparent_9%),radial-gradient(circle_at_47%_63%,rgba(242,28,34,.85),transparent_16%),linear-gradient(145deg,#39100c,#120807_52%,#050505)]",
    football:
      "bg-[radial-gradient(circle_at_36%_45%,rgba(235,239,211,.24),transparent_8%),radial-gradient(circle_at_64%_52%,rgba(235,239,211,.18),transparent_7%),linear-gradient(145deg,#172914,#0d130c_55%,#050505)]",
  };

  return (
    <div
      className={cn(
        "relative h-[82px] w-[154px] shrink-0 overflow-hidden rounded-[9px] border border-white/[0.07]",
        styles[type]
      )}
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,.45),transparent_62%)]" />
      <div className="absolute inset-0 shadow-[inset_0_0_38px_rgba(0,0,0,.55)]" />
    </div>
  );
}

function AvatarStack() {
  return (
    <div className="flex -space-x-2">
      {avatarSeeds.map((seed) => (
        <img
          key={seed}
          src={`https://api.dicebear.com/8.x/notionists/svg?seed=${seed}`}
          alt=""
          className="h-6 w-6 rounded-full border border-[#151515] bg-[#28231f]"
        />
      ))}
    </div>
  );
}

function MomentCard({
  moment,
  active,
}: {
  moment: Moment;
  active?: boolean;
}) {
  const status =
    moment.tone === "orange"
      ? "bg-orange-500 text-orange-400"
      : moment.tone === "slate"
      ? "bg-slate-500 text-slate-300"
      : "bg-[var(--red)] text-[#ff383d]";

  const primary = moment.action === "Tap in" || moment.action === "Catch it";

  return (
    <article
      className={cn(
        "grid grid-cols-[154px_1fr_138px] gap-4 rounded-[12px] border bg-[#111]/82 p-2.5 transition",
        "hover:border-[rgba(242,28,34,.55)] hover:bg-[#151313]",
        active
          ? "border-[var(--red)] shadow-[0_0_0_1px_rgba(242,28,34,.14)]"
          : "border-white/[0.08]"
      )}
    >
      <Visual type={moment.visual} />

      <div className="min-w-0 py-0.5">
        <div className="mb-1.5 flex items-center gap-2">
          <span className={cn("h-2.5 w-2.5 rounded-full", status.split(" ")[0])} />
          <span className={cn("text-[12px] font-extrabold tracking-wide", status.split(" ")[1])}>
            {moment.status}
          </span>
        </div>

        <h3 className="truncate text-[19px] font-bold leading-none tracking-[-0.04em] text-[#f7f0e8]">
          {moment.title}
        </h3>

        <div className="mt-1.5 flex items-center gap-2 text-[13px] text-[#b9afa5]">
          <MapPin className="h-3.5 w-3.5" />
          <span>{moment.distance}</span>
          <span className="text-[#645d56]">•</span>
          <span>{moment.area}</span>
        </div>

        <p className="mt-1 text-[13px] text-[#a79d94]">{moment.detail}</p>

        <div className="mt-2 flex items-center gap-3 text-[12.5px] text-[#a99f95]">
          <AvatarStack />
          <span>{moment.countLabel}</span>
          {moment.friends && (
            <>
              <span className="text-[#5f5851]">•</span>
              <span>{moment.friends}</span>
            </>
          )}
        </div>
      </div>

      <div className="flex flex-col items-end justify-between py-0.5">
        <span
          className={cn(
            "text-[14px] font-bold",
            moment.tone === "orange"
              ? "text-orange-400"
              : moment.tone === "slate"
              ? "text-[#a9b0b8]"
              : "text-[#ff383d]"
          )}
        >
          {moment.time}
        </span>

        <button
          className={cn(
            "rounded-[7px] px-5 py-2 text-[13px] font-bold transition focus:outline-none focus:ring-2 focus:ring-[rgba(242,28,34,.75)]",
            primary
              ? "bg-[var(--red)] text-white hover:bg-[#ff2a30]"
              : "border border-white/[0.11] bg-white/[0.075] text-[#eee7df] hover:bg-white/[0.12]"
          )}
        >
          {moment.action}
        </button>

        <div className="flex items-center gap-1.5 text-[#b1a8a0]">
          <MessageCircle className="h-4 w-4" />
          <span className="text-[12px]">{moment.comments}</span>
        </div>
      </div>
    </article>
  );
}

export default function Page() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_28%,rgba(255,255,255,.055),transparent_27%),radial-gradient(circle_at_65%_18%,rgba(242,28,34,.04),transparent_26%)]" />

      <section className="relative grid h-screen w-full grid-cols-[39%_61%] gap-0 px-9 py-6">
        <aside className="flex h-full items-center pr-12">
          <div className="w-full max-w-[430px]">
            <h1 className="text-[clamp(44px,5.25vw,76px)] font-black leading-[0.9] tracking-[-0.085em] text-[#f8f1ea]">
              Real people.
              <br />
              Right now.
              <br />
              Nearby<span className="text-[var(--red)]">.</span>
            </h1>

            <p className="mt-6 max-w-[370px] text-[18px] leading-[1.45] tracking-[-0.035em] text-[#bbb1a8]">
              See what’s happening around you, who’s going, and where it’s heading.
            </p>

            <div className="mt-6 space-y-3.5 text-[15px] text-[#d6cec6]">
              <div className="flex items-center gap-4">
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/18">
                  <Clock3 className="h-3.5 w-3.5" />
                </span>
                <span>Tap in before it disappears.</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/18">
                  <Users className="h-3.5 w-3.5" />
                </span>
                <span>See who’s already there.</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/18">
                  <Sparkles className="h-3.5 w-3.5" />
                </span>
                <span>Move when it feels right.</span>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-8 rounded-[17px] border border-white/[0.1] bg-[#111]/82 p-5 shadow-[0_30px_90px_rgba(0,0,0,.45),inset_0_1px_0_rgba(255,255,255,.045)]"
            >
              <p className="text-[12px] font-black uppercase tracking-[0.1em] text-[var(--red)]">
                Get early access
              </p>

              <h2 className="mt-2 text-[21px] font-extrabold tracking-[-0.045em] text-[#f8f1ea]">
                Be the first in your area.
              </h2>

              <label className="mt-5 block">
                <span className="mb-2 block text-[12.5px] font-medium text-[#eee6de]">
                  Enter your area
                </span>
                <input
                  placeholder="e.g. Swansea, Uplands, Marina"
                  className="h-10 w-full rounded-[7px] border border-white/[0.12] bg-black/35 px-4 text-[14px] text-[#f8f1ea] outline-none placeholder:text-[#706861] transition focus:border-[rgba(242,28,34,.75)] focus:ring-4 focus:ring-[rgba(242,28,34,.12)]"
                />
              </label>

              <label className="mt-3.5 block">
                <span className="mb-2 block text-[12.5px] font-medium text-[#eee6de]">
                  How should we reach you?
                </span>
                <input
                  placeholder="Email or phone number"
                  className="h-10 w-full rounded-[7px] border border-white/[0.12] bg-black/35 px-4 text-[14px] text-[#f8f1ea] outline-none placeholder:text-[#706861] transition focus:border-[rgba(242,28,34,.75)] focus:ring-4 focus:ring-[rgba(242,28,34,.12)]"
                />
              </label>

              <button
                type="submit"
                className="mt-4 h-11 w-full rounded-[7px] bg-[var(--red)] text-[15px] font-extrabold text-white transition hover:bg-[#ff2b31] focus:outline-none focus:ring-2 focus:ring-[rgba(242,28,34,.75)]"
              >
                {submitted ? "You’re on the list" : "Join local access"}
              </button>

              <div className="mt-3.5 flex items-center gap-2 text-[12.5px] text-[#a79d94]">
                <Lock className="h-3.5 w-3.5" />
                <span>No spam. No public profile.</span>
              </div>

              <p className="mt-6 text-[15px] tracking-[-0.03em] text-[#9f968d]">
                Built for real life. Not just another app.
              </p>
            </form>
          </div>
        </aside>

        <section className="flex h-full items-center">
          <div className="flex h-[calc(100vh-48px)] w-full flex-col rounded-[18px] border border-white/[0.12] bg-[#101010]/86 p-6 shadow-[0_36px_110px_rgba(0,0,0,.5),inset_0_1px_0_rgba(255,255,255,.045)]">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />
                  <h2 className="text-[18px] font-extrabold tracking-[-0.04em]">
                    18 live nearby
                  </h2>
                </div>
                <p className="mt-1 text-[13px] text-[#8d847b]">Updated just now</p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              {filters.map((filter, index) => (
                <button
                  key={filter.label}
                  className={cn(
                    "h-8 rounded-full border px-4 text-[13px] font-bold transition focus:outline-none focus:ring-2 focus:ring-[rgba(242,28,34,.7)]",
                    index === 0
                      ? "border-[var(--red)] bg-[var(--red)] text-white"
                      : "border-white/[0.1] bg-white/[0.055] text-[#dfd6cd] hover:bg-white/[0.095]"
                  )}
                >
                  {filter.label}
                  <span className="ml-2 opacity-80">{filter.count}</span>
                </button>
              ))}
            </div>

            <div className="mt-3 flex min-h-0 flex-1 flex-col gap-2 overflow-hidden">
              {moments.map((moment, index) => (
                <MomentCard key={moment.id} moment={moment} active={index === 0} />
              ))}
            </div>

            <footer className="mt-3 flex items-center justify-between border-t border-white/[0.08] pt-3 text-[12.5px] text-[#9f968d]">
              <div className="flex items-center gap-3">
                <Users className="h-4.5 w-4.5 text-[#b8afa6]" />
                <span>1,241 people live nearby</span>
              </div>

              <div className="flex items-center gap-3">
                <ShieldCheck className="h-4.5 w-4.5 text-[#b8afa6]" />
                <span>Real people. No bots.</span>
              </div>
            </footer>
          </div>
        </section>
      </section>
    </main>
  );
}