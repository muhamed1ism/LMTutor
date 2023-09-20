import CourseComponent from "../(components)/CourseComponent";
import getBasketItems from "../actions/getBasketItems";
import myUser from "../actions/getUser";
import BasketClear from "../(components)/BasketComponent/BasketClear";


export default async function page() {

    const courses = await getBasketItems();
    const currentUser = await myUser();

    let totalPrice = 0;

    courses.forEach((item:any) => {
        totalPrice += parseFloat(item.price);
    })

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
          <div className="text-white mr-4">Ukupno: {totalPrice} RSD</div>
          <BasketClear currentUser={currentUser}/>
          <button className="bg-gradient-to-r from-cyan-600 to-sky-700 text-white px-4 py-2 rounded-lg mr-4 hover:opacity-80 transition">Završi kupovinu
          </button>
        </div>
    </div>
  )
}
