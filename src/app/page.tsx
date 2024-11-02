"use client"

import SandpackReact from "@components/sandpack/SandpackReact";
import { ResizablePanel, ResizablePanelGroup, ResizableHandle } from "@components/ui/resizable";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen gap-16 w-screen h-[calc(100vh-100rem)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full h-full justify-center">
        <ResizablePanelGroup
          direction="horizontal"
          className="w-full rounded-lg md:min-w-[450px]"
        >
          <ResizablePanel defaultSize={50}>
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={25} className="m-4 border rounded-xl">
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Two</span>
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={75} className="m-4 border rounded-xl">
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Three</span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50} className="w-full m-4 border rounded-xl h-[calc(100vh-2rem)]">
            <div className="flex items-center justify-center h-full w-full">
              <SandpackReact code={testcode} />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
    </div>
  );
}


const testcode = `export default function Example() {
  return (
    <div className="container mx-auto px-4 py-8 bg-zinc-100">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-500">Your Website Name</h1>
        <p className="text-lg text-gray-600">Your website tagline here</p>
      </header>

      <main>
        <section className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">About Us</h2>
          <p>Write a brief introduction about your company or project.</p>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">Services</h2>
          <ul>
            <li className="mb-2">Service 1</li>
            <li className="mb-2">Service 2</li>
            <li className="mb-2">Service 3</li>
          </ul>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>Provide contact information or a contact form.</p>
        </section>
      </main>

      <footer className="text-center mt-12 text-gray-500">
        &copy; {new Date().getFullYear()} Your Website Name
      </footer>
    </div>
  )
}`