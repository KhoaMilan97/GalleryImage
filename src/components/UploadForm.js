import React, { useState } from "react";

import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [err, setErr] = useState("");

  const imgType = ["image/png", "image/jpeg"];

  const handleChange = (e) => {
    const selected = e.target.files[0];
    if (selected && imgType.includes(selected.type)) {
      setFile(selected);
      setErr("");
    } else {
      setFile(null);
      setErr("Please selected an image file (png or jpeg)");
    }
  };

  return (
    <form>
      <label>
        <input type="file" onChange={handleChange} />
        <span>+</span>
      </label>
      <div className="output">
        {err && <div className="error">{err}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
