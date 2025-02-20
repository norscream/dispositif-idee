
import { lazy, Suspense } from "react";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/home/Hero";

// Lazy load components that are not immediately visible
const Actions = lazy(() => import("@/components/home/Actions"));
const News = lazy(() => import("@/components/home/News"));
const Team = lazy(() => import("@/components/home/Team"));
const Contact = lazy(() => import("@/components/home/Contact"));
const Resources = lazy(() => import("@/components/home/Resources"));
const FAQ = lazy(() => import("@/components/home/FAQ"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="w-full py-16 flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
  </div>
);

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <Hero />
      <Suspense fallback={<LoadingFallback />}>
        <Actions />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <News />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Team />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Resources />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <FAQ />
      </Suspense>
    </div>
  );
}
