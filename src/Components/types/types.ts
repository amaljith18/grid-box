export interface BoxState {
    id: number;
    color: string;
  }
export interface BoxProps {
    id: number;
    color: string;
    onClick: (id: number) => void;
}