export default function Hero() {
  return (
    <section
      id="hero"
      className="text-white min-h-[100vh] p-10 bg-landing-page bg-center bg-no-repeat bg-cover flex"
    >
      <div className="w-full flex flex-col gap-y-5 items-center justify-center leading-loose border border-white">
        <h1 className="text-4xl sm:text-[64px] text-center font-extrabold text-white [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.9)]">
          YUMI UEHARA
        </h1>

        <span className="leading-tight text-center italic [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.9)]">
          frontend developer
        </span>
      </div>
    </section>
  )
}
