import SliderMain from "./(components)/SliderMain";

const images = [
  "",
  "",
]

export default function Home() {
  return (
    <main className="w-[100%]">
      <SliderMain 
        images = {images}
      />  
    </main>
  )
}
