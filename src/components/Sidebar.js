import React from "react";

function Sidebar({ user, currentTab, tabs, changeTab }) {
    return (
        <div className="w-1/5 h-full my-4 ml-4 bg-white shadow-xl flex flex-col justify-start items-center rounded-md">
            <div className="h-2/5 flex flex-col justify-center items-center">
                <h3 className="text-[22px] leading-5 font-bold tracking-[0.5px] text-[#212A2F]">
                    {user?.name ? user.name : "Username"}
                </h3>
            </div>
            <ul className="w-full flex flex-col justify-between items-start list-none">
                {tabs
                    ? tabs.map((tab, index) => {
                          return (
                              <li
                                  key={index}
                                  onClick={() => changeTab(tab)}
                                  className="w-full flex flex-row py-2 mx-2 border-b-2 cursor-pointer"
                              >
                                  <span
                                      className={`hover:font-bold text-[12px] leading-7 tracking-[1.7px] uppercase text-[#212A2F] ${
                                          currentTab === tab
                                              ? "font-bold"
                                              : "font-semibold"
                                      }`}
                                  >
                                      {tab}
                                  </span>
                              </li>
                          );
                      })
                    : ""}
            </ul>
        </div>
    );
}

export default Sidebar;
