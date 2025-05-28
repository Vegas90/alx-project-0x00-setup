//Create a button component that accepts title and styles as an argument. Create multiple instances (sizes: small, medium, Large - shapes: rounded-sm, rounded-md, rounded-full) of the button component under the /landing paths.
import React from 'react';
interface ButtonProps {
  title: string;
  styles?: string;
}   
const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button className={`px-4 py-2 text-white bg-blue-500 rounded ${styles}`}>
      {title}
    </button>
  );
};
export default Button;
