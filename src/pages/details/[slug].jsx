import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiPhoneCall } from "react-icons/fi";
import { FcOnlineSupport } from "react-icons/fc";
import { useRouter } from "next/router";
import Navbar from "@/components/Header/Navbar";
import Link from "next/link";
const Details = ({ data }) => {
//   console.log(data);
  // const query = useRouter()
  // const [data, setData] = useState([])

  // useEffect(() => {
  // axios.get(`http://localhost:8000/createpackage/${query.asPath.slice(9)}`).then(res=>console.log(res.data)).catch(err=>console.log(err))
  //   },[])

  return (
    <>
      <Navbar />
      <div className="my-6 lg:container text-slate-700">
        <div className="">
          {data.tour.map((t) => (
            <div className="flex overflow-hidden border-2 rounded-xl mb-4 mx-2 md:mx-0 bg-slate-50">
              <div className="w-full flex md:flex-row flex-col">
                <div className="">
                  <img src={data.packageimg} alt="" />
                </div>
                <div className="w-full px-2 py-2 md:px-7 flex flex-col justify-between">
                  <div className="">
                    <div className="w-full flex items-center justify-between">
                      <div className="">
                          {/* {console.log(t)} */}
                        <Link
                          href={{
                            pathname:"/tour", 
                            query:{data: JSON.stringify(t)}
                        }}
                        >
                          <h3 className="text-xl text-black hover:text-blue-600 hover:underline">
                            {t.tourname}
                          </h3>
                        </Link>
                      </div>
                      <div className="">| {t.duration}</div>
                    </div>
                    <div className="mt-6">
                      <hr />
                      <p className="py-2 text-sm">{t.path}</p>
                      <hr />
                    </div>
                    <div>
                      <h3 className="text-sm">Pickup Point: {t.howtoreach}</h3>
                    </div>
                    <div className="mt-2">
                      <p>
                        <small className="line-through">₹ {t.totalcost}</small>{" "}
                        - ₹ {t.finalcost}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <Link href="tel:7668088539">
                      <button className="flex items-center gap-1 bg-slate-200 hover:bg-slate-300 rounded-md px-3 py-1 ">
                        <h3>
                          <FiPhoneCall />
                        </h3>{" "}
                        <h3>Book by call</h3>
                      </button>
                    </Link>
                    <button className="flex items-center gap-1 bg-slate-200 hover:bg-slate-300 rounded-md px-3 py-1 ">
                      <h3 className="text-lg">
                        <FcOnlineSupport />
                      </h3>{" "}
                      <h3>Book Online</h3>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Details;

export async function getServerSideProps(context) {
  console.log(context.query.slug);
  const res = await fetch(
    `http://localhost:8000/createpackage/${context.query.slug}`
  );
  const data = await res.json();

  return {
    props: { data }, // will be passed to the page component as props
  };
}
