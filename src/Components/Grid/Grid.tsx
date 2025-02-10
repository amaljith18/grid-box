import  { useState, useCallback } from 'react';
import Box from '../Box/Box';
import { BoxState } from '../types/types';

const Grid = () => {
    const createBoxes = (count: number): BoxState[] =>
        Array.from({ length: count }, (_, id) => ({ id, color: "white" }));

    const [boxes, setBoxes] = useState<BoxState[]>(createBoxes(9));

    const [clickOrder, setClickOrder] = useState<number[]>([]);

    const handleBoxClick = (id: number) => {
        setBoxes((prevBoxes) =>
            prevBoxes.map((box) =>
                box.id === id && box.color === 'white' ? { ...box, color: 'black' } : box
            )
        );
        setClickOrder((prevOrder) => [...prevOrder, id]);
    };

    const resetBoxes = useCallback(() => {
        const orderToReset = [...clickOrder];
        orderToReset.forEach((id, index) => {
            setTimeout(() => {
                setBoxes((prevBoxes) =>
                    prevBoxes.map((box) =>
                        box.id === id ? { ...box, color: 'white' } : box
                    )
                );
            }, index * 300);
        });

        setClickOrder([]);
    }, [clickOrder]);

    return (
        <div className="flex flex-col items-center gap-5">
            <div className="grid grid-cols-3 gap-3">
                {boxes.map((box) => (
                    <Box
                        key={box.id}
                        id={box.id}
                        color={box.color}
                        onClick={handleBoxClick}
                    />
                ))}
            </div>
            <button
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-colors"
                onClick={resetBoxes}
            >
                Reset
            </button>
        </div>
    );
};

export default Grid;