import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  Activity,
  ArrowUpRight,
  Check,
  ChevronRight,
  CircleDot,
  Copy,
  Cpu,
  ExternalLink,
  GitBranch,
  Layers,
  Mail,
  MapPin,
  Menu,
  Phone,
  Rocket,
  Search,
  Server,
  Shield,
  Terminal,
  X,
  Zap,
} from "lucide-react";

function GitHubIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}
import DataLines from "./components/DataLines";
import PhoneFrame from "./components/PhoneFrame";
import {
  ANDROID_EXPERTISE,
  APP_GRID,
  ARCHITECTURE_LAYERS,
  CERTIFICATIONS,
  CODE_SNIPPET,
  CURRENT_FOCUS,
  DEPLOYMENT_STEPS,
  EMAILS,
  FEATURED_APPS,
  GITHUB_PAGES,
  IMPACT_METRICS,
  OPEN_SOURCE,
  PROFILE,
  SOCIALS,
  TOP_REPOS,
  WEB_EXPERTISE,
} from "./data";

type PanelProps = {
  title: string;
  code?: string;
  children: ReactNode;
  className?: string;
  action?: ReactNode;
};

function Panel({ title, code, children, className = "", action }: PanelProps) {
  return (
    <section className={`panel panel-hover rounded-2xl ${className}`}>
      <header className="flex items-center justify-between gap-3 border-b border-white/[0.05] px-4 py-3 sm:px-5">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#4f8cff]" />
          <h2 className="mono truncate text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-300">
            {title}
          </h2>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          {action}
          {code && (
            <span className="mono text-[10px] tracking-widest text-zinc-600">{code}</span>
          )}
        </div>
      </header>
      <div className="relative">{children}</div>
    </section>
  );
}

function LevelBar({ value, accent = "#3ddc84" }: { value: number; accent?: string }) {
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
      <div
        className="h-full rounded-full transition-all duration-700"
        style={{
          width: `${value}%`,
          background: `linear-gradient(90deg, ${accent}, #4f8cff)`,
        }}
      />
    </div>
  );
}

function copyText(text: string) {
  return navigator.clipboard.writeText(text);
}

export default function App() {
  const [clock, setClock] = useState(() => new Date());
  const [mobileNav, setMobileNav] = useState(false);
  const [cmdOpen, setCmdOpen] = useState(false);
  const [cmdQ, setCmdQ] = useState("");
  const [activeApp, setActiveApp] = useState(FEATURED_APPS[0].id);
  const [copied, setCopied] = useState<string | null>(null);
  const [snippetCopied, setSnippetCopied] = useState(false);

  const featured = useMemo(
    () => FEATURED_APPS.find((a) => a.id === activeApp) ?? FEATURED_APPS[0],
    [activeApp]
  );

  useEffect(() => {
    const t = window.setInterval(() => setClock(new Date()), 1000);
    return () => window.clearInterval(t);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCmdOpen((v) => !v);
      }
      if (e.key === "Escape") setCmdOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const doCopy = async (text: string) => {
    await copyText(text);
    setCopied(text);
    window.setTimeout(() => setCopied(null), 1600);
  };

  const downloadResume = () => {
    const body = [
      `${PROFILE.name} — ${PROFILE.role}`,
      PROFILE.location,
      `Phone: ${PROFILE.phones.join(" · ")}`,
      `Email: ${PROFILE.primaryEmail}`,
      `GitHub: ${PROFILE.github}`,
      "",
      "CURRENT FOCUS",
      ...CURRENT_FOCUS.map((f) => `• ${f.title} (${f.progress}%) — ${f.detail}`),
      "",
      "TOP REPOSITORIES",
      ...TOP_REPOS.map((r) => `• ${r.name} — ${r.desc} — ${r.url}`),
      "",
      "OPEN SOURCE",
      ...OPEN_SOURCE.map((o) => `• ${o.label}: ${o.value}`),
    ].join("\n");
    const url = URL.createObjectURL(new Blob([body], { type: "text/plain" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = "Moe_Kyaw_Aung_Command_Center.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  const commands = [
    { label: "Jump to Current Focus", run: () => document.getElementById("focus")?.scrollIntoView({ behavior: "smooth" }) },
    { label: "Jump to Featured Apps", run: () => document.getElementById("apps")?.scrollIntoView({ behavior: "smooth" }) },
    { label: "Jump to Repositories", run: () => document.getElementById("repos")?.scrollIntoView({ behavior: "smooth" }) },
    { label: "Jump to Contact", run: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }) },
    { label: "Open GitHub", run: () => window.open(PROFILE.github, "_blank") },
    { label: "Download profile brief", run: downloadResume },
    { label: `Email ${PROFILE.primaryEmail}`, run: () => window.open(`mailto:${PROFILE.primaryEmail}`) },
    ...TOP_REPOS.map((r) => ({ label: `Repo · ${r.name}`, run: () => window.open(r.url, "_blank") })),
  ].filter((c) => c.label.toLowerCase().includes(cmdQ.toLowerCase()));

  const timeStr = clock.toLocaleTimeString("en-GB", { hour12: false });
  const dateStr = clock.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "2-digit",
    month: "short",
  });

  const nav = [
    { id: "focus", label: "Focus" },
    { id: "expertise", label: "Expertise" },
    { id: "repos", label: "Repos" },
    { id: "apps", label: "Apps" },
    { id: "deploy", label: "Deploy" },
    { id: "certs", label: "Certs" },
    { id: "oss", label: "Open Source" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0A0B0F] text-[#E8EAEF]">
      {/* ambient background */}
      <div className="pointer-events-none fixed inset-0 grid-bg opacity-40" />
      <div className="pointer-events-none fixed -left-32 top-0 h-[420px] w-[420px] rounded-full bg-[#3ddc84]/[0.06] blur-[100px]" />
      <div className="pointer-events-none fixed -right-24 top-40 h-[380px] w-[380px] rounded-full bg-[#4f8cff]/[0.08] blur-[110px]" />

      {/* ── top bar ── */}
      <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#0A0B0F]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-[1280px] items-center gap-3 px-4 sm:px-6">
          <div className="flex min-w-0 items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
              <Terminal className="h-4 w-4 text-[#3ddc84]" />
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold tracking-tight">Command Center</p>
              <p className="mono hidden text-[10px] tracking-widest text-zinc-500 sm:block">
                MKA · DEV OPS
              </p>
            </div>
          </div>

          <nav className="ml-4 hidden items-center gap-0.5 lg:flex">
            {nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="rounded-md px-2.5 py-1.5 text-[12px] font-medium text-zinc-400 transition hover:bg-white/[0.04] hover:text-white"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            {/* system status pill */}
            <div className="hidden items-center gap-2 rounded-full border border-[#3ddc84]/25 bg-[#3ddc84]/10 px-3 py-1.5 sm:flex">
              <span className="animate-pulse-dot h-2 w-2 rounded-full bg-[#3ddc84]" />
              <span className="mono text-[10px] font-medium tracking-wide text-[#3ddc84]">
                SYSTEM STATUS: AVAILABLE
              </span>
            </div>

            <button
              onClick={() => setCmdOpen(true)}
              className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-xs text-zinc-400 transition hover:border-white/20 hover:text-white"
              aria-label="Open command palette"
            >
              <Search className="h-3.5 w-3.5" />
              <span className="hidden md:inline">Search</span>
              <kbd className="mono hidden rounded bg-white/10 px-1.5 py-0.5 text-[9px] md:inline">⌘K</kbd>
            </button>

            <button
              className="rounded-lg border border-white/10 p-2 text-zinc-400 lg:hidden"
              onClick={() => setMobileNav((v) => !v)}
              aria-label="Menu"
            >
              {mobileNav ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {mobileNav && (
          <div className="border-t border-white/[0.06] px-4 py-3 lg:hidden">
            <div className="mb-2 flex items-center gap-2 rounded-full border border-[#3ddc84]/25 bg-[#3ddc84]/10 px-3 py-1.5 sm:hidden">
              <span className="animate-pulse-dot h-2 w-2 rounded-full bg-[#3ddc84]" />
              <span className="mono text-[10px] text-[#3ddc84]">AVAILABLE FOR OPPORTUNITIES</span>
            </div>
            <div className="grid grid-cols-2 gap-1">
              {nav.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={() => setMobileNav(false)}
                  className="rounded-lg px-3 py-2 text-sm text-zinc-300 hover:bg-white/[0.04]"
                >
                  {n.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="relative z-10 mx-auto max-w-[1280px] space-y-5 px-4 py-6 sm:px-6 sm:py-8">
        {/* ── hero / identity strip ── */}
        <section className="panel relative overflow-hidden rounded-2xl animate-soft-rise">
          <DataLines />
          <div className="relative grid gap-6 p-5 sm:p-7 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#3ddc84]/30 bg-[#3ddc84]/10 px-3 py-1">
                  <span className="animate-pulse-dot h-2 w-2 rounded-full bg-[#3ddc84]" />
                  <span className="mono text-[10px] font-semibold tracking-[0.14em] text-[#3ddc84]">
                    SYSTEM STATUS: AVAILABLE FOR OPPORTUNITIES
                  </span>
                </span>
                <span className="mono rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] text-zinc-500">
                  {dateStr} · {timeStr} UTC+6:30
                </span>
              </div>

              <div className="flex items-start gap-4">
                <img
                  src={PROFILE.avatar}
                  alt={PROFILE.name}
                  className="h-16 w-16 rounded-2xl border border-white/10 object-cover shadow-lg sm:h-20 sm:w-20"
                />
                <div>
                  <p className="mono text-[11px] tracking-[0.2em] text-zinc-500">OPERATOR PROFILE</p>
                  <h1 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {PROFILE.name}
                  </h1>
                  <p className="font-mm text-sm text-zinc-400">{PROFILE.mmName}</p>
                  <p className="mt-1.5 text-sm font-medium text-[#4f8cff]">{PROFILE.role}</p>
                </div>
              </div>

              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-zinc-400">
                I design and ship production Android systems — offline-first POS platforms,
                media pipelines, and clean Compose architectures — plus full-stack web tooling
                when the product needs a control plane.
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-zinc-500">
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/8 bg-white/[0.03] px-2.5 py-1.5">
                  <MapPin className="h-3.5 w-3.5 text-[#4f8cff]" />
                  {PROFILE.location}
                </span>
                {PROFILE.languages.map((l) => (
                  <span
                    key={l}
                    className="rounded-lg border border-white/8 bg-white/[0.03] px-2.5 py-1.5"
                  >
                    {l}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2.5">
                <a
                  href="#apps"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-[#0A0B0F] transition hover:bg-zinc-200"
                >
                  View featured apps
                  <ChevronRight className="h-4 w-4" />
                </a>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
                >
                  <GitHubIcon className="h-4 w-4 text-[#3ddc84]" />
                  GitHub
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#4f8cff]/30 bg-[#4f8cff]/10 px-4 py-2.5 text-sm font-semibold text-[#4f8cff] transition hover:bg-[#4f8cff]/20"
                >
                  <Mail className="h-4 w-4" />
                  Contact
                </a>
                <button
                  onClick={downloadResume}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-medium text-zinc-400 transition hover:text-white"
                >
                  Download brief
                </button>
              </div>
            </div>

            {/* impact metrics */}
            <div className="grid grid-cols-2 gap-3">
              {IMPACT_METRICS.map((m, i) => (
                <div
                  key={m.label}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-4 animate-soft-rise"
                  style={{ animationDelay: `${i * 70}ms` }}
                >
                  <p className="mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                    {m.label}
                  </p>
                  <p className="mt-1 text-3xl font-bold tracking-tight text-white">{m.value}</p>
                  <p className="mt-1 text-xs text-zinc-500">{m.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ticker */}
        <div className="overflow-hidden rounded-xl border border-white/[0.05] bg-white/[0.02] py-2">
          <div className="animate-ticker flex w-max gap-8 whitespace-nowrap mono text-[11px] tracking-wide text-zinc-500">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex gap-8 px-4">
                <span>
                  STATUS <span className="text-[#3ddc84]">AVAILABLE</span>
                </span>
                <span>
                  FOCUS <span className="text-zinc-300">POS Pro Max · Media3 · Social Hub</span>
                </span>
                <span>
                  STACK <span className="text-zinc-300">Kotlin · Compose · React · Room</span>
                </span>
                <span>
                  DEPLOY <span className="text-zinc-300">43 pages · 38 lovable · 21 repos</span>
                </span>
                <span>
                  CONTACT <span className="text-zinc-300">{PROFILE.primaryEmail}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── main dashboard grid ── */}
        <div className="grid gap-5 lg:grid-cols-12">
          {/* Current Focus */}
          <div id="focus" className="lg:col-span-5">
            <Panel title="Current Focus" code="FOCUS-03">
              <div className="space-y-3 p-4 sm:p-5">
                {CURRENT_FOCUS.map((f) => (
                  <div
                    key={f.title}
                    className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-3.5"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-white">{f.title}</p>
                        <p className="mt-1 text-xs leading-relaxed text-zinc-500">{f.detail}</p>
                      </div>
                      <span className="mono shrink-0 rounded border border-[#3ddc84]/25 bg-[#3ddc84]/10 px-1.5 py-0.5 text-[9px] tracking-wider text-[#3ddc84]">
                        {f.tag}
                      </span>
                    </div>
                    <div className="mt-3 flex items-center gap-3">
                      <LevelBar value={f.progress} />
                      <span className="mono tabular-nums text-[11px] text-zinc-400">
                        {f.progress}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Panel>
          </div>

          {/* Android Expertise */}
          <div id="expertise" className="lg:col-span-7">
            <Panel title="Android Expertise" code="SKILL-AND">
              <div className="grid gap-5 p-4 sm:grid-cols-2 sm:p-5">
                <div>
                  <p className="mono mb-3 text-[10px] tracking-[0.16em] text-zinc-500">
                    NATIVE STACK
                  </p>
                  <div className="space-y-3">
                    {ANDROID_EXPERTISE.map((s) => (
                      <div key={s.name}>
                        <div className="mb-1 flex justify-between text-xs">
                          <span className="font-medium text-zinc-300">{s.name}</span>
                          <span className="mono text-zinc-500">{s.level}%</span>
                        </div>
                        <LevelBar value={s.level} accent="#3ddc84" />
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mono mb-3 text-[10px] tracking-[0.16em] text-zinc-500">
                    FULL-STACK COMPANION
                  </p>
                  <div className="space-y-3">
                    {WEB_EXPERTISE.map((s) => (
                      <div key={s.name}>
                        <div className="mb-1 flex justify-between text-xs">
                          <span className="font-medium text-zinc-300">{s.name}</span>
                          <span className="mono text-zinc-500">{s.level}%</span>
                        </div>
                        <LevelBar value={s.level} accent="#4f8cff" />
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-xl border border-white/[0.05] bg-white/[0.02] p-3">
                    <p className="mono mb-2 flex items-center gap-1.5 text-[10px] tracking-[0.14em] text-zinc-500">
                      <Layers className="h-3 w-3" /> ARCHITECTURE LAYERS
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {ARCHITECTURE_LAYERS.map((layer) => (
                        <div
                          key={layer.name}
                          className="rounded-lg border border-white/[0.05] bg-[#0A0B0F]/60 p-2"
                        >
                          <p className="mono text-[10px] font-semibold text-[#4f8cff]">
                            {layer.name}
                          </p>
                          <ul className="mt-1 space-y-0.5">
                            {layer.items.map((it) => (
                              <li key={it} className="text-[10px] text-zinc-500">
                                {it}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Panel>
          </div>

          {/* Top Repositories */}
          <div id="repos" className="lg:col-span-6">
            <Panel
              title="Top Repositories"
              code="REPO-06"
              action={
                <a
                  href={PROFILE.githubOrg}
                  target="_blank"
                  rel="noreferrer"
                  className="mono text-[10px] text-[#4f8cff] hover:underline"
                >
                  org →
                </a>
              }
            >
              <div className="divide-y divide-white/[0.04]">
                {TOP_REPOS.map((r) => (
                  <a
                    key={r.name}
                    href={r.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-start gap-3 px-4 py-3.5 transition hover:bg-white/[0.03] sm:px-5"
                  >
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/8 bg-white/[0.03]">
                      <GitBranch className="h-3.5 w-3.5 text-zinc-400 group-hover:text-[#3ddc84]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="truncate text-sm font-semibold text-white group-hover:text-[#4f8cff]">
                          {r.name}
                        </p>
                        <span className="mono rounded border border-white/8 px-1.5 py-0.5 text-[9px] text-zinc-500">
                          {r.lang}
                        </span>
                      </div>
                      <p className="mt-0.5 line-clamp-1 text-xs text-zinc-500">{r.desc}</p>
                    </div>
                    <div className="mono shrink-0 text-[11px] text-zinc-600 group-hover:text-zinc-400">
                      ★ {r.stars}
                    </div>
                  </a>
                ))}
              </div>
            </Panel>
          </div>

          {/* Code snippet + architecture visual */}
          <div className="lg:col-span-6">
            <Panel
              title="Code Snapshot · Offline Sale Commit"
              code="SNIP-KT"
              action={
                <button
                  onClick={async () => {
                    await copyText(CODE_SNIPPET);
                    setSnippetCopied(true);
                    window.setTimeout(() => setSnippetCopied(false), 1500);
                  }}
                  className="mono inline-flex items-center gap-1 text-[10px] text-zinc-500 hover:text-white"
                >
                  {snippetCopied ? <Check className="h-3 w-3 text-[#3ddc84]" /> : <Copy className="h-3 w-3" />}
                  {snippetCopied ? "copied" : "copy"}
                </button>
              }
            >
              <div className="relative overflow-hidden">
                <DataLines className="opacity-20" />
                <pre className="mono relative overflow-x-auto p-4 text-[11px] leading-relaxed text-zinc-300 sm:p-5 sm:text-[12px]">
                  <code>{CODE_SNIPPET}</code>
                </pre>
                <div className="border-t border-white/[0.05] px-4 py-3 sm:px-5">
                  <p className="text-xs leading-relaxed text-zinc-500">
                    Pattern used across POS Full → Pro Max: transactional Room write, inventory
                    decrement, receipt side-effect, and durable sync queue enqueue — all on
                    <span className="text-zinc-300"> Dispatchers.IO</span>.
                  </p>
                </div>
              </div>
            </Panel>
          </div>
        </div>

        {/* ── Featured Apps ── */}
        <section id="apps">
          <Panel title="Featured Apps" code="APP-04">
            <div className="grid gap-6 p-4 lg:grid-cols-[0.95fr_1.05fr] lg:p-6">
              <div>
                <div className="mb-4 flex flex-wrap gap-2">
                  {FEATURED_APPS.map((a) => (
                    <button
                      key={a.id}
                      onClick={() => setActiveApp(a.id)}
                      className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                        activeApp === a.id
                          ? "bg-[#3ddc84] text-black"
                          : "border border-white/10 bg-white/[0.03] text-zinc-400 hover:text-white"
                      }`}
                    >
                      {a.emoji} {a.name}
                    </button>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-white">{featured.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{featured.blurb}</p>

                <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-[#3ddc84]/25 bg-[#3ddc84]/10 px-3 py-2">
                  <Zap className="h-4 w-4 text-[#3ddc84]" />
                  <div>
                    <p className="mono text-[9px] tracking-widest text-[#3ddc84]/80">IMPACT</p>
                    <p className="text-sm font-semibold text-white">{featured.impact}</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {featured.stack.map((t) => (
                    <span
                      key={t}
                      className="mono rounded border border-white/8 bg-white/[0.03] px-2 py-1 text-[10px] text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {featured.repo && (
                    <a
                      href={featured.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-white hover:bg-white/[0.08]"
                    >
                      <GitHubIcon className="h-3.5 w-3.5" /> Source
                    </a>
                  )}
                  {"live" in featured && featured.live && (
                    <a
                      href={featured.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-[#4f8cff] px-3 py-2 text-xs font-semibold text-white hover:bg-[#3b78f0]"
                    >
                      <ExternalLink className="h-3.5 w-3.5" /> Live build
                    </a>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-center py-2">
                <PhoneFrame
                  src={featured.mockup}
                  type={featured.type}
                  caption={featured.name}
                />
              </div>
            </div>

            {/* full app grid */}
            <div className="border-t border-white/[0.05] p-4 sm:p-5">
              <p className="mono mb-3 text-[10px] tracking-[0.16em] text-zinc-500">
                APP COLLECTION · {APP_GRID.length} MODULES
              </p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8">
                {APP_GRID.map((app) => (
                  <a
                    key={app.name}
                    href={app.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-xl border border-white/[0.05] bg-white/[0.02] p-3 text-center transition hover:border-[#4f8cff]/30 hover:bg-white/[0.04]"
                  >
                    <span className="text-lg">{app.emoji}</span>
                    <p className="mt-1.5 truncate text-[11px] font-semibold text-zinc-300 group-hover:text-white">
                      {app.name}
                    </p>
                    <p className="mono mt-1 text-[9px] text-zinc-600">{app.status}</p>
                  </a>
                ))}
              </div>
            </div>
          </Panel>
        </section>

        {/* ── Deploy + Certs ── */}
        <div className="grid gap-5 lg:grid-cols-2">
          <div id="deploy">
            <Panel title="Deployment Workflow" code="CI-04">
              <div className="relative p-4 sm:p-5">
                <DataLines className="opacity-25" />
                <ol className="relative space-y-0">
                  {DEPLOYMENT_STEPS.map((step, i) => (
                    <li key={step.id} className="relative flex gap-4 pb-6 last:pb-0">
                      {i < DEPLOYMENT_STEPS.length - 1 && (
                        <span className="absolute left-[15px] top-8 h-[calc(100%-20px)] w-px bg-gradient-to-b from-[#4f8cff]/50 to-white/5" />
                      )}
                      <span className="mono relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#4f8cff]/40 bg-[#0A0B0F] text-[11px] font-semibold text-[#4f8cff]">
                        {step.id}
                      </span>
                      <div className="pt-1">
                        <p className="text-sm font-semibold text-white">{step.title}</p>
                        <p className="mt-0.5 text-xs text-zinc-500">{step.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <div className="mt-2 flex flex-wrap gap-2 border-t border-white/[0.05] pt-4">
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/8 bg-white/[0.03] px-2.5 py-1.5 text-[11px] text-zinc-400">
                    <Server className="h-3.5 w-3.5 text-[#3ddc84]" /> GitHub Pages
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/8 bg-white/[0.03] px-2.5 py-1.5 text-[11px] text-zinc-400">
                    <Rocket className="h-3.5 w-3.5 text-[#4f8cff]" /> Lovable preview
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/8 bg-white/[0.03] px-2.5 py-1.5 text-[11px] text-zinc-400">
                    <Cpu className="h-3.5 w-3.5 text-[#f0b429]" /> Gradle / Vite CI
                  </span>
                </div>
              </div>
            </Panel>
          </div>

          <div id="certs">
            <Panel title="Certifications & Practice Areas" code="CERT-06">
              <div className="grid gap-2 p-4 sm:grid-cols-2 sm:p-5">
                {CERTIFICATIONS.map((c) => (
                  <div
                    key={c.title}
                    className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-3.5"
                  >
                    <div className="flex items-start gap-2.5">
                      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[#3ddc84]/20 bg-[#3ddc84]/10">
                        <Shield className="h-3.5 w-3.5 text-[#3ddc84]" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[13px] font-semibold leading-snug text-white">
                          {c.title}
                        </p>
                        <p className="mt-1 text-[11px] text-zinc-500">{c.issuer}</p>
                        <p className="mono mt-1 text-[10px] text-zinc-600">{c.year}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Panel>
          </div>
        </div>

        {/* ── Open Source ── */}
        <section id="oss">
          <Panel title="Open Source & Public Surface" code="OSS-04">
            <div className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-4 sm:p-5">
              {OPEN_SOURCE.map((o) => (
                <a
                  key={o.label}
                  href={o.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-xl border border-white/[0.05] bg-white/[0.02] p-4 transition hover:border-[#4f8cff]/30 hover:bg-white/[0.04]"
                >
                  <p className="text-3xl font-bold tracking-tight text-white group-hover:text-[#4f8cff]">
                    {o.value}
                  </p>
                  <p className="mt-1 text-xs text-zinc-500">{o.label}</p>
                  <p className="mono mt-3 inline-flex items-center gap-1 text-[10px] text-zinc-600 group-hover:text-[#3ddc84]">
                    open <ArrowUpRight className="h-3 w-3" />
                  </p>
                </a>
              ))}
            </div>

            <div className="border-t border-white/[0.05] px-4 py-4 sm:px-5">
              <p className="mono mb-2 text-[10px] tracking-[0.16em] text-zinc-500">
                SAMPLE GITHUB PAGES
              </p>
              <div className="flex flex-wrap gap-1.5">
                {GITHUB_PAGES.map((u) => {
                  const host = u.replace("https://", "").replace(".github.io/", "");
                  return (
                    <a
                      key={u}
                      href={u}
                      target="_blank"
                      rel="noreferrer"
                      className="mono rounded-lg border border-white/8 bg-white/[0.03] px-2.5 py-1.5 text-[11px] text-zinc-400 transition hover:border-white/20 hover:text-white"
                    >
                      {host}
                    </a>
                  );
                })}
              </div>
            </div>
          </Panel>
        </section>

        {/* ── Contact ── */}
        <section id="contact">
          <Panel title="Contact" code="COM-01">
            <div className="grid gap-6 p-4 lg:grid-cols-[1.1fr_0.9fr] sm:p-6">
              <div>
                <div className="mb-5 flex items-center gap-2 rounded-xl border border-[#3ddc84]/25 bg-[#3ddc84]/10 px-4 py-3">
                  <CircleDot className="h-4 w-4 text-[#3ddc84]" />
                  <div>
                    <p className="text-sm font-semibold text-white">
                      System Status: Available for opportunities
                    </p>
                    <p className="text-xs text-zinc-400">{PROFILE.statusDetail}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {PROFILE.phones.map((p, i) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s/g, "")}`}
                      className="flex items-center gap-3 rounded-xl border border-white/[0.05] bg-white/[0.02] px-4 py-3 transition hover:border-white/15"
                    >
                      <Phone className={`h-4 w-4 ${i === 0 ? "text-[#3ddc84]" : "text-[#4f8cff]"}`} />
                      <div>
                        <p className="mono text-[10px] text-zinc-500">
                          {i === 0 ? "PRIMARY" : "SECONDARY"}
                        </p>
                        <p className="text-sm font-semibold text-white">{p}</p>
                      </div>
                    </a>
                  ))}

                  <a
                    href={`mailto:${PROFILE.primaryEmail}`}
                    className="flex items-center gap-3 rounded-xl border border-white/[0.05] bg-white/[0.02] px-4 py-3 transition hover:border-white/15"
                  >
                    <Mail className="h-4 w-4 text-[#4f8cff]" />
                    <div>
                      <p className="mono text-[10px] text-zinc-500">PRIMARY EMAIL</p>
                      <p className="text-sm font-semibold text-white">{PROFILE.primaryEmail}</p>
                    </div>
                  </a>
                </div>

                <div className="mt-5">
                  <p className="mono mb-2 text-[10px] tracking-[0.16em] text-zinc-500">
                    SOCIAL CHANNELS
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {SOCIALS.map((s) => (
                      <a
                        key={s.name}
                        href={s.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 rounded-lg border border-white/8 bg-white/[0.03] px-2.5 py-1.5 text-xs text-zinc-400 transition hover:text-white"
                      >
                        {s.name}
                        <ExternalLink className="h-3 w-3 opacity-50" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <p className="mono mb-2 text-[10px] tracking-[0.16em] text-zinc-500">
                  EMAIL RELAY BANK · CLICK TO COPY
                </p>
                <div className="max-h-72 space-y-1 overflow-y-auto pr-1">
                  {EMAILS.map((email) => {
                    const isCopied = copied === email;
                    return (
                      <button
                        key={email}
                        onClick={() => doCopy(email)}
                        className="flex w-full items-center justify-between gap-2 rounded-lg border border-transparent bg-white/[0.03] px-3 py-2 text-left text-xs text-zinc-400 transition hover:border-white/10 hover:text-white"
                      >
                        <span className="mono truncate">{email}</span>
                        <span className="mono shrink-0 text-[10px] text-zinc-600">
                          {isCopied ? (
                            <span className="text-[#3ddc84]">copied</span>
                          ) : (
                            "copy"
                          )}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-4 flex gap-2">
                  <a
                    href={`mailto:${PROFILE.primaryEmail}`}
                    className="flex-1 rounded-xl bg-[#3ddc84] py-2.5 text-center text-sm font-bold text-black transition hover:brightness-110"
                  >
                    Draft email
                  </a>
                  <button
                    onClick={downloadResume}
                    className="rounded-xl border border-white/10 px-4 py-2.5 text-sm font-medium text-zinc-300 hover:bg-white/[0.04]"
                  >
                    Brief
                  </button>
                </div>
              </div>
            </div>
          </Panel>
        </section>

        {/* footer */}
        <footer className="flex flex-col gap-3 border-t border-white/[0.05] py-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-white">{PROFILE.name}</p>
            <p className="mono mt-1 text-[11px] text-zinc-600">
              Developer Command Center · {PROFILE.role}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 mono text-[11px] text-zinc-600">
            <span className="inline-flex items-center gap-1.5 text-[#3ddc84]">
              <Activity className="h-3 w-3" /> available
            </span>
            <a href={PROFILE.github} className="hover:text-zinc-300">
              github
            </a>
            <a href="#focus" className="hover:text-zinc-300">
              ↑ top
            </a>
          </div>
        </footer>
      </main>

      {/* command palette */}
      {cmdOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 px-4 pt-[12vh] backdrop-blur-sm"
          onClick={() => setCmdOpen(false)}
        >
          <div
            className="w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-[#12141c] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-white/[0.06] px-4 py-3">
              <Search className="h-4 w-4 text-zinc-500" />
              <input
                autoFocus
                value={cmdQ}
                onChange={(e) => setCmdQ(e.target.value)}
                placeholder="Jump, open repo, contact…"
                className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-zinc-600"
              />
              <button
                onClick={() => setCmdOpen(false)}
                className="mono rounded border border-white/10 px-1.5 py-0.5 text-[10px] text-zinc-500"
              >
                ESC
              </button>
            </div>
            <div className="max-h-72 overflow-y-auto p-2">
              {commands.map((c) => (
                <button
                  key={c.label}
                  onClick={() => {
                    c.run();
                    setCmdOpen(false);
                  }}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm text-zinc-300 transition hover:bg-white/[0.05] hover:text-white"
                >
                  <span>{c.label}</span>
                  <ChevronRight className="h-3.5 w-3.5 text-zinc-600" />
                </button>
              ))}
              {commands.length === 0 && (
                <p className="px-3 py-6 text-center text-xs text-zinc-600">No matches</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* floating status (mobile) */}
      <a
        href="#contact"
        className="fixed bottom-4 right-4 z-30 inline-flex items-center gap-2 rounded-full border border-[#3ddc84]/40 bg-[#0A0B0F]/95 px-4 py-2.5 shadow-lg backdrop-blur sm:hidden"
      >
        <span className="animate-pulse-dot h-2 w-2 rounded-full bg-[#3ddc84]" />
        <span className="mono text-[10px] font-semibold tracking-wide text-[#3ddc84]">
          AVAILABLE
        </span>
      </a>
    </div>
  );
}
