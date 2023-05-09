// import Logo from "../logo/logo";
import ToggleTab from "../toggle";
import MaterialBlogItem from "../components/MaterialTodo";
import { useState } from "react";

const Material = () => {
  const [blogs, setBlogs] = useState([""]);
  const [blogtext, setBlogtext] = useState(
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
  );

  const onAddMaterialBlogItem = () => {
    setBlogtext("Lorem ipsum, dolor sit amet consectetur adipisicing elit.");
    setBlogs([...blogs, blogtext]);
  };

  return (
    <div className="p-4 pb-16">
      <div className="w-[60px]  xs:w-[60px] sm:w-[60px] md:w-[80px] lg:w-[100px] xl:w-[120px] mx-12 my-6">
        <img src={"/assets/images/logo.png"} alt="logo page" />
      </div>
      <div className="flex flex-col sm:flex-col md:flex-row justify-between gap-4 md:gap-16 lg:gap-16 mx-20 my-6">
        <div className="flex flex-col items-center">
          <div className="pb-4">
            <ToggleTab tabs={["ToDo", "Materialien"]} />
          </div>
          <div className="p-4 w-[300px] h-[430px] rounded-[24px] bg-white drop-shadow-lg">
            <div className="mb-2">
              <input
                type="text"
                className="h-[50px] rounded-[12px] text-[12px] font-[500] pl-3 placeholder:text-slate-400 block bg-white w-full border-2 border-[#4269E1] shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                placeholder="Suchen..."
              ></input>
            </div>
            <div className="grid gap-2">
              <div className="font-[500] text-[12px] p-2 border border-slate-300 rounded-[12px]">
                Bruchhausenerstraße 36
                <br />
                59759 Arnsberg
                <br />
                Deutschland
              </div>
              <div className="font-[500] text-[12px] p-2 border border-slate-300 rounded-[12px]">
                Bruchhausenerstraße 36
                <br />
                59759 Arnsberg
                <br />
                Deutschland
              </div>
              <div className="font-[500] text-[12px] p-2 border border-slate-300 rounded-[12px]">
                Bruchhausenerstraße 36
                <br />
                59759 Arnsberg
                <br />
                Deutschland
              </div>
            </div>
          </div>
        </div>
        <div className="w-300px md:w-full lg:w-full py-4 px-12 rounded-[24px] bg-white drop-shadow-lg">
          <div className="flex justify-end">
            <button
              className="my-4 bg-[#4269E1] rounded-[8px] w-[30px] h-[30px] text-[#FFFFFF] justify-right"
              onClick={onAddMaterialBlogItem}
            >
              +
            </button>
          </div>
          <div className="grid gap-4">
            {blogs.map((index) => (
              <div key={index}>
                <MaterialBlogItem children={blogtext} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Material;
