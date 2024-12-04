export default function Hero({ heading, subheading, buttonText, buttonLink }) {
  return (
    <section className="relative bg-[#fffef5] min-h-screen flex items-center">
      <div className="w-full max-w-[1140px] flex flex-col justify-center">
        <h1 className="max-w-[900px] text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
          {heading}
        </h1>
        
        <div className="mt-12 flex items-end justify-between">
          {buttonText && buttonLink && (
            <a
              href={buttonLink}
              className="inline-block rounded-full border-2 border-[#885fff] bg-[#885fff] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#fffef5] hover:text-[#885fff]"
            >
              {buttonText}
            </a>
          )}
          
          {subheading && (
            <p className="max-w-[300px] text-right text-lg font-medium">
              {subheading}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
