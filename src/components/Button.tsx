import React from "react"

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode,
  variant: "solid" | "outline" | "text",
}

const Button = (props: IProps) => {

  if(props.variant === "text") {
    return (
      <button
        className="custom-blue-button-text epilogue"
        {...props}
      >
        {props.children}
      </button>
    )
  }

  if(props.variant === "outline") {
    return (
      <button
        className="custom-blue-button-outline"
        {...props}
      >
        {props.children}
      </button>
    )
  }

  return (
    <button 
      className="custom-blue-button"
      {...props}
    >
      {props.children}
    </button>
  )
}

export default Button;