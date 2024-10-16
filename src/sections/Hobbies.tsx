import DrawingGallery from '@/components/DrawingGallery'

export default function Hobbies() {
  return (
    <section id="hobbies" className="w-full flex flex-col px-10 text-black">
      <h2 className="text-2xl font-bold text-center mb-2">Art</h2>

      <div className="w-full h-full">
        <DrawingGallery />
      </div>
    </section>
  )
}
