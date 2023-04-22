import Link from "next/link";
import React from "react";
import { BsAirplaneEngines } from "react-icons/bs";
// import SearchBar from "./SearchBar";
import { AiOutlineContacts } from "react-icons/ai";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrChannel} from "react-icons/gr";
import { RxCross1 } from "react-icons/rx";
import { FaRegKeyboard} from "react-icons/fa";
import { TbBrandBlogger} from "react-icons/tb";
import axios from "axios";


const PCNavbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const [showSearchBar, setShowSearchBar] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [searchData, setSearchData] = React.useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault()
     axios.get(`http://localhost:8000/watch`, {params:{search: query }}).then((res) =>setSearchData(res.data)).catch((err) => console.log(err));

    if(searchData.length > 0)setShowSearchBar(true)
  };

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      {/* forpc */}
      <div className=" bg-white  hidden md:inline tracking-widest">
        <div className=" py-3 shadow-md container flex items-center justify-between w-100 ">
          <div className="flex items-center ">
            <Link className="text-3xl text-themecol flex items-center justify-center" href="/">
              <span className="ml-2">Dose of Bhabhar</span>
            </Link>
          </div>
          <div className="">
                <form action="GET" className="flex gap-1 items-center">
                  <div className="relative">
                <input className="w-96 py-2 px-5 border-none rounded-full bg-slate-200" type="text" placeholder="Search" name="search" onChange={e=>setQuery(e.target.value)} />  
                    <div className="absolute top-0 right-0">

                <button type="submit" onClick={handleSubmit}  className="hover:bg-slate-100 hover:scale-125 p-3 rounded-full"><BsSearch /></button> 
                    </div>
                  </div>
                </form>    
          </div>
          <div className="flex items-center justify-center ">
                            {/* <Link className="flex items-center gap-1" href='/video/create'> <h3 className="ml-8"><AiOutlineVideoCameraAdd/></h3><h3>Create</h3></Link>                      */}
                            {/* <Link className="flex items-center gap-1" href='/'> <h3 className="ml-8"><GrChannel/></h3><h3>Your Channel</h3></Link>                      */}
                            <Link className="flex items-center gap-1" href='/'> <h3 className="ml-8"><TbBrandBlogger/></h3><h3>Blogs</h3></Link>                     
                            <Link className="flex items-center gap-1" href='/contact'> <h3 className="ml-8 text-xl"><AiOutlineContacts/></h3><h3>Contact Us</h3></Link>                     
                  <hr />
                  </div>
      
          
        </div>
        
      </div>

{/* // search bar */}
{
  showSearchBar ?       <div>
      {/* <SearchBar data={searchData}/> */}
  </div>:null
}
    </>
  );
};

export default PCNavbar;
