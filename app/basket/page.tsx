import CourseComponent from "../(components)/CourseComponent";
import getBasketItems from "../actions/getBasketItems";
import myUser from "../actions/getUser";
import BasketClear from "../(components)/BasketComponent/BasketClear";


export default async function page() {

    const courses = await getBasketItems();
    const currentUser = await myUser();

  return (
    <div>
        <div className="p-12 flex gap-2 flex-wrap">
        {courses.map((item:any) => (
            <CourseComponent
            key={item.id}
            currentUser={currentUser}
            data={item}
            />
        ))}
        </div>

        <div className="fixed bottom-0 w-full bg-zinc-900 p-5 flex justify-end items-center">
          <BasketClear currentUser={currentUser}/>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg mr-4 hover:opacity-80 transition">Završi kupovinu
          </button>
        </div>
    </div>
  )
}
