export default function Dashboard(){
    const tours = [
      {
        id: "tour_888",
        name: "My App Onboarding",
        baseUrl: "https://myapp.com",
        steps: 5,
        completion: 65,
        status: "Live",
        updated: "2h ago",
        color: "#0070F3",
      },
      {
        id: "tour_456",
        name: "Settings Walkthrough",
        baseUrl: "https://myapp.com/settings",
        steps: 4,
        completion: 52,
        status: "Draft",
        updated: "Yesterday",
        color: "#00FF9C",
      },
    ];
    
    const steps = [
      { order: 1, target: "#nav-logo", text: "Welcome to the app!", position: "Bottom" },
      { order: 2, target: "#settings-btn", text: "Configure your profile here.", position: "Left" },
      { order: 3, target: "#chart", text: "Track your product health.", position: "Right" },
    ];
    
    const metrics = [
      { label: "Total Views", value: 1200 },
      { label: "Completion Rate", value: 65, suffix: "%" },
      { label: "Highest Drop-off", value: "Step 3" },
    ];

    const widgetSrc = process.env.NEXT_PUBLIC_WIDGET_URL ?? "http://localhost:5173/widget.js";
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_20%_20%,#1a1a1a_0%,#0a0a0a_50%)] text-white">
      <div className="max-w-6xl mx-auto px-6 py-10 space-y-10">
        <header className="flex flex-col gap-3">
          <div className="flex items-center gap-3 text-sm text-gray-300">
            <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">
              Phase 2 · Creator Dashboard
            </span>
            <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">
              Live demo UI
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl md:text-4xl font-semibold">Onboarding Dashboard</h1>
            <p className="text-gray-300 max-w-3xl">
              Build, preview, and hand off guided tours without leaving this workspace.
              Everything here is wired for the flow in the product brief—tour creation,
              embed delivery, and baseline analytics.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 rounded-lg bg-white text-black font-semibold hover:opacity-90">
              + Create New Tour
            </button>
            <button className="px-4 py-2 rounded-lg border border-white/20 text-white hover:bg-white/5">
              Preview Widget
            </button>
            <button className="px-4 py-2 rounded-lg border border-white/20 text-white hover:bg-white/5">
              Share with Devs
            </button>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_10px_50px_-35px_rgba(0,0,0,0.8)]"
            >
              <p className="text-sm text-gray-400">{metric.label}</p>
              <p className="text-2xl font-semibold mt-2">
                {metric.value}
                {metric.suffix ?? ""}
              </p>
              {metric.label === "Completion Rate" && (
                <div className="mt-3 h-2 rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-linear-to-r from-[#00FF9C] to-[#0070F3]"
                    style={{ width: "65%" }}
                  />
                </div>
              )}
            </div>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">Tour Editor</h2>
                <p className="text-gray-400 text-sm">
                  Define the base URL, theme, and step-by-step messaging.
                </p>
              </div>
              <span className="px-3 py-1 rounded-full bg-white/5 text-xs border border-white/10">
                Minimum 5 steps
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <label className="flex flex-col gap-2">
                <span className="text-sm text-gray-300">Tour Name</span>
                <input
                  className="px-4 py-3 rounded-lg bg-black/30 border border-white/10 focus:outline-none focus:border-white/30"
                  defaultValue="My App Onboarding"
                  placeholder="Name your tour"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-sm text-gray-300">Base URL</span>
                <input
                  className="px-4 py-3 rounded-lg bg-black/30 border border-white/10 focus:outline-none focus:border-white/30"
                  defaultValue="https://myapp.com"
                  placeholder="https://your-app.com"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-sm text-gray-300">Theme Color</span>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg border border-white/10" style={{ background: "#0070F3" }} />
                  <input
                    className="flex-1 px-4 py-3 rounded-lg bg-black/30 border border-white/10 focus:outline-none focus:border-white/30"
                    defaultValue="#0070F3"
                    placeholder="#0070F3"
                  />
                </div>
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-sm text-gray-300">CTA Copy</span>
                <input
                  className="px-4 py-3 rounded-lg bg-black/30 border border-white/10 focus:outline-none focus:border-white/30"
                  defaultValue="Take a quick tour?"
                  placeholder="Prompt users to start the tour"
                />
              </label>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Steps</h3>
                <button className="px-3 py-2 rounded-lg border border-white/15 text-sm hover:bg-white/5">
                  + Add Step
                </button>
              </div>

              <div className="space-y-3">
                {steps.map((step) => (
                  <div
                    key={step.order}
                    className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 rounded-xl border border-white/10 bg-black/30 px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center font-semibold">
                        {step.order}
                      </div>
                      <div>
                        <p className="font-semibold">{step.text}</p>
                        <p className="text-sm text-gray-400">
                          Target: {step.target} · Position: {step.position}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="px-3 py-2 rounded-lg border border-white/15 text-sm hover:bg-white/5">
                        Edit
                      </button>
                      <button className="px-3 py-2 rounded-lg border border-white/15 text-sm hover:bg-white/5">
                        Preview
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="px-5 py-3 rounded-lg bg-white text-black font-semibold hover:opacity-90">
                Save Tour
              </button>
              <button className="px-5 py-3 rounded-lg border border-white/20 hover:bg-white/5">
                Get Embed Code
              </button>
              <button className="px-5 py-3 rounded-lg border border-white/20 hover:bg-white/5">
                Launch Draft
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Tours</h3>
                  <p className="text-sm text-gray-400">Overview of live and draft tours.</p>
                </div>
                <button className="text-sm px-3 py-2 rounded-lg border border-white/10 hover:bg-white/5">
                  New
                </button>
              </div>
              <div className="space-y-3">
                {tours.map((tour) => (
                  <div
                    key={tour.id}
                    className="rounded-xl border border-white/10 bg-black/30 p-4 flex flex-col gap-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span
                          className="h-3 w-3 rounded-full"
                          style={{ background: tour.color }}
                        />
                        <p className="font-semibold">{tour.name}</p>
                      </div>
                      <span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10">
                        {tour.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">{tour.baseUrl}</p>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-300">
                      <span>{tour.steps} steps</span>
                      <span>·</span>
                      <span>{tour.completion}% completion</span>
                      <span>·</span>
                      <span>Updated {tour.updated}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-3">
              <h3 className="text-lg font-semibold">Integration</h3>
              <p className="text-sm text-gray-400">
                Hand this snippet to developers once the tour is saved.
              </p>
              <code className="rounded-xl border border-white/10 bg-black/40 p-4 font-mono text-sm break-all block">
                {`<script src="${widgetSrc}" data-tour-id="tour_888"></script>`}
              </code>
              <button className="w-full px-4 py-2 rounded-lg bg-white text-black font-semibold hover:opacity-90">
                Copy Embed Script
              </button>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Analytics</h3>
              <p className="text-sm text-gray-400">
                Baseline engagement across all active tours.
              </p>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-2 rounded-lg border border-white/20 text-sm hover:bg-white/5">
                Last 7 days
              </button>
              <button className="px-3 py-2 rounded-lg border border-white/20 text-sm hover:bg-white/5">
                Export CSV
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-white/10 bg-black/30 p-4 space-y-3">
              <div className="flex items-center justify-between text-sm text-gray-300">
                <span>Views</span>
                <span>1,200</span>
              </div>
              <div className="h-2 rounded-full bg-white/10">
                <div className="h-full rounded-full bg-linear-to-r from-[#00FF9C] to-[#0070F3]" style={{ width: "82%" }} />
              </div>

              <div className="flex items-center justify-between text-sm text-gray-300">
                <span>Completions</span>
                <span>780</span>
              </div>
              <div className="h-2 rounded-full bg-white/10">
                <div className="h-full rounded-full bg-linear-to-r from-[#0070F3] to-[#00FF9C]" style={{ width: "65%" }} />
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/30 p-4 space-y-3">
              <div className="flex items-center justify-between text-sm text-gray-300">
                <span>Drop-off by step</span>
                <span>Highest: Step 3</span>
              </div>
              <div className="space-y-2">
                {[1, 2, 3, 4, 5].map((step) => (
                  <div key={step}>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>Step {step}</span>
                      <span>{100 - step * 7}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-linear-to-r from-[#00FF9C] to-[#0070F3]"
                        style={{ width: `${100 - step * 7}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/30 p-4">
            <h4 className="font-semibold mb-3">Recent events</h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm text-gray-300">
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                {`{ "tour_id": "tour_888", "step": 1, "action": "completed" }`}
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                {`{ "tour_id": "tour_888", "step": 2, "action": "completed" }`}
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                {`{ "tour_id": "tour_888", "step": 3, "action": "skipped" }`}
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                {`{ "tour_id": "tour_456", "step": 1, "action": "completed" }`}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

