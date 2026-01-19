import React from 'react'
import Section1 from '../component/Section1'

const Home = () => {
  return (
   
    <div
  className="relative w-full bg-[url('https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?q=80&w=1974&auto=format&fit=crop')] bg-cover top-12 bg-top bg-no-repeat"
>

  {/* Dark overlay */}
  <div className="absolute inset-0 top-4 bg-black/30"></div>

  {/* Content */}
  <div className="relative z-10 text-white">

    {/* Section 1 */}
    <Section1/>

    {/* Section 2 */}
    <section className="min-h-screen flex items-center justify-center">
      <h2 className="text-4xl font-semibold">
        Section Two Content
      </h2>
    </section>

    {/* Section 3 */}
    <section className="min-h-screen flex items-center justify-center">
      <h2 className="text-4xl font-semibold">
        Section Three Content
      </h2>
    </section>

  </div>
</div>

  )
}

export default Home
