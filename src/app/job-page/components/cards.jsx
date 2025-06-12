import React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  UserRound,
  BriefcaseBusiness,
  Clock,
  CircleDollarSign,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Cards = ({ jobs }) => (
  <div className="space-y-6">
    {jobs.map((job) => (
      <div
        key={job.id}
        className="p-6 rounded-lg shadow-sm border border-gray-200"
      >
        <div className="flex flex-col sm:flex-row justify-between items-start">
          <div className="flex-grow mb-4 sm:mb-0 sm:mr-4">
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="mt-1 mb-3 text-sm">{job.description}</p>
            <div className="flex flex-wrap gap-2 items-center">
              {[
                job.type && {
                  icon: <UserRound className="h-4 w-4 text-blue-500" />,
                  label: job.type,
                },
                job.shift && {
                  icon: <BriefcaseBusiness className="h-4 w-4 text-blue-500" />,
                  label: job.shift,
                },
                job.hours && {
                  icon: <Clock className="h-4 w-4 text-blue-500" />,
                  label: job.hours,
                },
                job.salaryRange && {
                  icon: <CircleDollarSign className="h-4 w-4 text-blue-500" />,
                  label: job.salaryRange,
                },
              ]
                .filter(Boolean)
                .map((item, idx) => (
                  <Badge
                    key={idx}
                    variant="outline"
                    className="text-gray-700 border border-blue-300 px-3 py-1.5 gap-2 rounded-lg text-sm font-medium flex items-center"
                  >
                    {item.icon}
                    <span className="text-xs font-medium text-foreground">
                      {item.label}
                    </span>
                  </Badge>
                ))}
            </div>
          </div>
          <Link href={`/job-page/${job.id}`} passHref>
            <div className="whitespace-nowrap mt-2 sm:mt-0 inline-flex items-center hover:text-blue-600 font-medium cursor-pointer group">
              Aplicar
              <ArrowUpRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </Link>
        </div>
      </div>
    ))}
  </div>
);

export default Cards;
