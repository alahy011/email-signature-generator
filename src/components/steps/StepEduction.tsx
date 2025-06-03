import React from "react";

type Props = {
  formData: {
    university: string;
    studentId: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};

export default function StepEducation({ formData, setFormData }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      <div>
        <label className="text-sm font-medium text-gray-700">University</label>
        <input
          type="text"
          name="university"
          value={formData.university}
          onChange={handleChange}
          placeholder="University of Tech"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">Student ID</label>
        <input
          type="text"
          name="studentId"
          value={formData.studentId}
          onChange={handleChange}
          placeholder="123456789"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
    </div>
  );
}
