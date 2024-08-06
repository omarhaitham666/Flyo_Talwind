function StayProductive() {
  return (
    <section className="pb-[150px]">
        <div className="container grid  grid-cols-1 md:grid-cols-2 gap-[30px] place-items-center">
            <div>
                <img src="/public/images/illustration-stay-productive.png" alt="stay-productive" />
            </div>
            <div className="text-white">
                <h3 className="font-medium text-[35px] leading-[50px]">
                    Stay productive,
                    <br />
                    Where ever you are.
                </h3>
                <div className="my-[15px] font-normal text-sm tracking-[0.8px]">
                    <p className="mb-[15px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio minus harum animi amet tenetur quibusdam optio assumenda quas facere sequi temporibus natus quam, ducimus quisquam adipisci iste excepturi modi quis.</p>
                    <br />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat consequatur consectetur enim magni alias, similique maxime illo fuga laborum numquam necessitatibus ad suscipit eligendi expedita odit laboriosam nisi! Optio, exercitationem.</p>
                </div>
                <a href="/" className="text-primaryColor hover:text-[#42b0d1] transition-colors duration-200 border-b-2 border-primaryColor border-solid pb-[5px] flex items-center gap-[15px] w-fit">See how fylo wrks
                <img src="/public/images/icon-arrow.svg" alt=""  className="w-[20px] h-[20px] object-contain animate-[moveRight_1s_ease-in-out_infinite]"/>
                </a>
            </div>
        </div>
    </section>
  )
}

export default StayProductive;