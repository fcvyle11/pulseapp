"use client";

import { FormEvent, useMemo, useState } from "react";
import {
  Bell,
  Clock3,
  Eye,
  Lock,
  MapPin,
  MessageCircle,
  MoveRight,
  Radio,
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
  friends: string;
  comments: number;
  tone: "red" | "orange" | "slate";
  photo: string;
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
    photo: "mill",
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
    photo: "street",
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
    friends: "",
    comments: 0,
    tone: "slate",
    photo: "park",
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
    friends: "",
    comments: 2,
    tone: "red",
    photo: "fire",
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
    friends: "",
    comments: 1,
    tone: "red",
    photo: "football",
  },
];

const filters = [
  { label: "All", count: 18 },
  { label: "Live", count: 12 },
  { label: "Soon", count: 4 },
  { label: "Quiet", count: 2 },
  { label: "Ending", count: 3 },
];

const avatars = [
  "https://api.dicebear.com/8.x/notionists/svg?seed=jess",
  "https://api.dicebear.com/8.x/notionists/svg?seed=cam",
  "https://api.dicebear.com/8.x/notionists/svg?seed=maya",
];

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function PhotoBlock({ type }: { type: string }) {
  const photoClass =
    type === "mill"
      ? "from-[#3a1d10] via-[#17110d] to-[#070707] before:bg-[radial-gradient(circle_at_30%_22%,rgba(255,177,89,.45),transparent_22%),radial-gradient(circle_at_78%_30%,rgba(255,80,58,.22),transparent_24%),linear-gradient(145deg,rgba(255,255,255,.12),transparent_40%)]"
      : type === "street"
      ? "from-[#1d1b18] via-[#101012] to-[#050505] before:bg-[linear-gradient(110deg,transparent_0_28%,rgba(255,255,255,.14)_29%,transparent_31%_52%,rgba(255,255,255,.09)_53%,transparent_56%),radial-gradient(circle_at_55%_25%,rgba(255,201,125,.28),transparent_20%)]"
      : type === "park"
      ? "from-[#23311f] via-[#111714] to-[#050505] before:bg-[radial-gradient(circle_at_72%_28%,rgba(238,215,166,.38),transparent_22%),linear-gradient(18deg,rgba(93,122,72,.38),transparent_48%)]"
      : type === "fire"
      ? "from-[#42120b] via-[#120807] to-[#030303] before:bg-[radial-gradient(circle_at_46%_60%,rgba(255,38,20,.72),transparent_19%),radial-gradient(circle_at_50%_46%,rgba(255,176,67,.8),transparent_13%)]"
      : "from-[#172615] via-[#0d120c] to-[#040404] before:bg-[linear-gradient(8deg,rgba(115,167,72,.28),transparent_42%),radial-gradient(circle_at_35%_35%,rgba(255,255,255,.16),transparent_8%),radial-gradient(circle_at_65%_52%,rgba(255,255,255,.12),transparent_7%)]";

  return (
    <div
      className={cx(
        "relative h-[118px] w-[188px] shrink-0 overflow-hidden rounded-[11px] bg-gradient-to-br shadow-[inset_0_0_0_1px_rgba(255,255,255,.06)]",
        "before:absolute before:inset-0 before:content-['']",
        "after:absolute after:inset-0 after:bg-[linear-gradient(to_top,rgba(0,0,0,.34),transparent_55%)] after:content-['']",
        photoClass
      )}
    />
  );
}

function AvatarStack() {
  return (
    <div className="flex -space-x-2">
      {avatars.map((avatar, index) => (
        <div
          key={avatar}
          className="h-7 w-7 overflow-hidden rounded-full border border-[#151515] bg-[#2a2520]"
          style={{ zIndex: avatars.length - index }}
        >
          <img src={avatar} alt="" className="h-full w-full object-cover" />
        </div>
      ))}
    </div>
  );
}

function MomentCard({ moment, active }: { moment: Moment; active?: boolean }) {
  const statusColor =
    moment.tone === "orange"
      ? "bg-orange-500 text-orange-400"
      : moment.tone === "slate"
      ? "bg-slate-500 text-slate-300"
      : "bg-[#ff252a] text-[#ff363b]";

  const actionIsPrimary = moment.action === "Tap in" || moment.action === "Catch it";

  return (
    <article
      className={cx(
        "group grid grid-cols-[188px_1fr_auto] gap-6 rounded-[13px] border bg-[#111111]/76 p-3 transition",
        "hover:border-[#ff252a]/55 hover:bg-[#151313]",
        active
          ? "border-[#ff252a] shadow-[0_0_0_1px_rgba(255,37,42,.2),0_18px_60px_rgba(0,0,0,.36)]"
          : "border-white/8"
      )}
    >
      <PhotoBlock type={moment.photo} />

      <div className="min-w-0 py-1">
        <div className="mb-2 flex items-center gap-2">
          <span className={cx("h-2.5 w-2.5 rounded-full", statusColor.split(" ")[0])} />
          <span className={cx("text-[13px] font-bold tracking-wide", statusColor.split(" ")[1])}>
            {moment.status}
          </span>
        </div>

        <h3 className="truncate text-[22px] font-semibold leading-none tracking-[-0.03em] text-[#f6f0e8]">
          {moment.title}
        </h3>

        <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[14px] text-[#b8afa6]">
          <MapPin className="h-3.5 w-3.5" />
          <span>{moment.distance}</span>
          <span className="text-[#6e675f]">•</span>
          <span>{moment.area}</span>
        </div>

        <p className="mt-1 text-[14px] text-[#a69d94]">{moment.detail}</p>

        <div className="mt-3 flex items-center gap-3 text-[13px] text-[#aaa198]">
          <AvatarStack />
          <span>{moment.countLabel}</span>
          {moment.friends ? (
            <>
              <span className="text-[#625b54]">•</span>
              <span>{moment.friends}</span>
            </>
          ) : null}
        </div>
      </div>

      <div className="flex min-w-[150px] flex-col items-end justify-between py-1">
        <p
          className={cx(
            "text-[15px] font-semibold",
            moment.tone === "orange"
              ? "text-orange-400"
              : moment.tone === "slate"
              ? "text-[#a7aeb8]"
              : "text-[#ff363b]"
          )}
        >
          {moment.time}
        </p>

        <button
          className={cx(
            "rounded-[7px] px-6 py-2.5 text-[14px] font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#ff252a]/70 focus:ring-offset-2 focus:ring-offset-black",
            actionIsPrimary
              ? "bg-[#ed161d] text-white shadow-[inset_0_1px_0_rgba(255,255,255,.18)] hover:bg-[#ff252a]"
              : "border border-white/8 bg-white/[.07] text-[#eee6de] hover:bg-white/[.11]"
          )}
        >
          {moment.action}
        </button>

        <div className="flex items-center gap-1.5 text-[#b3aaa1]">
          <MessageCircle className="h-4 w-4" />
          <span className="text-[13px]">{moment.comments}</span>
        </div>
      </div>
    </article>
  );
}

export default function Page() {
  const [area, setArea] = useState("");
  const [contact, setContact] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const liveCount = useMemo(() => moments.filter((moment) => moment.status === "LIVE").length, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#070707] text-[#f6f0e8]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,255,255,.045),transparent_28%),linear-gradient(90deg,rgba(255,255,255,.035),transparent_22%,transparent_78%,rgba(255,255,255,.035))]" />
      <div className="pointer-events-none fixed inset-x-0 bottom-0 h-px bg-[#211b18]" />

      <section className="relative mx-auto grid min-h-screen max-w-[1440px] grid-cols-1 gap-10 px-5 py-8 md:px-9 lg:grid-cols-[420px_1fr] lg:gap-14 lg:py-4">
        <aside className="flex flex-col justify-center lg:min-h-screen">
          <div className="max-w-[520px]">
            <h1 className="max-w-[420px] text-[52px] font-black leading-[.96] tracking-[-0.07em] text-[#f7f1ea] md:text-[62px]">
              Real people.
              <br />
              Right now. Nearby<span className="text-[#ff252a]">.</span>
            </h1>

            <p className="mt-7 max-w-[390px] text-[20px] leading-[1.45] tracking-[-0.025em] text-[#bdb4aa]">
              See what’s happening around you, who’s going, and where it’s heading.
            </p>

            <div className="mt-7 space-y-4 text-[16px] text-[#d7cec5]">
              <div className="flex items-center gap-4">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/18 text-[#f3eadf]">
                  <Clock3 className="h-4 w-4" />
                </span>
                <span>Tap in before it disappears.</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/18 text-[#f3eadf]">
                  <Users className="h-4 w-4" />
                </span>
                <span>See who’s already there.</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/18 text-[#f3eadf]">
                  <Sparkles className="h-4 w-4" />
                </span>
                <span>Move when it feels right.</span>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-8 rounded-[17px] border border-white/10 bg-[#111111]/74 p-6 shadow-[0_28px_80px_rgba(0,0,0,.34),inset_0_1px_0_rgba(255,255,255,.04)]"
            >
              <p className="mb-2 text-[13px] font-black uppercase tracking-[.08em] text-[#ff252a]">
                Get early access
              </p>

              <h2 className="text-[24px] font-bold tracking-[-0.04em] text-[#f6f0e8]">
                Be the first in your area.
              </h2>

              <div className="mt-5 space-y-4">
                <label className="block">
                  <span className="mb-2 block text-[13px] font-medium text-[#eee6de]">
                    Enter your area
                  </span>
                  <input
                    value={area}
                    onChange={(event) => setArea(event.target.value)}
                    placeholder="e.g. Swansea, Uplands, Marina"
                    className="h-11 w-full rounded-[8px] border border-white/12 bg-black/40 px-4 text-[15px] text-[#f6f0e8] outline-none transition placeholder:text-[#6f675f] focus:border-[#ff252a]/75 focus:ring-4 focus:ring-[#ff252a]/10"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-[13px] font-medium text-[#eee6de]">
                    How should we reach you?
                  </span>
                  <input
                    value={contact}
                    onChange={(event) => setContact(event.target.value)}
                    placeholder="Email or phone number"
                    className="h-11 w-full rounded-[8px] border border-white/12 bg-black/40 px-4 text-[15px] text-[#f6f0e8] outline-none transition placeholder:text-[#6f675f] focus:border-[#ff252a]/75 focus:ring-4 focus:ring-[#ff252a]/10"
                  />
                </label>

                <button
                  type="submit"
                  className="flex h-12 w-full items-center justify-center rounded-[8px] bg-[#ed161d] text-[16px] font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,.18)] transition hover:bg-[#ff252a] focus:outline-none focus:ring-2 focus:ring-[#ff252a]/70 focus:ring-offset-2 focus:ring-offset-black"
                >
                  {submitted ? "You’re on the list" : "Join local access"}
                </button>
              </div>

              <div className="mt-4 flex items-center gap-2 text-[13px] text-[#a9a096]">
                <Lock className="h-3.5 w-3.5" />
                <span>No spam. No public profile.</span>
              </div>

              <p className="mt-7 text-[16px] tracking-[-0.02em] text-[#9f968d]">
                Built for real life. Not just another app.
              </p>
            </form>
          </div>
        </aside>

        <section className="flex items-center lg:min-h-screen">
          <div className="w-full rounded-[18px] border border-white/12 bg-[#101010]/78 p-7 shadow-[0_36px_100px_rgba(0,0,0,.42),inset_0_1px_0_rgba(255,255,255,.04)]">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
              <div>
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />
                  <h2 className="text-[20px] font-bold tracking-[-0.035em]">
                    18 live nearby
                  </h2>
                </div>
                <p className="mt-1 text-[14px] text-[#8f867d]">Updated just now</p>
              </div>

              <div className="hidden items-center gap-2 text-[13px] text-[#9f968d] md:flex">
                <Radio className="h-4 w-4 text-[#ff252a]" />
                <span>{liveCount} live signals refreshing</span>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              {filters.map((filter, index) => (
                <button
                  key={filter.label}
                  className={cx(
                    "h-9 rounded-full border px-5 text-[14px] font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#ff252a]/70 focus:ring-offset-2 focus:ring-offset-black",
                    index === 0
                      ? "border-[#ff252a] bg-[#ed161d] text-white"
                      : "border-white/10 bg-white/[.055] text-[#dfd6cd] hover:bg-white/[.09]"
                  )}
                >
                  {filter.label}
                  <span className="ml-2 opacity-80">{filter.count}</span>
                </button>
              ))}
            </div>

            <div className="mt-4 space-y-1.5">
              {moments.map((moment, index) => (
                <MomentCard key={moment.id} moment={moment} active={index === 0} />
              ))}
            </div>

            <footer className="mt-0 flex flex-col gap-3 border-t border-white/8 px-1 pt-4 text-[13px] text-[#9f968d] md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-[#b9b0a7]" />
                <span>1,241 people live nearby</span>
              </div>

              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-[#b9b0a7]" />
                <span>Real people. No bots.</span>
              </div>
            </footer>
          </div>
        </section>
      </section>

      <div className="fixed right-5 top-5 hidden items-center gap-4 text-[#d9d0c7] md:flex">
        <button
          aria-label="Notifications"
          className="relative rounded-full p-2 transition hover:bg-white/[.07] focus:outline-none focus:ring-2 focus:ring-[#ff252a]/70"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-[#ff252a]" />
        </button>
        <button className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-4 py-2 text-[13px] font-semibold transition hover:bg-white/[.08] focus:outline-none focus:ring-2 focus:ring-[#ff252a]/70">
          Join Pulse
          <MoveRight className="h-4 w-4" />
        </button>
      </div>
    </main>
  );
}