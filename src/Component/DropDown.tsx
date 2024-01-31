import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const department = [
  { id: 1, name: "Computer Science" },
  { id: 2, name: "Software Engineering" },
  { id: 3, name: "Information Technology" },
  { id: 4, name: "Electrical Engineering" },
  { id: 5, name: "Mechanical Engineering" },
  { id: 6, name: "Civil Engineering" },
  { id: 7, name: "Chemical Engineering" },
  { id: 8, name: "Biomedical Engineering" },
  { id: 9, name: "Aerospace Engineering" },
  { id: 10, name: "Environmental Engineering" },
  // ... add more departments as needed
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function DropDown() {
  const [selected, setSelected] = useState(department[1]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative w-full">
            <Listbox.Button className="relative w-[100%] px-3 py-1.5 bg-transparent border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#E3C3A9]">
              <span className="flex items-center">
                <span className="ml-3 block truncate">{selected.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-lg bg-[#FFFCF1] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {department.map((department) => (
                  <Listbox.Option
                    key={department.id}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-black text-white" : "text-gray-900",
                        "relative cursor-default select-none py-2 pl-3 pr-9"
                      )
                    }
                    value={department}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-light",
                              "ml-3 block truncate"
                            )}
                          >
                            {department.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-black",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
