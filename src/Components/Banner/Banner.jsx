import banner from "../../assets/books.jpg"

export default function Banner() {
  return (

<div className="my-12 flex flex-col-reverse md:flex-row  md:items-center md:justify-center ">
    {/* left */}
<div className="">
<h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6 w-2/3">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn bg-[#23BE0A] text-white hover:text-black">View The List</button>
</div>
{/* Right */}
<div>
    <img src={banner} alt="" className="rounded-lg shadow-2xl" />

</div>


</div>
  )
}
