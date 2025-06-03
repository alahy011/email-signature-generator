import React from "react";

type Props = {
  formData: {
    name: string;
    title: string;
    email: string;
    phone: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};

export default function StepPersonal({ formData, setFormData }: Props) {
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
        <label className="text-sm font-medium text-gray-700">Full Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Hamid Reza"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">Title / Role</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="IT Student | Aspiring Software Developer"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">Phone</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+61 400 123 456"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
    </div>
  );
}
