import CourseComponent from "./(components)/CourseComponent";
import SliderMain from "./(components)/SliderMain";
import getAllCourses from "./actions/getAllCourses";
import myUser from "./actions/getUser";

const images = [
  "/a.jpg",
  "b.png"
]

interface HomeProps {
  searchParams:string
}

export default async function Home({searchParams}: HomeProps) {

  const courses = await getAllCourses(searchParams);
  const currentUser = await myUser();

  return (
    <main className="w-[100%]">
      <SliderMain
      images={images}
      />

        <div className="py-11 h-100 bg-gradient-to-b from-zinc-800 to-zinc-700">

          <div className="flex flex-wrap px-8">
            {courses.map((item:any) => (
              <CourseComponent
                key={item.id}
                currentUser={currentUser}
                data={item}            />
            ))}
          </div>

        </div>
    </main> 
  )
}
