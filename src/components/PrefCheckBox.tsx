import React from "react";

interface Props {
  className?: string,
  checked: boolean,
  prefName: string,
  onClick: () => void,
}

export const PrefCheckBox: React.FC<Props> = (props) => {
  return (
    <div
      className={props.className}
      onClick={props.onClick}>
      <input
        type="checkbox"
        checked={props.checked}
        readOnly />
      <span style={{ paddingLeft: "0.5rem" }}>
        {props.prefName}
      </span>
    </div>
  )
}