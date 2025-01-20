import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/20 via-zinc-900 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-teal-900/20 via-transparent to-transparent"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-emerald-500/10 via-emerald-500/5 to-transparent blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-teal-500/10 via-teal-500/5 to-transparent blur-3xl"></div>

      {/* Content Container */}
      <div className="relative">
        {/* Navbar */}
        

        {/* Hero Section */}
        <section className="flex flex-col justify-center items-center text-center py-32 relative">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
            Welcome to MyApp
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            A modern UI built with Tailwind and ShadCN
          </p>
          <Button className="mt-8 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-8 py-6 border-0">
            Get Started
          </Button>
        </section>

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 py-16 max-w-7xl mx-auto">
          <Card className="bg-black/40 backdrop-blur-sm border-white/5 shadow-xl shadow-emerald-500/5 hover:shadow-emerald-500/10 transition duration-300">
            <CardHeader>
              <h3 className="text-2xl font-semibold text-white">✨ Feature 1</h3>
              <p className="text-zinc-400 mt-2">Awesome feature description.</p>
            </CardHeader>
          </Card>

          <Card className="bg-black/40 backdrop-blur-sm border-white/5 shadow-xl shadow-emerald-500/5 hover:shadow-emerald-500/10 transition duration-300">
            <CardHeader>
              <h3 className="text-2xl font-semibold text-white">🎯 Feature 2</h3>
              <p className="text-zinc-400 mt-2">Another cool feature.</p>
            </CardHeader>
          </Card>

          <Card className="bg-black/40 backdrop-blur-sm border-white/5 shadow-xl shadow-emerald-500/5 hover:shadow-emerald-500/10 transition duration-300">
            <CardHeader>
              <h3 className="text-2xl font-semibold text-white">💫 Feature 3</h3>
              <p className="text-zinc-400 mt-2">More details about this amazing feature.</p>
            </CardHeader>
          </Card>
        </section>

        {/* Footer */}
        
      </div>
    </div>
  );
}