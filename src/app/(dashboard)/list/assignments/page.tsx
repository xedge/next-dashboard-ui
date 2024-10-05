import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { assignmentsData, examsData, role, subjectsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Assignments = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  dueDate: string;
};

const columns = [
  {
    header: "Subject",
    accessor: "subject",
  },
  {
    header: "Class",
    accessor: "class",
    classname: "hidden md:table-cell",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    classname: "hidden md:table-cell",
  },
  {
    header: "Due Date",
    accessor: "dueDate",
    classname: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

const AssignmentsListPage = () => {
  const renderRow = (item: Assignments) => {
    return (
      <tr
        key={item.id}
        className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
      >
        <td className="flex items-center gap-4 p-4">{item.subject}</td>
        <td className="hidden md:table-cell">{item.class}</td>
        <td className="hidden md:table-cell">{item.teacher}</td>
        <td className="hidden md:table-cell">{item.dueDate}</td>
        <td>
          <div className="flex items-center gap-2">
            <Link href={`/list/subjects/${item.id}`}>
              <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
                <Image src="/edit.png" alt="" height={16} width={16}></Image>
              </button>
            </Link>
            {role === "admin" && (
              <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
                <Image src="/delete.png" alt="" height={16} width={16}></Image>
              </button>
            )}
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">
          All Assignments
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4  w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow cursor-pointer">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow cursor-pointer">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "admin" && (
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow cursor-pointer">
                <Image src="/plus.png" alt="" width={14} height={14} />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={assignmentsData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default AssignmentsListPage;
