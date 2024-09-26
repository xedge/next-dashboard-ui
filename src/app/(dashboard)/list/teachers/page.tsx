import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import Image from "next/image";
import React from "react";

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Teacher ID",
    accessor: "teacherId",
    classname: "hidden md:table-cell",
  },
  {
    header: "Subjects",
    accessor: "subjects",
    classname: "hidden md:table-cell",
  },
  {
    header: "Classes",
    accessor: "classes",
    classname: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    classname: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    classname: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

const TeacherListPage = () => {
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Teacher</h1>
        <div className="flex flex-col md:flex-row items-center gap-4  w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow cursor-pointer">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow cursor-pointer">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow cursor-pointer">
              <Image src="/plus.png" alt="" width={14} height={14} />
            </button>
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default TeacherListPage;
