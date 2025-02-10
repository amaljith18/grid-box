import {} from 'react'

const Box = ({ id, color, onClick }: BoxProps) => {
    return (
        <>
            <div
                className="w-24 h-24 border border-gray-300 cursor-pointer transition-colors duration-300"
                style={{ backgroundColor: color }}
                onClick={() => onClick(id)}
            />
        </>
    )
}

export default Box


interface BoxProps {
    id: number;
    color: string;
    onClick: (id: number) => void;
}