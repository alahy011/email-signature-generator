import React from "react";

type Props = {
  formData: {
    github: string;
    linkedin: string;
    photoUrl: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};

export default function StepSocials({ formData, setFormData }: Props) {
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
        <label className="text-sm font-medium text-gray-700">GitHub URL</label>
        <input
          type="text"
          name="github"
          value={formData.github}
          onChange={handleChange}
          placeholder="https://github.com/yourusername"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">LinkedIn URL</label>
        <input
          type="text"
          name="linkedin"
          value={formData.linkedin}
          onChange={handleChange}
          placeholder="https://linkedin.com/in/yourprofile"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">Profile Photo URL</label>
        <input
          type="text"
          name="photoUrl"
          value={formData.photoUrl}
          onChange={handleChange}
          placeholder="https://yourhost.com/photo.jpg"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
    </div>
  );
}
