import Image from "next/image"
import Link from "next/link"
import Header from "./header"
import Footer from "./footer"

export default function notfound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 bg-[#F6F5FF]">
        {/* Breadcrumb */}
        <div className="container mx-auto py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/pages">Pages</Link>
            <span className="text-gray-400">/</span>
            <span className="text-pink-500">404 Not Found</span>
          </div>
        </div>

        {/* 404 Content */}
        <div className="container mx-auto flex flex-col items-center justify-center py-16">
          <h1 className="mb-16 text-4xl font-bold">404 Not Found</h1>
          <Image src="/Public/404-not-found.png" alt="404 Illustration" width={600} height={400} className="max-w-full h-auto" />
          <p className="mb-8 text-xl">oops! The page you requested was not found!</p>
          <Link
            href="/"
            className="rounded bg-pink-500 px-8 py-3 text-white transition-colors hover:bg-pink-600"
          >
            Back To Home
          </Link>

          {/* Partner Logos */}
          <div className="mt-24 grid grid-cols-5 gap-8 opacity-50">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex items-center justify-center">
                <Image
                  src="/Public/404-not-found-2.png"
                  alt={`Partner logo ${i + 1}`}
                  width={120}
                  height={50}
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

