import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <header className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-4">RoseBud UI</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A modern Next.js starter template with Tailwind CSS for building beautiful, responsive web applications.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 border-b pb-2">Project Overview</h2>

          <Card>
            <CardHeader>
              <CardTitle>Project Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                RoseBud UI is a carefully crafted Next.js starter template that combines the power of Next.js with the
                flexibility of Tailwind CSS. It provides a solid foundation for building modern web applications with a
                focus on developer experience and performance.
              </p>
              <p>
                This template includes a custom theme system, responsive design patterns, and a clean project structure
                to help you get started quickly.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 border-b pb-2">Key Features</h2>
          <Card>
            <CardHeader>
              <CardTitle>Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc pl-5">
                <li>Next.js App Router for modern routing</li>
                <li>Tailwind CSS for utility-first styling</li>
                <li>Custom theme with light/dark mode support</li>
                <li>TypeScript for type safety</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 border-b pb-2">Getting Started</h2>
          <div className="bg-card text-card-foreground rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-3">Installation</h3>
            <div className="bg-muted p-4 rounded font-mono text-sm mb-4 overflow-x-auto">
              <code>
                git clone https://github.com/your-username/rosebud-ui.git
                <br />
                cd rosebud-ui
                <br />
                npm install
                <br />
                npm run dev
              </code>
            </div>
            <p>
              After running these commands, open{" "}
              <span className="font-mono bg-muted px-1 py-0.5 rounded">http://localhost:3000</span> in your browser to
              see the application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card text-card-foreground rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Project Structure</h3>
              <ul className="space-y-1 font-mono text-sm">
                <li>
                  <span className="text-muted-foreground">app/</span> - Next.js App Router
                </li>
                <li>
                  <span className="text-muted-foreground">app/globals.css</span> - Global styles
                </li>
                <li>
                  <span className="text-muted-foreground">app/layout.tsx</span> - Root layout
                </li>
                <li>
                  <span className="text-muted-foreground">tailwind.config.ts</span> - Tailwind config
                </li>
                <li>
                  <span className="text-muted-foreground">next.config.ts</span> - Next.js config
                </li>
              </ul>
            </div>
            <div className="bg-card text-card-foreground rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Customization</h3>
              <p className="mb-3">
                The theme can be customized in{" "}
                <span className="font-mono bg-muted px-1 py-0.5 rounded">app/globals.css</span> where you'll find CSS
                variables for colors and other design tokens.
              </p>
              <p>
                Tailwind configuration can be extended in{" "}
                <span className="font-mono bg-muted px-1 py-0.5 rounded">tailwind.config.ts</span>.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 border-b pb-2">Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Next.js", description: "React framework" },
              { name: "Tailwind CSS", description: "Utility-first CSS" },
              { name: "TypeScript", description: "Type-safe JavaScript" },
              { name: "ESLint", description: "Code linting" },
            ].map((tech) => (
              <div key={tech.name} className="bg-card text-card-foreground rounded-lg p-4 text-center">
                <h3 className="font-semibold mb-1">{tech.name}</h3>
                <p className="text-sm text-muted-foreground">{tech.description}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="text-center pt-8 border-t">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:underline">
            <span>Back to Home</span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground">
            RoseBud UI - A Next.js starter template with Tailwind CSS
          </p>
        </footer>
      </div>
    </div>
  )
}
