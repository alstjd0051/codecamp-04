import { Rate } from "antd";
import { useState } from "react";

export default function LibraryStarPage() {
  const [value, seValue] = useState(5);

  function handleChange(value: number) {
    seValue(value);
  }

  return (
    <span>
      <Rate onChange={handleChange} value={value} />
    </span>
  );
}
