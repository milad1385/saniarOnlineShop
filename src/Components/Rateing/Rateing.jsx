import React, { useState } from "react";
import Star from "../Star/Star";

function Rateing({
  maxRating = 5,
  color = "#fcc419",
  size = 28,
  defaultValue = 0,
  message = [],
}) {
  const [rateing, setRateing] = useState(defaultValue);
  const [temporary, setTemporary] = useState(0);
  return (
    <div className="flex gap-x-2">
      <div className="flex items-center mb-4 justify-end">
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            onRate={() => setRateing(i + 1)}
            onHoverIn={() => setTemporary(i + 1)}
            onHoverOut={() => setTemporary(0)}
            full={temporary ? temporary >= i + 1 : rateing >= i + 1}
            color={color}
            size={size}
          />
        ))}
      </div>
      <div className="w-[90px]">
        <span className="block mt-1 text-lg font-DanaDemiBold">
          {message.length === maxRating
            ? message[temporary ? temporary - 1 : rateing - 1]
            : temporary || rateing || ""}
        </span>
      </div>
    </div>
  );
}

export default Rateing;
