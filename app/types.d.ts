import { Dispatch } from "react";

declare global {
  type House = {
    id: number;
    name: string;
    floors: number;
    color: string;
  };

  type HouseProps = {
    house: House;
  } & HouseActions; 

  type HouseActions = {
    updateHouse: <K extends keyof House>(id: number, key: K, value: House[K]) => void;
    duplicateHouse: (id: number) => void;
    removeHouse: (id: number) => void;
  };

  type CityViewProps = {
    houses: House[];
  };

  type HouseListProps = {
    houses: House[];
    setHouses: Dispatch<SetStateAction<House[]>>;
  };

  type BaseInputProps = & InputHTMLAttributes<HTMLInputElement> &{
    label: string;
    id: string;
  };

  type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    icon?: ReactNode;
    label: string;
  };

  type SelectInputProps = {
    label: string;
    id: string;
    options: string[]; 
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  } & React.SelectHTMLAttributes<HTMLSelectElement>;
  
  type WeatherData = {
    main?: { temp: number };
    weather?: { main: string }[];
  }

  type AlertProps = {
    type: "success" | "warning" | "error";
    message: string;
  }

  type SkeletonProps = {
    width?: string;
    height?: string;
  }

}
