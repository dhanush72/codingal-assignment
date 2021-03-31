import React from "react";
import { checkboxList } from "../util/checkboxData";

const Checkbox = ({
  classCompleted,
  setClassCompleted,
  classAborted,
  setClassAborted,
  otherReason,
  setOtherReason,
}) => {
  return (
    <>
      <div>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="w-6 h-6"
            onChange={() => setClassCompleted(!classCompleted)}
            checked={classCompleted}
          />
          <span className="ml-3 text-lg text-gray-800">Class completed</span>
        </label>
      </div>
      <div>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="w-6 h-6"
            onChange={() => setClassAborted(!classAborted)}
            checked={classAborted}
          />
          <span className="ml-3 text-lg text-gray-800">
            Class interrupted/aborted
          </span>
        </label>

        {classAborted && (
          <ul className="block px-6 py-3 space-y-4 ">
            {checkboxList.map(({ id, title }) => (
              <li key={id}>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="w-5 h-5" />
                  <span className="ml-3 text-sm text-gray-800">{title}</span>
                </label>
              </li>
            ))}
            <li>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="w-5 h-5"
                  onChange={() => setOtherReason(!otherReason)}
                  checked={otherReason}
                />
                <span className="ml-3 text-sm text-gray-800">Other reason</span>
              </label>
              {otherReason && (
                <textarea
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                  placeholder="Type here"
                ></textarea>
              )}
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Checkbox;
