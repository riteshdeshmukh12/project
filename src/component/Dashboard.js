import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
// import { addDays } from "date-fns";
// import { DatePicker} from "react-date-range";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  faDashboard,
  faUser,
  faVideoCamera,
  faTriangleExclamation,
  faFileCircleExclamation,
  faBell,
  faUserPlus,
  faAngleRight,
  faDownload,
  faRobot,
  faAppleAlt,

  faBars,
} from "@fortawesome/free-solid-svg-icons";
import img from "../Asset/stats.png";
import moment from "moment";
// import ReactDOM from 'react-dom';
import ReactPaginate from "react-paginate";

const Dashboard = () => {
  const [data, setdata] = useState();
  const [datas, setdatas] = useState();
  // const [change, setchange] = useState(false);
  const [select, setselect] = useState(10);
  const [button, setbutton] = useState();
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  

  const [value, setValue] = React.useState(dayjs("2022-08-24"));
  const [firstvalue, setFirstValue] = React.useState(dayjs("2022-04-01"));

  console.log(
    moment(firstvalue?.$d).format("YYYY-MM-DD"),
    moment(value?.$d).format("YYYY-MM-DD")
  );

  useEffect(() => {
    const data = () =>
      fetch(
        `https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticlist?fromdate=${moment(
          firstvalue?.$d
        ).format("YYYY-MM-DD")}&todate=${moment(value?.$d).format(
          "YYYY-MM-DD"
        )}&page=${page}&limit=${select}`
      )
        .then((res) => res.json())
        .then((res) => {
          setdata(res);
          setPageCount(res?.data?.pages, "jhshs");
        });
    data();
  }, [value, firstvalue, select, page]);

  useEffect(() => {
    const data = () =>
      fetch(
        `https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticcount?fromdate=${moment(
          firstvalue?.$d
        ).format("YYYY-MM-DD")}&todate=${moment(value?.$d).format(
          "YYYY-MM-DD"
        )}&page=${page}&limit=${select}`
      )
        .then((res) => res.json())
        .then((res) => {
          setdatas(res);
          console.log(res);
        });
    data();
  }, [value, firstvalue, select, page]);

  const handlePageClick = (e) => {
    setPage(e?.selected + 1);
  };

  return (
    <div className="admin_page w-full h-full flex items-baseline justify-between lg:flex-row flex-col lg:items-start">
      <FontAwesomeIcon
        icon={faBars}
        className="lg:hidden block pl-3 pt-5 text-white z-10 "
        onClick={() => setbutton(!button)}
      />
      <div className="left_content hidden lg:block">
        <div className="bg-[#283046] p-3 w-[220px] h-[80vh] ">
          <div className="flex justify-between">
            <h1 className="text-blue-900 text-2xl font-[800]">WOW</h1>
            <img alt="" src={img} className="w-[20px]" />
          </div>
          <ul className="mt-4 text-white  text-sm cursor-pointer">
            <li className="flex space-x-7 hover:bg-blue-500 hover:text-white p-2 rounded-lg items-center">
              <FontAwesomeIcon icon={faDashboard} />
              <p className="font-[500]">Dashboard</p>
            </li>

            <li className="flex space-x-7 hover:bg-blue-500 hover:text-white p-2 rounded-lg items-center">
              <FontAwesomeIcon icon={faUser} />
              <p className="font-[500]">WOW Users</p>
            </li>

            <li className="flex space-x-7 hover:bg-blue-500 hover:text-white p-2 rounded-lg items-center">
              <FontAwesomeIcon icon={faVideoCamera} />
              <p className="font-[500]">Video Clips</p>
            </li>

            <li className="flex space-x-7 hover:bg-blue-500 hover:text-white p-2 rounded-lg items-center">
              <FontAwesomeIcon icon={faTriangleExclamation} />
              <p className="font-[500]">Reported Content</p>
            </li>

            <li className="flex space-x-7 hover:bg-blue-500 hover:text-white p-2 rounded-lg items-center">
              <FontAwesomeIcon icon={faDashboard} />
              <p className="font-[500]">Category</p>
            </li>
            <li className="flex space-x-7 hover:bg-blue-500 hover:text-white p-2 rounded-lg  items-center">
              <FontAwesomeIcon icon={faFileCircleExclamation} />
              <p className="font-[500]">info page</p>
            </li>
            <li className="flex space-x-7 hover:bg-blue-500 hover:text-white p-2 rounded-lg items-center">
              <FontAwesomeIcon icon={faDashboard} />
              <p className="font-[500]">FAQ</p>
            </li>

            <li className="flex space-x-7 hover:bg-blue-500 hover:text-white p-2 rounded-lg items-center">
              <FontAwesomeIcon icon={faBell} />
              <p className="font-[500]">Push Notifications</p>
            </li>

            <li className="flex space-x-7 hover:bg-blue-500 hover:text-white p-2 rounded-lg items-center">
              <div className="flex  space-x-7">
                <FontAwesomeIcon icon={faUserPlus} />

                <p className="font-[500]">Internal User</p>
              </div>
              <FontAwesomeIcon icon={faAngleRight} />
            </li>
          </ul>
        </div>
      </div>

      {!button ? (
        ""
      ) : (
        <div className="left_content absolute w-[220px] h-[100vh] ">
          <div className="bg-[#283046] p-3 h-[100vh] ">
            <div className="flex justify-between ">
              <h1 className="text-blue-900 text-2xl font-[800] w-full pl-5">
                WOW
              </h1>
              <img alt="" src={img} className="w-[20px]" />
            </div>
            <ul className="mt-4 text-white  text-sm cursor-pointer">
              <li className="flex space-x-7 hover:bg-blue-500 hover:text-white p-2 rounded-lg items-center">
                <FontAwesomeIcon icon={faDashboard} />
                <p className="font-[500]">Dashboard</p>
              </li>

              <li className="flex space-x-7 hover:bg-blue-500 hover:text-white p-2 rounded-lg items-center">
                <FontAwesomeIcon icon={faUser} />
                <p className="font-[500]">WOW Users</p>
              </li>

              <li className="flex space-x-7 hover:bg-blue-500 hover:text-white p-2 rounded-lg items-center">
                <FontAwesomeIcon icon={faVideoCamera} />
                <p className="font-[500]">Video Clips</p>
              </li>

              <li className="flex space-x-7 hover:bg-blue-500 hover:text-white p-2 rounded-lg items-center">
                <FontAwesomeIcon icon={faTriangleExclamation} />
                <p className="font-[500]">Reported Content</p>
              </li>

              <li className="flex space-x-7 hover:bg-blue-500 hover:text-white p-2 rounded-lg items-center">
                <FontAwesomeIcon icon={faDashboard} />
                <p className="font-[500]">Category</p>
              </li>
              <li className="flex space-x-7 hover:bg-blue-500 hover:text-white p-2 rounded-lg  items-center">
                <FontAwesomeIcon icon={faFileCircleExclamation} />
                <p className="font-[500]">info page</p>
              </li>
              <li className="flex space-x-7 hover:bg-blue-500 hover:text-white p-2 rounded-lg items-center">
                <FontAwesomeIcon icon={faDashboard} />
                <p className="font-[500]">FAQ</p>
              </li>

              <li className="flex space-x-7 hover:bg-blue-500 hover:text-white p-2 rounded-lg items-center">
                <FontAwesomeIcon icon={faBell} />
                <p className="font-[500]">Push Notifications</p>
              </li>

              <li className="flex space-x-7 hover:bg-blue-500 hover:text-white p-2 rounded-lg items-center">
                <div className="flex  space-x-7">
                  <FontAwesomeIcon icon={faUserPlus} />

                  <p className="font-[500]">Internal User</p>
                </div>
                <FontAwesomeIcon icon={faAngleRight} />
              </li>
            </ul>
          </div>
        </div>
      )}
      <div className="right_content flex  w-full mt-5 gap-5 flex-col lg:ml-7 ml-0 lg:p-0  px-4  ">
        <div className="bg-[#283046] lg:w-[1250px] w-full lg:h-[238px] h-[60vh] ">
          <div className="flex items-center w-full justify-center lg:pt-7 pt-5 lg:pl-10 lg:p-5 p-2  ">
            <div className="flex  w-full items-baseline  flex-col">
              <div className=" flex justify-between lg:w-[80%] w-full items-end  space-y-5">
                <div className="flex space-x-3 items-center">
                  <div className="md:w-[109px]  w-[69px]  md:h-[63px] h-[40px] bg-white flex items-center justify-center rounded-full">
                    <FontAwesomeIcon
                      icon={faDownload}
                      className="md:w-[36px] md:h-[36px] w-[20px] h-[15px]"
                    />
                  </div>
                  <div className="w-full">
                    <div className="lg:text-[20px] text-[6px] text-white">
                      {datas?.data?.totalInstall}
                    </div>
                    <span className="lg:text-[10px] text-[6px] text-white">
                      App installed
                    </span>
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div className="md:w-[109px]  w-[69px]  md:h-[63px] h-[40px] bg-white flex items-center justify-center rounded-full"></div>
                  <div className="w-full">
                    <div className="lg:text-[20px] text-[6px] text-white">
                      {datas?.data?.activeinstall}
                    </div>
                    <span className="lg:text-[10px] text-[6px] text-white">
                      Active installed
                    </span>
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div className="md:w-[109px]  w-[69px]  md:h-[63px] h-[40px] bg-white flex items-center justify-center rounded-full"></div>
                  <div className="w-full">
                    <div className="lg:text-[20px] text-[6px] text-white">
                      {datas?.data?.churn}
                    </div>
                    <span className="lg:text-[10px] text-[6px] text-white">
                      Churn Rate
                    </span>
                  </div>
                </div>
              </div>

              <div className=" flex justify-between w-full mt-5 lg:w-[80%]   items-end space-y-5">
                <div className="flex space-x-3 items-center ">
                  <div className="md:w-[109px]  w-[69px]  md:h-[63px] h-[40px] bg-white flex items-center  justify-center rounded-full">
                    <FontAwesomeIcon
                      icon={faDownload}
                      className="md:w-[36px] md:h-[36px] w-[20px] h-[15px]"
                    />
                  </div>
                  <div className="w-full">
                    <div className="lg:text-[20px] text-[6px] text-white">
                      {datas?.data?.totaluninstall}
                    </div>
                    <span className="lg:text-[10px] text-[6px] text-white">
                      App installed
                    </span>
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div className="md:w-[109px]  w-[69px]  md:h-[63px] h-[40px] bg-white flex items-center justify-center rounded-full"></div>
                  <div className="w-full">
                    <div className="  text-white lg:text-[20px] text-[6px]">
                      {datas?.data?.aliveappusers}
                    </div>
                    <span className="lg:text-[10px] text-[6px] text-white">
                      Active installed
                    </span>
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <div className="md:w-[109px]  w-[69px]  md:h-[63px] h-[40px] bg-white flex items-center justify-center rounded-full"></div>
                  <div className="w-full">
                    <div className="lg:text-[20px] text-[6px] text-white">
                      {datas?.data?.alivechurn}
                    </div>
                    <span className="lg:text-[10px] text-[6px] text-white">
                      Churn Rate
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#283046] lg:w-[1250px] w-full p-2">
          <div className=" flex justify-between flex-col md:flex-row ">
            <div className="space-x-4 capitalize ">
              <span className="text-white">show</span>
              <select
                className="border border-gray-700 bg-[#161C32] w-16 rounded-md text-white cursor-pointer"
                onChange={(e) => setselect(e.target.value)}
              >
                <option value="10">10</option>
                <option value="50">50</option>
                <option value="100">100</option>
                <option value="500">500</option>
                <option value="1000">1000</option>
              </select>
              <sapn className="text-white">Entries</sapn>
            </div>

            {/* date picker */}

            <div className="date   bg-[#283046] flex justify-between border border-blue-700 space-x-4 mt-5">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker", "DatePicker"]}>
                    <DatePicker
                      onChange={(newValue) => setFirstValue(newValue)}
                      label="START"
                      defaultValue={dayjs("2022-04-17")}
                    />
                    <DatePicker
                      label="END"
                      value={value}
                      onChange={(newValue) => setValue(newValue)}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
            {/* {} */}
          </div>

          <div>
            <div className=" bg-[#271C1C]  border border-gray-500  mt-4 ">
              <ul className="  flex justify-between md:py-1 px-1 py-1 lg:pl-10 lg:text-[12px]  text-[5px] text-white lg:w-[90%] w-full">
                <li>Day</li>
                <li>Days install</li>
                <li>plateform</li>
                <li>Days uinstalls</li>
                <li>Plateform</li>
                <li>Churn Rate</li>
                <li>Churn plateform</li>
              </ul>
            </div>

            <div>
              {data?.data?.data?.map((data, index) => {
                return (
                  <>
                    <div className="  text-[5px] md:text-[12px] flex justify-between  lg:w-[90%] w-full mt-4 text-white items-center">
                      <span>
                        {moment(data.created_At).format("YYYY-MM-DD")}
                      </span>
                      <span className="w-[30px]">{data.totalinstall}</span>
                      <div className="flex flex-col items-baseline md:w-[80px] w-[30px]">
                        <div className="space-x-1">
                          <FontAwesomeIcon icon={faRobot} />
                          <span>{data.android_install}</span>
                        </div>
                        <div className="space-x-1">
                          <FontAwesomeIcon icon={faAppleAlt} />
                          <span>{data.ios_install}</span>
                        </div>
                      </div>
                      <span className="md:w-[30px] w-[24px]">
                        {data.totaluninstall}
                      </span>

                      <div className="flex flex-col lg:items-baseline items-center md:w-[50px] w-[40px]">
                        <div className="space-x-1">
                          <FontAwesomeIcon icon={faRobot} />
                          <span>{data.android_uninstall}</span>
                        </div>
                        <div className="space-x-1">
                          <FontAwesomeIcon icon={faAppleAlt} />
                          <span>{data.ios_uninstall}</span>
                        </div>
                      </div>

                      <span className="md:w-[30px] w-[24px]">
                        {data.totalchurn}
                      </span>

                      <div className="flex flex-col md:items-baseline items-center  md:w-[80px] w-[40px]">
                        <div className="space-x-1">
                          <FontAwesomeIcon icon={faRobot} />
                          <span>{data.android_churn}%</span>
                        </div>
                        <div className="space-x-1">
                          <FontAwesomeIcon icon={faAppleAlt} />
                          <span>{data.ios_churn}%</span>
                        </div>
                      </div>
                    </div>
                    <hr className="mt-2 bg-gray-400" />
                  </>
                );
              })}
            </div>
          </div>
          <div className="flex justify-end p-3">
            <>
              {/* <Items currentItems={currentItems} /> */}
              <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                activeLinkClassName="text-red"
                renderOnZeroPageCount={null}
                className="flex sm:gap-4 gap-2 text-white text-[10px] mt-4 bg-green-600 "
                id="paginate"
              />
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
