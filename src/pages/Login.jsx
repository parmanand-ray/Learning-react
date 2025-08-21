

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="w-full max-w-md">
        <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8">
          <div className="mb-8 text-center">
            <div className="mx-auto h-12 w-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white text-xl font-bold shadow">
              🔒
            </div>
            <h1 className="mt-4 text-2xl font-semibold text-slate-900">Welcome back</h1>
            <p className="mt-1 text-sm text-slate-500">Sign in to your account</p>
          </div>

          {/* Form (no handlers) */}
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 outline-none focus:border-slate-400 focus:ring-4 focus:ring-slate-200"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium text-slate-700" htmlFor="password">
                  Password
                </label>
                <a className="text-sm text-slate-600 hover:text-slate-900" href="#">
                  Forgot?
                </a>
              </div>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 outline-none focus:border-slate-400 focus:ring-4 focus:ring-slate-200"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="inline-flex items-center gap-2 text-sm text-slate-600 select-none">
                <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-300" />
                Remember me
              </label>
              <span className="text-xs text-slate-400">No events wired</span>
            </div>

            <button
              className="w-full rounded-xl bg-slate-900 py-3 text-white font-medium shadow hover:bg-slate-800 active:bg-slate-900 disabled:opacity-60"
              type="submit"
            >
              Sign in
            </button>

            <div className="relative text-center">
              <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-slate-200" />
              <span className="relative bg-white px-3 text-xs text-slate-400">or</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button type="button" className="rounded-xl border border-slate-300 bg-white py-2.5 font-medium text-slate-700 hover:bg-slate-50">
                Google
              </button>
              <button type="button" className="rounded-xl border border-slate-300 bg-white py-2.5 font-medium text-slate-700 hover:bg-slate-50">
                GitHub
              </button>
            </div>

            <p className="text-center text-sm text-slate-600">
              Don’t have an account? <a href="#" className="font-medium text-slate-900 hover:underline">Sign up</a>
            </p>
          </form>
        </div>

        <p className="mt-4 text-center text-xs text-slate-500">
          * This component is static and does not handle any events.
        </p>
      </div>
    </div>
  );
}
