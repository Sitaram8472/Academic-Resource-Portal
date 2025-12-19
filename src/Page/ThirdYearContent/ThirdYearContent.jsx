import React, { useState } from "react";

const ThirdYearContent = () => {
  const [activeSection, setActiveSection] = useState("notice");
  const [assignments, setAssignments] = useState([]);
  const [file, setFile] = useState(null);

  const handleUpload = () => {
    if (file) {
      setAssignments([...assignments, file.name]);
      setFile(null);
    }
  };

  const handleDelete = (index) => {
    const updated = assignments.filter((_, i) => i !== index);
    setAssignments(updated);
  };

  const renderContent = () => {
    switch (activeSection) {
      case "notice":
        return <h2 className="text-2xl font-semibold">📢 Live Notices</h2>;
      case "assignment":
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">📝 Assignments</h2>

            <div className="flex items-center gap-3 mb-4">
              <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                className="border border-gray-600 bg-black text-white p-2 rounded"
              />
              <button
                onClick={handleUpload}
                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
              >
                Upload
              </button>
            </div>

            <ul className="space-y-2">
              {assignments.length > 0 ? (
                assignments.map((assignment, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center bg-gray-800 p-3 rounded"
                  >
                    <span>{assignment}</span>
                    <button
                      onClick={() => handleDelete(index)}
                      className="text-red-400 hover:text-red-600"
                    >
                      ❌ Delete
                    </button>
                  </li>
                ))
              ) : (
                <p className="text-gray-400">No assignments uploaded yet.</p>
              )}
            </ul>
          </div>
        );
      case "notes":
        return <h2 className="text-2xl font-semibold">📚 Notes Section</h2>;
      case "previous":
        return <h2 className="text-2xl font-semibold">📖 Previous Year Questions</h2>;
      case "internal":
        return <h2 className="text-2xl font-semibold">📊 Internal Marks</h2>;
      case "marks":
        return <h2 className="text-2xl font-semibold">⭐ Marks Point</h2>;
      default:
        return <h2 className="text-2xl font-semibold">Select a section</h2>;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Left Sidebar */}
      <div className="w-1/4 bg-gray-900 shadow-md p-4 space-y-4">
        <div
          className={`p-3 rounded-md cursor-pointer font-semibold ${
            activeSection === "notice"
              ? "bg-gray-700"
              : "hover:bg-gray-800"
          }`}
          onClick={() => setActiveSection("notice")}
        >
          📢 Notice (Live)
        </div>

        <ul className="space-y-2">
          {["assignment", "notes", "previous", "internal", "marks"].map((item) => (
            <li
              key={item}
              className={`p-2 rounded cursor-pointer ${
                activeSection === item
                  ? "bg-gray-700"
                  : "hover:bg-gray-800"
              }`}
              onClick={() => setActiveSection(item)}
            >
              {item === "assignment" && "📝 Assignment"}
              {item === "notes" && "📚 Notes"}
              {item === "previous" && "📖 Previous Year Q"}
              {item === "internal" && "📊 Internal Marks"}
              {item === "marks" && "⭐ Marks Point"}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Content Area */}
      <div className="flex-1 p-6 bg-black">{renderContent()}</div>
    </div>
  );
};

export default ThirdYearContent;
