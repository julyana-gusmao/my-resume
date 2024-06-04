const Coding = () => {
  return (
    <section id="coding" className="text-white w-full">
      {/* MOBILE */}

      <div id="MOBILE" className="lg:hidden flex flex-col w-full p-8 gap-6 justify-center items-center">
        <div id="TITLE" className="flex flex-col gap-1 items-center">
          <h3 className="font-sans text-[30px]">&lt;coding&gt;</h3>
          <h4 className="text-details ">Featured projects</h4>
        </div>

        {/* TRANSFORMAR EM LISTA HTML E ADICIONAR UM SELECT DEFAULT COM BG WHITE NO ALL? TRANSIÇÃO AO CLICAR PARA O PRÓXIMO */}
        <div
          id="FILTROS"
          className="flex gap-10 w-[70vw] mb-2 justify-center items-center"
        >
            <span
              id="TODOS"
              className="block rounded-full  py-2 cursor-pointer transition-all duration-100 ease-in transform hover:scale-100"
            >
              <p>All</p>
            </span>
            <span
              id="PERSONAL"
              className="block rounded-full  py-2 cursor-pointer transition-all duration-100 ease-in transform hover:scale-100"
            >
              <p>Personal</p>
            </span>
            <span
              id="PROFESSIONAL"
              className="block rounded-full  py-2 cursor-pointer transition-all duration-100 ease-in transform hover:scale-100"
            >
              <p>Professional</p>
            </span>
          </div>

          <div id="PROJETOS" className="flex flex-col gap-5 h-full w-full items-center">
          <div className="personal flex flex-col justify-center text-left w-[75vw] p-4 rounded-xl border-stroke border-2 border-opacity-50">
            <div id="IMAGE" className="w-full h-[25vh] bg-white rounded-2xl">
              {" "}
            </div>
            <div id="TEXT" className="flex flex-col gap-2 p-3">
              <h5 className="font-bold">Title</h5>
              <p className="text-details ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                nam debitis dignissimos nostrum laborum excepturi commodi nemo,
                similique corrupti esse nisi
              </p>
            </div>
          </div>
          <div className="personal flex flex-col justify-center text-left w-[75vw] p-4 rounded-xl border-stroke border-2 border-opacity-50">
            <div id="IMAGE" className="w-full h-[25vh] bg-white rounded-2xl">
              {" "}
            </div>
            <div id="TEXT" className="flex flex-col gap-2 p-3">
              <h5 className="font-bold">Title</h5>
              <p className="text-details ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                nam debitis dignissimos nostrum laborum excepturi commodi nemo,
                similique corrupti esse nisi, cumque quas, sint quam ad!
                Quisquam amet natus error!
              </p>
            </div>
          </div>
          <div className="personal flex flex-col justify-center text-left w-[75vw] p-4 rounded-xl border-stroke border-2 border-opacity-50">
            <div id="IMAGE" className="w-full h-[25vh] bg-white rounded-2xl">
              {" "}
            </div>
            <div id="TEXT" className="flex flex-col gap-2 p-3">
              <h5 className="font-bold">Title</h5>
              <p className="text-details ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                nam debitis dignissimos nostrum laborum excepturi commodi nemo,
                similique corrupti esse nisi, cumque quas, sint quam ad!
                Quisquam amet natus error!
              </p>
            </div>
          </div>
        </div>

        
      </div>

      {/* DESKTOP */}
      <div
        id="DESKTOP"
        className="hidden lg:flex flex-col w-full px-60 py-16 gap-6 items-center"
      >
        <div id="TITLE" className="flex flex-col gap-1 items-center">
          <h3 className="font-sans text-[30px]">&lt;coding&gt;</h3>
          <h4 className="text-details ">Featured projects</h4>
        </div>
        {/* TRANSFORMAR DEPOIS EM COMPONENTE COM PROPS?? */}
        <div
          id="FILTROS"
          className="flex gap-2 w-[35vw] ml-3 mb-2 justify-center"
        >
          <div
            id="TODOS"
            className="px-1 inline-block py-1 rounded-full bg-gradient-to-br from-linear-l to-linear-r hover:bg-slate-800 mt-3 lg:text-lg cursor-pointer transition-all duration-100 ease-in transform hover:scale-105"
          >
            <span
              id="TODOS"
              className="block bg-main-color hover:bg-slate-800 rounded-full px-6 py-2 cursor-pointer transition-all duration-100 ease-in transform hover:scale-100"
            >
              <p>All</p>
            </span>
          </div>
          <div
            id="PERSONAL"
            className="px-1 inline-block py-1 rounded-full bg-gradient-to-br from-linear-l to-linear-r hover:bg-slate-800 mt-3 lg:text-lg cursor-pointer transition-all duration-100 ease-in transform hover:scale-105"
          >
            <span
              id="PERSONAL"
              className="block bg-main-color hover:bg-slate-800 rounded-full px-6 py-2 cursor-pointer transition-all duration-100 ease-in transform hover:scale-100"
            >
              <p>Personal</p>
            </span>
          </div>
          <div
            id="PROFESSIONAL"
            className="px-1 inline-block py-1 rounded-full bg-gradient-to-br from-linear-l to-linear-r hover:bg-slate-800 mt-3 lg:text-lg cursor-pointer transition-all duration-100 ease-in transform hover:scale-105"
          >
            <span
              id="PROFESSIONAL"
              className="block bg-main-color hover:bg-slate-800 rounded-full px-6 py-2 cursor-pointer transition-all duration-100 ease-in transform hover:scale-100"
            >
              <p>Professional</p>
            </span>
          </div>
        </div>

        {/* TRANSFORMAR DEPOIS EM JSON E FAZER UM MAP DOS PROJETOS? */}

        <div id="PROJETOS" className="flex flex-wrap gap-5 h-full w-[80vw]">
          <div className="personal flex flex-col justify-center text-left w-[25vw] p-2 rounded-xl border-stroke border-2 border-opacity-50">
            <div id="IMAGE" className="w-full h-[256px] bg-white rounded-2xl">
              {" "}
            </div>
            <div id="TEXT" className="flex flex-col gap-2 p-3">
              <h5 className="font-bold">Title</h5>
              <p className="text-details ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                nam debitis dignissimos nostrum laborum excepturi commodi nemo,
                similique corrupti esse nisi, cumque quas, sint quam ad!
                Quisquam amet natus error!
              </p>
            </div>
          </div>
          <div className="personal flex flex-col justify-center text-left w-[25vw] p-2 rounded-xl border-stroke border-2 border-opacity-50">
            <div id="IMAGE" className="w-full h-[256px] bg-white rounded-2xl">
              {" "}
            </div>
            <div id="TEXT" className="flex flex-col gap-2 p-3">
              <h5 className="font-bold">Title</h5>
              <p className="text-details ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                nam debitis dignissimos nostrum laborum excepturi commodi nemo,
                similique corrupti esse nisi, cumque quas, sint quam ad!
                Quisquam amet natus error!
              </p>
            </div>
          </div>
          <div className="personal flex flex-col justify-center text-left w-[25vw] p-2 rounded-xl border-stroke border-2 border-opacity-50">
            <div id="IMAGE" className="w-full h-[256px] bg-white rounded-2xl">
              {" "}
            </div>
            <div id="TEXT" className="flex flex-col gap-2 p-3">
              <h5 className="font-bold">Title</h5>
              <p className="text-details ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                nam debitis dignissimos nostrum laborum excepturi commodi nemo,
                similique corrupti esse nisi, cumque quas, sint quam ad!
                Quisquam amet natus error!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coding;
