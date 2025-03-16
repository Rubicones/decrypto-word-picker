import React, { useEffect, useState } from "react";

interface TypingTextProps {
    text: string;
    classList?: string;
    latency?: number;
    speed?: number;
}

const TypingText: React.FC<TypingTextProps> = ({
    text,
    classList = "",
    speed = 80,
}) => {
    const [visibleText, setVisibleText] = useState("");

    async function showText() {
        while (text.length) {
            const time = Math.floor(Math.random() * speed);
            await new Promise((res) => setTimeout(() => res(1), time));
            console.log(text.slice(0, 1));

            setVisibleText((prev) => prev + text.slice(0, 1));
            text = text.slice(1, text.length);
        }
    }

    useEffect(() => {
        setVisibleText("");
        showText();
    }, [text]);

    return (
        <div className='z-10'>
            <span className={classList}>{visibleText}</span>
        </div>
    );
};

export default TypingText;
