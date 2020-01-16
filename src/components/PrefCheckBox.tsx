import React from "react";

interface Props {
  className?: string,
  checked: boolean,
  prefName: string,
  onClick: () => void,
}

export const PrefCheckBox: React.FC<Props> = (props) => {
  return (
    <div  className={props.className}>
      <input
        type="checkbox"
        checked={props.checked}
        onClick={props.onClick}
        readOnly
      />
      <span>{props.prefName}</span>
    </div>
  )
}