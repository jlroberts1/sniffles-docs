import AndroidIcon from "@/components/AndroidIcon";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-center">
          <AndroidIcon className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">Sniffles</span>
        </div>
        <nav className="flex gap-4 sm:gap-6">
          <div className="text-sm font-medium hover:underline underline-offset-4">
            GitHub
          </div>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Sniffles for Android
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  A powerful and flexible library for building amazing Android
                  applications.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">View on GitHub</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full pb-8">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">
              Quick Start Guide
            </h2>
            <div className="mt-8 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>1. Installation</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                    <code>
                      {/* implementation 'com.yourdomain:yourlibname:1.0.0' */}
                    </code>
                  </pre>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>2. Initialize in your Application class</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                    {/* <code>{`YourLibName.initialize(this)`}</code> */}
                  </pre>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>3. Launch the tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                    {/* <code>{`YourLibName.doSomething()`}</code> */}
                  </pre>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8 text-center">
              <Button>
                Read Full Documentation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2024 Contexts. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:gap-6">
            <div className="text-xs hover:underline underline-offset-4">
              Terms of Service
            </div>
            <div className="text-xs hover:underline underline-offset-4">
              Privacy
            </div>
          </nav>
        </div>
      </footer>
    </div>
  );
}
