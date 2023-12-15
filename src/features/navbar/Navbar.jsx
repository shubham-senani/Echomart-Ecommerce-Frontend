import { Fragment, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectItems } from "../cart/cartSlice";
import { selectUserInfo } from "../user/userSlice";

const navigation = [
  { name: "Products", link: "/", user: true },
  { name: "Products", link: "/admin", admin: true },
  { name: "Orders", link: "/admin/orders", admin: true },
];
const userNavigation = [
  { name: "My Profile", link: "/profile" },
  { name: "My Orders", link: "/my-orders" },
  { name: "Sign out", link: "/logout" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NavBar({ children }) {
  const items = useSelector(selectItems);
  let userInfo = useSelector(selectUserInfo);

  return (
    <>
      {
        <div className="min-h-full">
          <Disclosure
            as="nav"
            className=""
            style={{ backgroundColor: "#2b2a2a" }}
          >
            {({ open }) => (
              <>
                <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
                  <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex justify-center items-center flex-shrink-0">
                        <Link to="/">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            fill="currentColor"
                            style={{ color: "rgb(244 169 14)" }}
                            className="bi bi-boxes font-bold"
                            viewBox="0 0 16 16"
                          >
                            <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z" />
                          </svg>
                        </Link>
                        <div
                          className="hidden md:block m-3 text-2xl font-extrabold text-white"
                          style={{ color: "rgb(244 169 14)" }}
                        >
                          Echo-Mart
                        </div>
                      </div>
                      {userInfo ? (
                        <div className="hidden md:block">
                          <div className="ml-10 flex items-baseline space-x-4">
                            {navigation.map((item) =>
                              item[userInfo.role] ? (
                                <Link
                                  key={item.name}
                                  to={item.link}
                                  className={classNames(
                                    item.current
                                      ? "bg-gray-900 text-white"
                                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                    "rounded-md px-3 py-2 text-sm font-medium"
                                  )}
                                  aria-current={
                                    item.current ? "page" : undefined
                                  }
                                >
                                  {item.name}
                                </Link>
                              ) : null
                            )}
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>

                    <input
                      style={{ width: "50vw" }}
                      className="border rounded-3xl px-3"
                      type="search"
                      name="search"
                      id="search"
                      placeholder="Search...."
                    />

                    {/* // Desktop menu and profile */}
                    <div className="hidden md:block">
                      <div className="ml-4 flex justify-around items-center md:ml-6">
                        {userInfo ? (
                          <>
                            <Link to="/cart">
                              <button
                                type="button"
                                className="ml-auto flex-shrink-0 rounded-full p-1 border-2 border-transparent text-gray-400 hover:text-white focus:outline-none focus:text-white focus:bg-gray-700"
                              >
                                <span className="sr-only">
                                  View notifications
                                </span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="26"
                                  height="26"
                                  fill="currentColor"
                                  className="bi bi-cart3 text-white"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                </svg>
                              </button>
                            </Link>
                            {items.length > 0 && (
                              <span className="inline-flex items-center rounded-md mb-7 -ml-3 bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                                {items.length}
                              </span>
                            )}
                          </>
                        ) : (
                          <Link
                            to={"/signup"}
                            className="bg-white font-bold text-black border rounded me-3 tracking-wide text-base px-2"
                          >
                            Signup
                          </Link>
                        )}

                        {/* Profile dropdown */}
                        {userInfo ? (
                          <Menu as="div" className="relative ml-3">
                            <div>
                              <Menu.Button className="flex max-w-xs items-center rounded-full text-sm">
                                <span className="sr-only">Open user menu</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="30"
                                  height="30"
                                  fill="currentColor"
                                  className="bi bi-person-circle text-white"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                  <path
                                    fillRule="evenodd"
                                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                                  />
                                </svg>
                              </Menu.Button>
                            </div>
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                {userNavigation.map((item) => (
                                  <Menu.Item key={item.name}>
                                    {({ active }) => (
                                      <Link
                                        to={item.link}
                                        className={classNames(
                                          active ? "bg-gray-100" : "",
                                          "block px-4 py-2 text-sm text-gray-700"
                                        )}
                                      >
                                        {item.name}
                                      </Link>
                                    )}
                                  </Menu.Item>
                                ))}
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        ) : (
                          <Link
                            to={"/login"}
                            className="bg-white font-bold text-black border rounded ms-1 tracking-wide text-base px-2"
                          >
                            {" "}
                            Login
                          </Link>
                        )}
                      </div>
                    </div>

                    {/* // Mobile menu button */}
                    <div className="-mr-2 flex md:hidden">
                      {/* Mobile menu button */}
                      {userInfo ? (
                        <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-black p-1 text-white ">
                          <span className="sr-only">Open main menu</span>
                          {open ? (
                            <XMarkIcon
                              className="block h-7 w-7"
                              aria-hidden="true"
                            />
                          ) : (
                            <Bars3Icon
                              className="block h-7 w-7"
                              aria-hidden="true"
                            />
                          )}
                        </Disclosure.Button>
                      ) : (
                        <Link
                          to={"/login"}
                          className="bg-white font-bold text-black border rounded me-3 tracking-wide text-base px-2"
                        >
                          Login
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
                {/* // Mobile menu, show/hide based on menu state. */}
                {userInfo ? (
                  <Disclosure.Panel className="md:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                      {navigation.map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.link}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "block rounded-md px-3 py-2 text-base font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </div>
                    <div className="border-t border-gray-700 pb-3 pt-4">
                      <div className="flex items-center px-5">
                        <div className="flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            fill="currentColor"
                            className="bi bi-person-circle text-white"
                            viewBox="0 0 16 16"
                          >
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                            <path
                              fillRule="evenodd"
                              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                            />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <div className="text-base font-medium leading-none text-white">
                            {/* this should come from userInfo */}
                            {userInfo.name}
                          </div>
                          <div className="text-sm font-medium leading-none text-gray-400">
                            {/* {userInfo.email} */}
                          </div>
                        </div>
                        {userInfo ? (
                          <Link to="/cart">
                            <button
                              type="button"
                              className="ml-auto flex-shrink-0 rounded-full p-1 border-2 border-transparent text-gray-400 hover:text-white focus:outline-none focus:text-white focus:bg-gray-700"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                fill="currentColor"
                                className="bi bi-cart3 text-white"
                                viewBox="0 0 16 16"
                              >
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                              </svg>
                            </button>
                          </Link>
                        ) : (
                          <button className="bg-white font-bold text-black bordser rounded me-3 tracking-wide text-base px-2">
                            login
                          </button>
                        )}
                        {items.length > 0 && (
                          <span className="inline-flex items-center rounded-md bg-red-50 mb-7 -ml-3 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                            {items.length}
                          </span>
                        )}
                      </div>
                      <div className="mt-3 space-y-1 px-2">
                        {userNavigation.map((item) => (
                          <Link
                            key={item.name}
                            to={item.link}
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </Disclosure.Panel>
                ) : (
                  ""
                )}
              </>
            )}
          </Disclosure>

          <main>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
        </div>
      }
    </>
  );
}

export default NavBar;
