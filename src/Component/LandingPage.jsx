

function LandingPage() {
  return (
    <section className="bg-[#1c2230]">
    <div className="container ">
        <div className="element-center flex-col pt-[200px]">
            <div className="w-[750px] max-w-full">
                <img src="/public/images/illustration-intro.png" alt="landing-img"  className="h-fit w-full"/>
            </div>
            <div className="text-white  text-center">
            <h1 className="text-[30px] md:[40px] font-semibold mb-[15px]">
                All Your Files In Secure Location,
                <br />
                accessible anywhere.
            </h1>
            <p className="font-normal text-lg px-[15px] md:[600px] max-w-full md:mx-auto mb-[30px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi </p>
          </div>
          <a href="/" className="btn rounded-[30px] w-[280px] h-[60px] element-center text-white font-medium ">
          Get Start</a>
        </div>
    </div>
    <div className="w-full h-[200px]">
        <img src="/public/images/bg-curvy-desktop.svg" alt="img"  className="w-full h-full"/>
    </div>
    </section>
  )
}

export default LandingPage;