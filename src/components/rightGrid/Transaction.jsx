import React from "react";
import { Button } from "../ui/button";
import { CarTaxiFront, Plus } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "../ui/table";
import { tailwindEffect } from "../../data/data";

const Transaction = ({transaction, showIcon= true}) => {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <h1 className="transaction text-[1.1rem] font-semibold">Transaction</h1>
        <Button className="bg-secondary cursor-pointer w-fit h-fit hover:bg-red-800 text-white rounded-lg p-2">
          <Plus size={20} />
        </Button>
      </div>
      {/* table */}
      <div>
        <Table>
          <TableBody>
            {transaction.map((data, index) => (
            <TableRow className="" key={index}>
              {showIcon &&
              <TableCell className={`${tailwindEffect} mt-3 h-[3rem] w-[3rem] hover:shadow-md bg-white overflow-clip group text-secondary px-3 py-4 rounded-2xl justify-center items-center flex text-center origin-center`}>
                <data.icon className={`transition-transform duration-500 ease-in-out group-hover:rotate-[360deg] group-hover:scale-150`} />
              </TableCell>
              }
              <TableCell className="">{data.expense}<br/><span className="text-slate-400">{data.time}</span></TableCell>
              <TableCell className="text-right text-primary font-semibold">{data.price}</TableCell>
            </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Transaction;
